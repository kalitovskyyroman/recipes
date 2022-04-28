import IRole from "./IRole";

interface IRoute {
    path: string;
    element: JSX.Element;
    isPublicOnly?: boolean;
    roles?: IRole[];
}

export default IRoute;
