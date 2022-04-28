import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useUser } from "../../../hooks/useUser";
import IHeaderLink from "../../../interfaces/IHeaderLink";

interface IHeaderLinks {
    links: IHeaderLink[];
    onClickLink?: () => void;
}

const HeaderLinks = ({ links, onClickLink }: IHeaderLinks) => {
    const { user } = useUser();
    console.log(user);

    return (
        <>
            {links.map(link => (
                <Typography className="bold" key={link.link} onClick={onClickLink} variant="h3">
                    <Link to={link.link}>{link.title}</Link>
                </Typography>
            ))}
        </>
    );
};

HeaderLinks.defaultProps = {
    onClickLink: () => {},
};

export default HeaderLinks;
