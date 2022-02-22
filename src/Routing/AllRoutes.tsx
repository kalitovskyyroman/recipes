import { Routes, Route } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import getFullPath from "./utils";

const AllRoutes = () => (
    <Routes>
        {publicRoutes.map(route => (
            <Route path={getFullPath(route.path)} element={route.element} />
        ))}
    </Routes>
);

export default AllRoutes;
