import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import links from "./headerLinks";
import MobileMenu from "./MobileMenu/MobileMenu";
import DesktopMenu from "./DesktopMenu/DesktopMenu";

import styles from "./Header.module.scss";
import PathsEnum from "../../enums/PathsEnum";

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
                    <Link to={PathsEnum.Home}>Recipes</Link>
                </Typography>
                <DesktopMenu links={links} />
                <IconButton className={styles["menu-button"]} color="inherit" onClick={onMenuBtn} size="large">
                    <MenuIcon fontSize="large" />
                </IconButton>
            </div>
            <MobileMenu isOpen={isOpen} links={links} onMenuBtn={onMenuBtn} />
        </header>
    );
};

export default Header;
