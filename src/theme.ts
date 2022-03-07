import { createTheme } from "@mui/material";

import colors from "./styles/colors.module.scss";
import fonts from "./styles/fonts.module.scss";

const theme = createTheme({
    typography: {
        fontFamily: fonts.defaultFont,
    },
    palette: {
        primary: { main: colors.defaultBlack },
    },
});

export default theme;
