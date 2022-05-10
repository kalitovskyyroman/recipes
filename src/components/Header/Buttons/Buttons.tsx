import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useLocation } from "react-router-dom";
import PathsEnum from "../../../enums/PathsEnum";
import useAuthentication from "../../../hooks/useAuthentication";
import { useUser } from "../../../hooks/useUser";

import styles from "./Buttons.module.scss";

interface IButtons {
    onClick?: () => void;
}

const Buttons = ({ onClick }: IButtons) => {
    const { isAuthenticated } = useUser();
    const { pathname } = useLocation();
    const { onLogout } = useAuthentication();

    const isVisibleLogin = !isAuthenticated && pathname !== PathsEnum.Login;

    const handleLogout = () => {
        if (onClick) {
            onClick();
        }
        onLogout();
    };

    return (
        <div className={styles["header-buttons"]}>
            {isVisibleLogin && (
                <Link onClick={onClick} to={PathsEnum.Login}>
                    <LoginIcon fontSize="large" />
                </Link>
            )}
            {isAuthenticated && (
                <Link onClick={handleLogout} to={PathsEnum.Home}>
                    <LogoutIcon fontSize="large" />
                </Link>
            )}
        </div>
    );
};

export default Buttons;
