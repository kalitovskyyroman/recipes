import Sidebar from "./Sidebar/Sidebar";
import sidebarItems from "./Structures/sidebarItems";

import styles from "./Admin.module.scss";

const Admin = () => (
    <div className={styles["admin-page"]}>
        <Sidebar items={sidebarItems} />
        Admin page
    </div>
);

export default Admin;
