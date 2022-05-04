import PathsEnum from "../enums/PathsEnum";
import RoleEnum from "../enums/RoleEnum";
import IRoute from "../interfaces/IRoute";
import Admin from "../pages/Admin/Admin.page";

const privateRoutes: IRoute[] = [
    {
        path: PathsEnum.Admin,
        element: <Admin />,
        roles: [RoleEnum.Admin, RoleEnum.Moderator],
    },
];

export default privateRoutes;
