/* eslint-disable consistent-return */
import { AxiosError, AxiosResponse } from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import http from "../api/http";
import PathsEnum from "../enums/PathsEnum";
import ResponseStatusesEnum from "../enums/ResponseStatusesEnum";
import { useUser } from "../hooks/useUser";
import { refresh } from "../services/auth.service";

const ErrorHandler = ({ children }: { children: JSX.Element }) => {
    const { removeUser, setTokens } = useUser();
    const navigator = useNavigate();

    useEffect(() => {
        const onResponseInterceptor = (response: AxiosResponse) => response;

        const onErrorInterceptor = async (error: AxiosError) => {
            const originalRequest = error.config;

            switch (error.response?.status) {
                case ResponseStatusesEnum.Unauthorized: {
                    if (error?.config?.url === "/refresh") {
                        removeUser();
                        navigator(PathsEnum.Login, { replace: true });
                        return;
                    }

                    const response = await refresh();
                    setTokens(response.data.tokens);
                    return http.request(originalRequest);
                }
                default:
                    navigator(PathsEnum.NotFound);
                    break;
            }
        };

        const responseInterceptor = http.interceptors.response.use(onResponseInterceptor, onErrorInterceptor);

        return () => {
            http.interceptors.response.eject(responseInterceptor);
        };
    }, []);

    return children;
};

export default ErrorHandler;
