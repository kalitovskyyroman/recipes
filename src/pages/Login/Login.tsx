import LoginForm, { ILoginValues } from "./LoginForm/LoginForm";
import PageLayout from "../PageLayout/PageLayout";
import useAuthentication from "../../hooks/useAuthentication";

import styles from "./Login.module.scss";

const Login = () => {
    const { onLogin } = useAuthentication();

    const onSubmit = async (values: ILoginValues) => {
        await onLogin(values.email, values.password);
    };

    return (
        <PageLayout>
            <div className={styles["login-page"]}>
                <LoginForm onSubmit={onSubmit} />
            </div>
        </PageLayout>
    );
};

export default Login;
