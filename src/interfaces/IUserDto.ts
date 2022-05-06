import IRole from "./IRole";

interface IUserDto {
    id: string;
    name: string;
    email: string;
    role: IRole;
    createdAt: string;
    updatedAt: string;
}

export default IUserDto;
