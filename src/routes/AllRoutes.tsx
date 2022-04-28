import { Routes, Route } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import privateRoutes from "./privateRoutes";
import publicRoutes from "./publicRoutes";
import checkPublicRoutes from "./routesUtils";

const AllRoutes = () => {
    const { user } = useUser();

    return (
        <Routes>
            {publicRoutes.map(
                route =>
                    checkPublicRoutes(route, user.isAuthenticated) && (
                        <Route element={route.element} key={route.path} path={route.path} />
                    )
            )}
            {user.isAuthenticated &&
                privateRoutes.map(route => <Route element={route.element} key={route.path} path={route.path} />)}
        </Routes>
    );
};

export default AllRoutes;
