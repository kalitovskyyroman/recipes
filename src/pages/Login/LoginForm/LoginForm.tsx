/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import PathsEnum from "../../../enums/PathsEnum";
import CustomAvatar from "../../../components/CustomAvatar/CustomAvatar";
import FieldEnum from "../../../enums/FieldEnum";
import validationSchema from "../../../components/Forms/Validations/loginForm.validateSchema";

import styles from "./LoginForm.module.scss";

export interface ILoginValues {
    email: string;
    password: string;
}
export interface ILoginForm {
    onSubmit: (values: ILoginValues) => void;
}

const initialValues: ILoginValues = {
    [FieldEnum.Email]: "",
    [FieldEnum.Password]: "",
};

const LoginForm = ({ onSubmit }: ILoginForm) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <Paper className={styles.container} elevation={3}>
            <CustomAvatar icon={<LockOpenIcon />} />
            <Typography className={styles.title} variant="h2">
                Login
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    error={!!formik.errors[FieldEnum.Email] && formik.touched[FieldEnum.Email]}
                    helperText={formik.touched[FieldEnum.Email] && formik.errors[FieldEnum.Email]}
                    label="Email"
                    margin="dense"
                    name={FieldEnum.Email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values[FieldEnum.Email]}
                    variant="outlined"
                    fullWidth
                    required
                />
                <TextField
                    error={!!formik.errors[FieldEnum.Password] && formik.touched[FieldEnum.Password]}
                    helperText={formik.touched[FieldEnum.Password] && formik.errors[FieldEnum.Password]}
                    label="Password"
                    margin="dense"
                    name={FieldEnum.Password}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values[FieldEnum.Password]}
                    variant="outlined"
                    fullWidth
                    required
                />
                <Button
                    className={styles["login-btn"]}
                    disabled={!(formik.isValid && formik.dirty)}
                    type="submit"
                    variant="contained"
                    fullWidth
                >
                    Login
                </Button>
            </form>
            <Typography className={styles["register-text"]} variant="body1">
                Don&apos;t have an account? <Link to={PathsEnum.Register}>Register</Link>
            </Typography>
        </Paper>
    );
};

export default LoginForm;
