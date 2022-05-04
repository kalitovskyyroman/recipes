interface IRoute {
    path?: string;
    element: JSX.Element;
    isPublicOnly?: boolean;
    roles?: string[];
}

export default IRoute;
