/* eslint-disable import/prefer-default-export */
import http from "../api/http";
import { IUserRequest } from "../interfaces/IUser";

const path = "/users";

const registerUser = async (user: IUserRequest) => {
    const response = await http.post(path, user);
    console.log(response);
};

export { registerUser };
