import PathsEnum from "../enums/PathsEnum";
import IRoute from "../interfaces/IRoute";
import Register from "../pages/Register/Register";

const publicRoutes: IRoute[] = [
    {
        path: PathsEnum.Register,
        element: <Register />,
    },
];

export default publicRoutes;
