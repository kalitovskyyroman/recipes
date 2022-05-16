/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from "react";
import IChildren from "../interfaces/IChildren";

interface ILoaderContext {
    isShowLoader: boolean;
    addRequest: () => void;
    removeRequest: () => void;
}

const LoaderContext = createContext({} as ILoaderContext);

const LoaderProvider = ({ children }: IChildren) => {
    const [counter, setCounter] = useState(0);

    const addRequest = () => setCounter(prev => prev + 1);

    const removeRequest = () => setCounter(prev => prev - 1);



    return <LoaderContext.Provider value={{ addRequest, removeRequest, isShowLoader: !(counter === 0) }}>{children}</LoaderContext.Provider>;
};

const useLoader = () => useContext<ILoaderContext>(LoaderContext);

export { LoaderProvider, useLoader };
