import LoginForm from "./LoginForm/LoginForm";
import PageLayout from "../PageLayout/PageLayout";

import styles from "./Login.module.scss";

const Login = () => (
    <PageLayout>
        <div className={styles["login-page"]}>
            <LoginForm />
        </div>
    </PageLayout>
);

export default Login;
