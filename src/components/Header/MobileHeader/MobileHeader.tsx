/* eslint-disable no-unused-vars */
import { useState } from "react";
import Hamburger from "hamburger-react";
import { Typography } from "@mui/material";

import styles from "./MobileHeader.module.scss";

const MobileHeader = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles["header-row"]}>
                <Hamburger toggled={isOpen} toggle={setOpen} />
                <Typography className={styles.title} variant="h1">
                    Recipes
                </Typography>
            </div>
            {isOpen && (
                <div className={styles["menu-container"]}>
                    <div className={styles.menu}>element 1</div>
                </div>
            )}
        </header>
    );
};

export default MobileHeader;
