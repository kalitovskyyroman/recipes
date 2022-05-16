/* eslint-disable consistent-return */
import { AxiosRequestConfig } from "axios";
import { useLayoutEffect } from "react";
import http from "../api/http";
import { useUser } from "../hooks/useUser";
import { useLoader } from "./useLoader";

const Interceptors = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated, getTokens } = useUser();
    const { addRequest } = useLoader();

    useLayoutEffect(() => {
        const onRequestInterceptor = (request: AxiosRequestConfig) => {
            addRequest();

            if (isAuthenticated) {
                request.headers!.Authorization! = `Bearer ${getTokens().accessToken}`;
            }

            return request;
        };

        const requestInterceptor = http.interceptors.request.use(onRequestInterceptor);

        return () => {
            http.interceptors.request.eject(requestInterceptor);
        };
    }, []);

    return children;
};

export default Interceptors;
