import PathsEnum from "../enums/PathsEnum";
import RoleEnum from "../enums/RoleEnum";
import IRoute from "../interfaces/IRoute";
import UsersList from "../pages/Admin/Users/Users.page";

const privateRoutes: IRoute[] = [
    {
        path: PathsEnum.Admin,
        element: <UsersList />,
        roles: [RoleEnum.Admin, RoleEnum.Moderator],
    },
];

export default privateRoutes;
