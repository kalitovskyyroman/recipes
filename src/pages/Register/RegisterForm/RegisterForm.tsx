import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

import styles from "./RegisterForm.module.scss";

const RegisterForm = () => (
    <div>
        <input type="text" />
        <Typography className={styles.title} variant="h2">
            Sign Up
        </Typography>
        <TextField label="First Name" variant="standard" margin="dense" required fullWidth />
        <Grid container spacing={2} columns={6}>
            <Grid item xs={3}>
                <TextField label="First Name" variant="standard" margin="dense" required fullWidth />
            </Grid>
            <Grid item xs={3}>
                <TextField label="Last Name" variant="standard" margin="dense" fullWidth />
            </Grid>
            <Grid item xs={6}>
                <TextField label="Email Address" variant="standard" margin="dense" required fullWidth />
            </Grid>
            <Grid item xs={6}>
                <TextField label="Password" type="password" variant="standard" margin="dense" required fullWidth />
            </Grid>
        </Grid>
    </div>
);

export default RegisterForm;
