import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useUser } from "../../../hooks/useUser";
import IHeaderLink from "../../../interfaces/IHeaderLink";
import { getAccessByRole } from "./headerLinks.utils";

interface IHeaderLinks {
    links: IHeaderLink[];
    onClickLink?: () => void;
}

const HeaderLinks = ({ links, onClickLink }: IHeaderLinks) => {
    const { user } = useUser();
    console.log(user);

    return (
        <>
            {links.map(
                link =>
                    getAccessByRole(user.data.role.name, link) && (
                        <Link onClick={onClickLink} to={link.link}>
                            {link.title ? (
                                <Typography className="bold" key={link.link} variant="h3">
                                    {link.title}
                                </Typography>
                            ) : (
                                link.component
                            )}
                        </Link>
                    )
            )}
        </>
    );
};

HeaderLinks.defaultProps = {
    onClickLink: () => {},
};

export default HeaderLinks;
