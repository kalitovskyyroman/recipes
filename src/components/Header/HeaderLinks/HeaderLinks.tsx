import { Typography } from "@mui/material";
import IHeaderLink from "../../../interfaces/IHeaderLink";

interface IHeaderLinks {
    links: IHeaderLink[];
}

const HeaderLinks = ({ links }: IHeaderLinks) => (
    <>
        {links.map(link => (
            <Typography className="bold" variant="h3" key={link.link}>
                {link.title}
            </Typography>
        ))}
    </>
);

export default HeaderLinks;
