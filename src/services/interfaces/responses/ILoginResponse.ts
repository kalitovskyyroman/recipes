import ITokens from "../../../interfaces/ITokens";
import IUserDto from "../../../interfaces/IUserDto";

interface ILoginResponse {
    tokens: ITokens;
    user: IUserDto;
}

export default ILoginResponse;
