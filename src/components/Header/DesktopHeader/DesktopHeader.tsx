import { Typography } from "@mui/material";

import styles from "./DesktopHeader.module.scss";

const DesktopHeader = () => (
    <header className={styles.header}>
        <Typography className={styles.title} variant="h1">
            Recipes
        </Typography>
    </header>
);

export default DesktopHeader;
