/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext } from "react";
import { UserProvider } from "../hooks/useUser";
import Interceptors from "../context/Interceptors";
import ErrorHandler from "../context/ErrorHandler";
import { SnackbarProvider } from "../context/useSnackbar";

interface IGlobalProvider {
    children: JSX.Element;
}

const GlobalContext = createContext({});

const GlobalProvider = ({ children }: IGlobalProvider) => (
    <GlobalContext.Provider value={{}}>
        <SnackbarProvider>
            <UserProvider>
                <ErrorHandler>
                    <Interceptors>{children}</Interceptors>
                </ErrorHandler>
            </UserProvider>
        </SnackbarProvider>
    </GlobalContext.Provider>
);

export default GlobalProvider;
