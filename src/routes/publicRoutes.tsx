import PathsEnum from "../enums/PathsEnum";
import IRoute from "../interfaces/IRoute";
import NotFound from "../pages/404/404.page";
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
        isPublicOnly: true,
    },
    {
        path: PathsEnum.Register,
        element: <Register />,
        isPublicOnly: true,
    },
    {
        path: PathsEnum.NotFound,
        element: <NotFound />,
    },
];

export default publicRoutes;
