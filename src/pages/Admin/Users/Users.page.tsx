/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { getUsers } from "../../../services/user.service";
import IUserDto from "../../../interfaces/IUserDto";
import PageLayout from "../../PageLayout/PageLayout";
import UsersList from "./UsersList/UsersList";

import styles from './Users.page.module.scss'

const Users = () => {
    const [users, setUsers] = useState<IUserDto[]>([]);

    useEffect(() => {
        (async () => {
            const res = await getUsers();

            setUsers(res.data);
        })();
    }, []);

    return (
        <PageLayout>
            <>
                <Typography className={styles.title} variant="h2">Users</Typography>
                <UsersList users={users} />
            </>
        </PageLayout>
    );
};

export default Users;
