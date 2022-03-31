import { Link } from "react-router-dom";
import { Button, Paper, TextField, Typography } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import PathsEnum from "../../../enums/PathsEnum";
import CustomAvatar from "../../../components/CustomAvatar/CustomAvatar";

import styles from "./LoginForm.module.scss";

const LoginForm = () => (
    <Paper className={styles.container} elevation={3}>
        <CustomAvatar icon={<LockOpenIcon />} />
        <Typography className={styles.title} variant="h2">
            Login
        </Typography>
        <TextField label="Email" margin="normal" variant="outlined" fullWidth required />
        <TextField label="Password" margin="normal" type="password" variant="outlined" fullWidth required />
        <Button className={styles["login-btn"]} variant="contained" fullWidth>
            Login
        </Button>
        <Typography className={styles["register-text"]} variant="body1">
            Don&apos;t have an account? <Link to={PathsEnum.Register}>Register</Link>
        </Typography>
    </Paper>
);

export default LoginForm;
