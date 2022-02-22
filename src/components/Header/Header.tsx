import { Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import links from "./headerLinks";
import HeaderLinks from "./HeaderLinks/HeaderLinks";
import MobileMenu from "./MobileMenu/MobileMenu";

import styles from "./Header.module.scss";

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    const onMenuBtn = () => {
        setOpen(prev => !prev);

        if (!isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    };

    return (
        <header className={styles["header-container"]}>
            <div className={styles.header}>
                <Typography className="bold" variant="h1">
                    Recipes
                </Typography>
                <div className={styles["desktop-menu"]}>
                    <HeaderLinks links={links} />
                </div>
                <IconButton onClick={onMenuBtn} className={styles["menu-button"]} size="large" color="inherit">
                    <MenuIcon fontSize="large" />
                </IconButton>
            </div>
            <MobileMenu isOpen={isOpen} links={links} onMenuBtn={onMenuBtn} />
        </header>
    );
};

export default Header;
