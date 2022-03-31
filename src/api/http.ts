/* eslint-disable import/prefer-default-export */
import axios from "axios";
import config from "../config.json";

const serverUrl = config.SERVER_URL;

export default axios.create({
    withCredentials: true,
    baseURL: serverUrl,
});
