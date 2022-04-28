import { useNavigate } from "react-router-dom";
import PathsEnum from "../enums/PathsEnum";
import ResponseStatusesEnum from "../enums/ResponseStatusesEnum";
import { login, logout } from "../services/auth.service";
import { useUser } from "./useUser";

const useAuthentication = () => {
    const { setUser, removeUser } = useUser();
    const navigate = useNavigate();

    const onLogin = async (email: string, password: string) => {
        const res = await login(email, password);

        if (res.status === ResponseStatusesEnum.SUCCESS) {
            setUser({ isAuthenticated: true, data: res.data.user, tokens: res.data.tokens });
            navigate(PathsEnum.Home);
        }
    };

    const onRegister = () => {};

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
