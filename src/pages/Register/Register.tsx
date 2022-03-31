import RegisterForm from "./RegisterForm/RegisterForm";

import styles from "./Register.module.scss";

const Register = () => (
    <div className={styles["register-page"]}>
        <RegisterForm />
    </div>
);

export default Register;
