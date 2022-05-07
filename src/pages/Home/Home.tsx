import { Button } from "@mui/material";
import { useState } from "react";
import http from "../../api/http";
import { useSnackbar } from "../../context/useSnackbar";
import { useUser } from "../../hooks/useUser";

const Home = () => {
    const { isAuthenticated } = useUser();
    const { showMessage } = useSnackbar();
    const [users, setUsers] = useState([]);
    const onGetUsers = async () => {
        const res = await http.get("/users");
        setUsers(res.data);
    };

    return (
        <div>
            <div>Home page</div>
            <Button onClick={() => showMessage("test info")}>Show</Button>
            <Button onClick={() => showMessage("test error", "error")}>Show error</Button>
            {isAuthenticated && <button onClick={onGetUsers}>get users</button>}
            Users:
            {users.map(user => (
                <div>{JSON.stringify((user as { name: string }).name)}</div>
            ))}
        </div>
    );
};

export default Home;
