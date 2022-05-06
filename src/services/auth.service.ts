import { post, get } from "../api/http";
import ILoginRequest from "./interfaces/requests/ILoginRequest";
import ILoginResponse from "./interfaces/responses/ILoginResponse";
import IRegisterResponse from "./interfaces/responses/IRegisterResponse";
import IRegisterRequest from "./interfaces/requests/IRegisterRequest";

const login = async (email: string, password: string) =>
    post<ILoginRequest, ILoginResponse>("/login", { email, password });

const register = async (name: string, email: string, password: string) =>
    post<IRegisterRequest, IRegisterResponse>("/registration", { name, email, password });

const refresh = async () => get<ILoginResponse>("/refresh");

const logout = async () => get<any>("/logout");

export { login, register, logout, refresh };
