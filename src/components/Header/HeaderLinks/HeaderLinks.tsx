import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import IHeaderLink from "../../../interfaces/IHeaderLink";

interface IHeaderLinks {
    links: IHeaderLink[];
    onClickLink?: () => void;
}

const HeaderLinks = ({ links, onClickLink }: IHeaderLinks) => (
    <>
        {links.map(link => (
            <Typography onClick={onClickLink} className="bold" variant="h3" key={link.link}>
                <Link to={link.link}>{link.title}</Link>
            </Typography>
        ))}
    </>
);

HeaderLinks.defaultProps = {
    onClickLink: () => {},
};

export default HeaderLinks;
