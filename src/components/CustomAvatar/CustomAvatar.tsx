import { Avatar } from "@mui/material";

import styles from "./CustomAvatar.module.scss";

interface ICustomAvatar {
    icon: JSX.Element;
}

const CustomAvatar = ({ icon }: ICustomAvatar) => (
    <div className={styles.avatar}>{icon && <Avatar>{icon}</Avatar>}</div>
);

export default CustomAvatar;
