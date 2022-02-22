import Paper from "@mui/material/Paper";

import styles from "./Register.module.scss";
import RegisterForm from "./RegisterForm/RegisterForm";

const Register = () => (
    <div className={styles.register}>
        <Paper className={styles["form-container"]} elevation={3}>
            <RegisterForm />
        </Paper>
    </div>
);

export default Register;
