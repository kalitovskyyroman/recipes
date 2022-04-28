/* eslint-disable @typescript-eslint/no-unused-vars */
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useFormik } from "formik";
import FieldEnum from "../../../enums/FieldEnum";
import CustomAvatar from "../../../components/CustomAvatar/CustomAvatar";
import validationSchema from "../../../components/Forms/Validations/registerForm.validateSchema";
import { registerUser } from "../../../services/auth.service";
import { useUser } from "../../../hooks/useUser";
import ResponseStatusesEnum from "../../../enums/ResponseStatusesEnum";

import styles from "./RegisterForm.module.scss";
import PathsEnum from "../../../enums/PathsEnum";

const initialValues = {
    [FieldEnum.Name]: "",
    [FieldEnum.Email]: "",
    [FieldEnum.Password]: "",
};

const RegisterForm = () => {
    const { setUser } = useUser();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async () => {
            const res = await registerUser(formik.values);

            console.log(res);

            // if (res.status === ResponseStatusesEnum.SUCCESS) {
            //     setUser({ isAuthenticated: true, data: res.data });
            //     navigate(PathsEnum.Home);
            // }
        },
    });

    return (
        <Paper className={styles["form-container"]} elevation={3}>
            <form className={styles.container} onSubmit={formik.handleSubmit}>
                <CustomAvatar icon={<ExitToAppIcon />} />
                <Typography className={styles.title} variant="h2">
                    Sign Up
                </Typography>
                <Grid columns={6} spacing={2} container>
                    <Grid xs={6} item>
                        <TextField
                            error={!!formik.errors[FieldEnum.Name] && formik.touched[FieldEnum.Name]}
                            helperText={formik.touched[FieldEnum.Name] && formik.errors[FieldEnum.Name]}
                            label="Name"
                            margin="dense"
                            name={FieldEnum.Name}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values[FieldEnum.Name]}
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </Grid>

                    <Grid xs={6} item>
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
                    </Grid>
                    <Grid xs={6} item>
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
                    </Grid>
                </Grid>
                <Button
                    className={styles["register-btn"]}
                    disabled={!(formik.isValid && formik.dirty)}
                    type="submit"
                    variant="contained"
                    fullWidth
                >
                    Register
                </Button>
            </form>
        </Paper>
    );
};

export default RegisterForm;
