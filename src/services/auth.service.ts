/* eslint-disable import/prefer-default-export */
import { AxiosResponse } from "axios";
import http from "../api/http";
import { IUserRequest, IUserResponse } from "../interfaces/IUser";
import ILoginResponse from "./response/ILoginResponse";

const path = "/registration";

const login = async (email: string, password: string): Promise<AxiosResponse<ILoginResponse>> =>
    http.post<ILoginResponse>("/login", { email, password });

const registerUser = async (user: IUserRequest) => {
    const response = await http.post<IUserResponse>(path, user);
    return response;
};

const logout = async () => http.get("/logout");

export { login, registerUser, logout };
