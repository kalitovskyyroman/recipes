import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import classNames from "classnames";
import HeaderLinks from "../HeaderLinks/HeaderLinks";
import IHeaderLink from "../../../interfaces/IHeaderLink";

import styles from "./MobileMenu.module.scss";

interface IMobileMenu {
    onMenuBtn: any;
    isOpen: boolean;
    links: IHeaderLink[];
}

const MobileMenu = ({ onMenuBtn, isOpen, links }: IMobileMenu) => (
    <div className={classNames(styles["mobile-menu"], { [styles.open]: isOpen })}>
        <IconButton onClick={onMenuBtn} className={styles["menu-button"]} size="large" color="inherit">
            <CloseIcon fontSize="large" />
        </IconButton>
        <div className={styles.links}>
            <HeaderLinks links={links} />
        </div>
    </div>
);

export default MobileMenu;
