import PathsEnum from "../enums/PathsEnum";
import IRoute from "../interfaces/IRoute";
import SecretPage from "../pages/SecretPage/SecretPage";

const privateRoutes: IRoute[] = [
    {
        path: PathsEnum.Secret,
        element: <SecretPage />,
    },
];

export default privateRoutes;
