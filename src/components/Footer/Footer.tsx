import { Typography } from "@mui/material";
import { socials, basicLinks } from "./DetailItems";

import styles from "./Footer.module.scss";

const Footer = () => (
    <div className={styles.footer}>
        <div className={styles["first-row"]}>
            <Typography className={styles.title} variant="h3">
                Recipes
            </Typography>
            <div className={styles.socials}>
                {socials.map(social => (
                    <a href={social.url} key={social.url} rel="noreferrer" target="_blank">
                        {social.logo}
                    </a>
                ))}
            </div>
        </div>
        <div className={styles.pages}>
            {basicLinks.map(page => (
                <a href="_#" key={page.title}>
                    <Typography className={styles["page-link-title"]} variant="body1">
                        {page.title}
                    </Typography>
                </a>
            ))}
        </div>
    </div>
);

export default Footer;
