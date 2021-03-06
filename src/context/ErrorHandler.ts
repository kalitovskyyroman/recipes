/* eslint-disable consistent-return */
import { AxiosError, AxiosResponse } from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import http from "../api/http";
import PathsEnum from "../enums/PathsEnum";
import ResponseStatusesEnum from "../enums/ResponseStatusesEnum";
import { useUser } from "../hooks/useUser";
import { refresh } from "../services/auth.service";
import IErrorResponse from "../services/interfaces/responses/IErrorResponse";
import { useLoader } from "./useLoader";

const ErrorHandler = ({ children }: { children: JSX.Element }) => {
    const { removeUser, setTokens } = useUser();
    const { removeRequest } = useLoader();
    const navigator = useNavigate();

    useEffect(() => {
        const onResponseInterceptor = (response: AxiosResponse) => {
            removeRequest();
            return response;
        };

        const onErrorInterceptor = async (error: AxiosError<IErrorResponse>) => {
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
                case ResponseStatusesEnum.BadRequest: {
                    throw error.response.data;
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
