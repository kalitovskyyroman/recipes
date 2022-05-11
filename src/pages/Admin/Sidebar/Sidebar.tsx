import classNames from "classnames";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";

import styles from "./Sidebar.module.scss";

export interface ISidebarItem {
    title: string;
    icon: JSX.Element;
}

interface ISidebar {
    items: ISidebarItem[];
}

const Sidebar = ({ items }: ISidebar) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.sidebar}>
            <Paper className={styles["sidebar-list"]} elevation={0}>
                <IconButton
                    className={styles["toggle-button"]}
                    color="inherit"
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    {isOpen ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
                </IconButton>
                <Divider />
                <div>
                    {items.map(item => (
                        <div className={classNames(styles.icon, styles["item-container"])}>{item.icon}</div>
                    ))}
                </div>
            </Paper>
            <Paper
                className={classNames(styles["full-part"], {
                    [styles.open]: isOpen,
                })}
                elevation={3}
                square
            >
                <Divider />
                <div>
                    {items.map(item => (
                        <div className={classNames(styles.title, styles["item-container"])}>
                            <Typography className="bold">{item.title}</Typography>
                        </div>
                    ))}
                </div>
            </Paper>
        </div>
    );
};

export default Sidebar;
