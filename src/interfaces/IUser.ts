import ITokens from "./ITokens";
import IUserDto from "./IUserDto";

export interface IUser {
    isAuthenticated: boolean;
    data: IUserDto;
    tokens: ITokens;
}
