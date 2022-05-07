/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from "react";
import IChildren from "../interfaces/IChildren";

type snackbarType = "success" | "error" | "warning" | "info";

interface ISnackBarData {
    isOpen: boolean;
    message: string;
    type: snackbarType;
}

interface ISnackbarContext {
    snackbarData: ISnackBarData;
    showMessage: (message: string, type?: snackbarType) => void;
    handleClose: () => void;
}

const defaultSnackbarData: ISnackBarData = {
    isOpen: false,
    message: "",
    type: "info",
};

const SnackbarContext = createContext({} as ISnackbarContext);

const SnackbarProvider = ({ children }: IChildren) => {
    const [snackbarData, setSnackbarData] = useState<ISnackBarData>(defaultSnackbarData);

    const showMessage = (message: string, type: snackbarType = "info") =>
        setSnackbarData(prev => ({ ...prev, isOpen: true, message, type }));

    const handleClose = () => {
        setSnackbarData(prev => ({ ...defaultSnackbarData, type: prev.type, message: prev.message }));
    };

    return (
        <SnackbarContext.Provider value={{ snackbarData, showMessage, handleClose }}>
            {children}
        </SnackbarContext.Provider>
    );
};

const useSnackbar = () => useContext<ISnackbarContext>(SnackbarContext);

export { SnackbarProvider, useSnackbar };
