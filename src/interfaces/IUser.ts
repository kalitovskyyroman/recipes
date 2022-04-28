import ITokens from "../services/response/ITokens";
import IUserDto from "../services/response/IUserDto";

export interface IUserRequest {
    name: string;
    email: string;
    password: string;
}

export interface IUserResponse {
    id: string;
    name: string;
    email: string;
    role: {
        name: string;
    };
    createdAt: string;
    updatedAt: string;
}

export interface IUser {
    isAuthenticated: boolean;
    data: IUserDto;
    tokens: ITokens;
}
