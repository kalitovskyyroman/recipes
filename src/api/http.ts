import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import ApiConfig from "../config.json";

const http = axios.create({
    withCredentials: true,
    baseURL: ApiConfig.SERVER_URL,
});

export const post = <Request, Response>(
    url: string,
    data?: Request,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<Response>> => http.post<Response>(url, data, config);

export const get = <Response>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Response>> =>
    http.get<Response>(url, config);

export default http;
