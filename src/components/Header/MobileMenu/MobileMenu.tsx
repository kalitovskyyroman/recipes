import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import classNames from "classnames";
import HeaderLinks from "../HeaderLinks/HeaderLinks";
import IHeaderLink from "../../../interfaces/IHeaderLink";
import Buttons from "../Buttons/Buttons";

import styles from "./MobileMenu.module.scss";

interface IMobileMenu {
    onMenuBtn: () => void;
    isOpen: boolean;
    links: IHeaderLink[];
}

const MobileMenu = ({ onMenuBtn, isOpen, links }: IMobileMenu) => (
    <div className={classNames(styles["mobile-menu"], { [styles.open]: isOpen })}>
        <IconButton className={styles["menu-button"]} color="inherit" onClick={onMenuBtn} size="large">
            <CloseIcon fontSize="large" />
        </IconButton>
        <div className={styles.links}>
            <HeaderLinks links={links}  onClickLink={onMenuBtn} />
            <Buttons onClick={onMenuBtn} />
        </div>
    </div>
);

export default MobileMenu;
