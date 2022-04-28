/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext } from "react";
import { UserProvider } from "../hooks/useUser";

interface IGlobalProvider {
    children?: JSX.Element | JSX.Element[];
}

const GlobalContext = createContext({});

const GlobalProvider = ({ children }: IGlobalProvider) => (
    <GlobalContext.Provider value={{}}>
        <UserProvider>{children}</UserProvider>
    </GlobalContext.Provider>
);

export default GlobalProvider;
