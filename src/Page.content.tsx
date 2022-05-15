import { useLocation } from "react-router-dom";
import AllRoutes from "./routes/AllRoutes";
import { useUser } from "./hooks/useUser";
import sidebarItems from "./pages/Admin/Structures/sidebarItems";
import Sidebar from "./pages/Admin/Sidebar/Sidebar";
import RoleEnum from "./enums/RoleEnum";
import { checkIsAdminPage } from "./routes/routesUtils";

import styles from "./App.module.scss";

const PageContent = () => {
    const { isAuthenticated, user } = useUser();
    const location = useLocation();

    const role = user.data.role.name;
    const isUserAdminOrModerator = role === RoleEnum.Admin || role === RoleEnum.Moderator;
    const isShowAdminSidebar = isAuthenticated && isUserAdminOrModerator && checkIsAdminPage(location.pathname);

    return (
        <div className={styles.content}>
            {isShowAdminSidebar && <Sidebar items={sidebarItems} />}
            <AllRoutes />
        </div>
    );
};

export default PageContent;
