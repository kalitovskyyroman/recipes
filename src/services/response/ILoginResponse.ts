import ITokens from "./ITokens";
import IUserDto from "./IUserDto";

interface ILoginResponse {
    tokens: ITokens;
    user: IUserDto;
}

export default ILoginResponse;
