/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext } from "react";
import { UserProvider } from "../hooks/useUser";
import Interceptors from "../context/Interceptors";
import ErrorHandler from "../context/ErrorHandler";

interface IGlobalProvider {
    children: JSX.Element;
}

const GlobalContext = createContext({});

const GlobalProvider = ({ children }: IGlobalProvider) => (
    <GlobalContext.Provider value={{}}>
        <UserProvider>
            <ErrorHandler>
                <Interceptors>{children}</Interceptors>
            </ErrorHandler>
        </UserProvider>
    </GlobalContext.Provider>
);

export default GlobalProvider;
