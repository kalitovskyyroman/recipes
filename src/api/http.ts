/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import axios from "axios";
import ApiConfig from "../config.json";

const http = axios.create({
    withCredentials: true,
    baseURL: ApiConfig.SERVER_URL,
});

export default http;
