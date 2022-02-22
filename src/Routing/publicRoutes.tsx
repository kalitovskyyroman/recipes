import PathsEnum from "../enums/PathsEnum";
import IRoute from "../interfaces/IRoute";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const publicRoutes: IRoute[] = [
    {
        path: PathsEnum.Home,
        element: <Home />,
    },
    {
        path: PathsEnum.Login,
        element: <Login />,
    },
    {
        path: PathsEnum.Register,
        element: <Register />,
    },
];

export default publicRoutes;
