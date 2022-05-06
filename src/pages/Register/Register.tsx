import RegisterForm, { IRegisterValues } from "./RegisterForm/RegisterForm";
import PageLayout from "../PageLayout/PageLayout";
import useAuthentication from "../../hooks/useAuthentication";

import styles from "./Register.module.scss";

const Register = () => {
    const { onRegister } = useAuthentication();

    const onSubmit = async (values: IRegisterValues) => {
        await onRegister(values.name, values.email, values.password);
    };

    return (
        <PageLayout>
            <div className={styles["register-page"]}>
                <RegisterForm onSubmit={onSubmit} />
            </div>
        </PageLayout>
    );
};

export default Register;
