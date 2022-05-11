import PeopleIcon from "@mui/icons-material/People";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { ISidebarItem } from "../Sidebar/Sidebar";

const items: ISidebarItem[] = [
    {
        title: "Users",
        icon: <PeopleIcon />,
    },
    {
        title: "Recipes",
        icon: <ListAltIcon />,
    },
];

export default items;
