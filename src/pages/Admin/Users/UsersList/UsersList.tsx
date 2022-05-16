import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import IUserDto from "../../../../interfaces/IUserDto";

import styles from "./UsersList.module.scss";

const UsersList = ({ users }: { users: IUserDto[] }) => (
    <div className={styles.list}>
        {users.map(user => (
            <Card className={styles.card} key={user.email}>
                <Typography variant="h4">Name: {user.name}</Typography>
                <Typography>Email: {user.email}</Typography>
                <Typography>Role: {user.role.name}</Typography>
                <Divider />
                <Typography>Created at: {user.createdAt}</Typography>
                <Typography>Updated at: {user.updatedAt}</Typography>
            </Card>
        ))}
    </div>
);

export default UsersList;
