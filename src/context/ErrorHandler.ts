/* eslint-disable no-param-reassign */
/* eslint-disable no-debugger */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable consistent-return */
import { AxiosError, AxiosResponse } from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import http from "../api/http";
import PathsEnum from "../enums/PathsEnum";
import { useUser } from "../hooks/useUser";
import { refresh } from "../services/auth.service";

const ErrorHandler = ({ children }: { children: JSX.Element }) => {
    const { removeUser, setTokens } = useUser();
    const navigator = useNavigate();

    useEffect(() => {
        const onResponseInterceptor = (response: AxiosResponse) => response;

        const onErrorInterceptor = async (error: AxiosError<{_isRetry?: boolean}>) => {
            const originalRequest = error.config;

            if (error.response?.status === 401) {
                error.config!._isRetry = true
                try {
                    const response = await refresh();
                    setTokens(response.data.tokens);

                    return http.request(originalRequest);
                } catch (e) {
                    removeUser();
                    navigator(PathsEnum.Login, { replace: true });
                }
            }
            if (error.response?.status === 500) {
                navigator(PathsEnum.NotFound);
            }
            return Promise.reject("lol");
        };

        const responseInterceptor = http.interceptors.response.use(onResponseInterceptor, onErrorInterceptor);

        return () => {
            http.interceptors.response.eject(responseInterceptor);
        };
    }, []);

    return children;
};

export default ErrorHandler;
