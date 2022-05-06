/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable consistent-return */
import { AxiosRequestConfig } from "axios";
import { useEffect } from "react";
import http from "../api/http";
import { useUser } from "../hooks/useUser";

const Interceptors = ({ children }: { children: JSX.Element }) => {
    const { user, isAuthenticated, getTokens, setUser, removeUser, setTokens } = useUser();

    useEffect(() => {
        const onRequestInterceptor = (request: AxiosRequestConfig) => {
            
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
