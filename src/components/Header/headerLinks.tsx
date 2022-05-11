import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PathsEnum from "../../enums/PathsEnum";
import RoleEnum from "../../enums/RoleEnum";
import IHeaderLink from "../../interfaces/IHeaderLink";

const links: IHeaderLink[] = [
    {
        link: PathsEnum.Admin,
        component: <AdminPanelSettingsIcon fontSize="large" />,
        roles: [RoleEnum.Admin, RoleEnum.Moderator]
    }
];

export default links;
