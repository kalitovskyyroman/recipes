import { Link } from "react-router-dom";
import { Avatar, Button, Paper, TextField, Typography } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PathsEnum from "../../../enums/PathsEnum";

import styles from "./LoginForm.module.scss";

const LoginForm = () => (
    <Paper className={styles.container} elevation={3}>
        <div className={styles.avatar}>
            <Avatar>
                <ExitToAppIcon />
            </Avatar>
        </div>
        <Typography className={styles.title} variant="h2">
            Login
        </Typography>
        <TextField label="Email" variant="outlined" margin="normal" required fullWidth />
        <TextField label="Password" type="password" variant="outlined" margin="normal" required fullWidth />
        <Button className={styles["login-btn"]} variant="contained" fullWidth>
            Login
        </Button>
        <Typography className={styles["register-text"]} variant="body1">
            Don&apos;t have an account? <Link to={PathsEnum.Register}>Register</Link>
        </Typography>
    </Paper>
);

export default LoginForm;
