import IRoute from "../interfaces/IRoute";

const checkPublicRoutes = (route: IRoute, isAuthenticated: boolean) => {
    if (route.isPublicOnly) {
        return !isAuthenticated;
    }
    return true;
};

export default checkPublicRoutes;
