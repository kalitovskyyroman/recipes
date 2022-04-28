import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect } from "react";
import http from "../api/http";
import { useUser } from "../hooks/useUser";

const Interceptors = ({ children }: { children: JSX.Element }) => {
    const { user } = useUser();

    useEffect(() => {
        const onRequestInterceptor = (request: AxiosRequestConfig) => {
            console.info("request: ", request);
            console.info("headr: ", user.tokens.accessToken);

            return request;
        };

        const onResponseInterceptor = (response: AxiosResponse) => {
            console.info("response: ", response);

            return response;
        };

        const onErrorInterceptor = (error: AxiosError) => {
            console.error("error: ", error);

            return error;
        };

        const requestInterceptor = http.interceptors.request.use(onRequestInterceptor, onErrorInterceptor);
        const responseInterceptor = http.interceptors.response.use(onResponseInterceptor, onErrorInterceptor);

        return () => {
            http.interceptors.request.eject(requestInterceptor);
            http.interceptors.response.eject(responseInterceptor);
        };
    }, []);

    return children;
};

export default Interceptors;
