import IRoute from "../interfaces/IRoute";

const checkPublicRoutes = (route: IRoute, isAuthenticated: boolean) => (route.isPublicOnly ? !isAuthenticated : true);

const checkPrivateRoute = (route: IRoute, isAuthenticated: boolean, role: string) =>
    isAuthenticated && route.roles?.includes(role);

export { checkPublicRoutes, checkPrivateRoute };
