import { useState } from "react";
import http from "../../api/http";
import { useUser } from "../../hooks/useUser";

const Home = () => {
    const { isAuthenticated } = useUser();
    const [users, setUsers] = useState([]);
    const onGetUsers = async () => {
        const res = await http.get("/users");
        setUsers(res.data);
    };

    return (
        <div>
            <div>Home page</div>
            {isAuthenticated && <button onClick={onGetUsers}>get users</button>}
            Users:
            {users.map(user => (
                <div>{JSON.stringify((user as { name: string }).name)}</div>
            ))}
        </div>
    );
};

export default Home;
