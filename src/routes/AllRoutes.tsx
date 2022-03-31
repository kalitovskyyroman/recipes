import { Routes, Route } from "react-router-dom";
import publicRoutes from "./publicRoutes";

const AllRoutes = () => (
    <Routes>
        {publicRoutes.map(route => (
            <Route element={route.element} key={route.path} path={route.path} />
        ))}
    </Routes>
);

export default AllRoutes;
