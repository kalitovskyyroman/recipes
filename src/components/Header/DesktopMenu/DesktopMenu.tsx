import IHeaderLink from "../../../interfaces/IHeaderLink";
import HeaderLinks from "../HeaderLinks/HeaderLinks";

import styles from "./DesktopMenu.module.scss";

interface IDesktopMenu {
    links: IHeaderLink[];
}

const DesktopMenu = ({ links }: IDesktopMenu) => (
    <div className={styles["desktop-menu"]}>
        <HeaderLinks links={links} />
    </div>
);

export default DesktopMenu;
