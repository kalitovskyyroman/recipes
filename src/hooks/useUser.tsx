/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/require-default-props */
import React, { createContext, useContext, useState, useEffect } from "react";
import { IUser } from "../interfaces/IUser";
import ITokens from "../interfaces/ITokens";

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
    setUser: (userData: Partial<IUser>) => void;
    removeUser: () => void;
    getTokens: () => ITokens;
    setTokens: (tokens: ITokens) => void;
}

const UserContext = createContext({} as IUserContext);

interface IUserProvider {
    children?: JSX.Element | JSX.Element[];
}

const UserProvider = ({ children }: IUserProvider) => {
    const [user, setUser] = useState<IUser>(
        localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : defaultUser
    );

    const setUserData = (userData: Partial<IUser>) => setUser((prev: IUser) => ({ ...prev, ...userData }));

    const removeUser = () => setUser(defaultUser);

    const getTokens = (): ITokens => ({
        ...(JSON.parse(localStorage.getItem("user")!) as IUser).tokens,
    });

    const setTokens = (tokens: ITokens) => {
        setUserData({ tokens });
        localStorage.setItem("user", JSON.stringify({ ...user, tokens }));
    };

    useEffect(() => {
        if (JSON.stringify(user) !== localStorage.getItem("user")) {
            localStorage.setItem("user", JSON.stringify(user));
        }
    }, [user]);

    return (
        <UserContext.Provider
            value={{
                user,
                removeUser,
                setUser: setUserData,
                isAuthenticated: user.isAuthenticated,
                getTokens,
                setTokens,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

const useUser = () => useContext<IUserContext>(UserContext);

export { UserProvider, useUser };
