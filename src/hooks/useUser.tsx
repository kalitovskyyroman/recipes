/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/require-default-props */
import React, { createContext, useContext, useState, useEffect } from "react";
import { IUser } from "../interfaces/IUser";

const defaultUser: IUser = {
    isAuthenticated: false,
    data: {
        id: "",
        name: "",
        email: "",
        role: {
            name: "",
        },
        updatedAt: "",
        createdAt: "",
    },
    tokens: {
        accessToken: "",
        refreshToken: "",
    },
};

interface IUserContext {
    user: IUser;
    isAuthenticated: boolean;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
    removeUser: () => void;
}

const UserContext = createContext({} as IUserContext);

interface IUserProvider {
    children?: JSX.Element | JSX.Element[];
}

const UserProvider = ({ children }: IUserProvider) => {
    const [user, setUser] = useState<IUser>(
        localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : defaultUser
    );

    const removeUser = () => setUser(defaultUser);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    return (
        <UserContext.Provider value={{ user, removeUser, setUser, isAuthenticated: user.isAuthenticated }}>
            {children}
        </UserContext.Provider>
    );
};

const useUser = () => useContext<IUserContext>(UserContext);

export { UserProvider, useUser };
