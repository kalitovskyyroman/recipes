import { useNavigate } from "react-router-dom";
import { useSnackbar } from "../context/useSnackbar";
import PathsEnum from "../enums/PathsEnum";
import ResponseStatusesEnum from "../enums/ResponseStatusesEnum";
import { login, logout, register } from "../services/auth.service";
import IErrorResponse from "../services/interfaces/responses/IErrorResponse";
import { useUser } from "./useUser";

const useAuthentication = () => {
    const { setUser, removeUser } = useUser();
    const { showMessage } = useSnackbar()
    const navigate = useNavigate();

    const onLogin = async (email: string, password: string) => {
        try {
            const res = await login(email, password);

        if (res.status === ResponseStatusesEnum.SUCCESS) {
            setUser({ isAuthenticated: true, data: res.data.user, tokens: res.data.tokens });
            navigate(PathsEnum.Home);
        }
        } catch (error) {
            showMessage((error as IErrorResponse).message, "error")
        }
        
    };

    const onRegister = async (email: string, name: string, password: string) => {
        try {
            const res = await register(email, name, password);

            if (res.status === ResponseStatusesEnum.SUCCESS) {
                setUser({ isAuthenticated: true, data: res.data.user, tokens: res.data.tokens });
                navigate(PathsEnum.Home);
            }
        } catch (error) {
            showMessage((error as IErrorResponse).message, "error")
        }
    };

    const onLogout = async () => {
        const result = await logout();

        if (result.status === ResponseStatusesEnum.SUCCESS) {
            removeUser();
            navigate(PathsEnum.Home);
        }
    };

    return { onLogin, onRegister, onLogout };
};

export default useAuthentication;
