import { createTheme } from "@mui/material";

import fonts from "./styles/fonts.module.scss";

const theme = createTheme({
    typography: {
        fontFamily: fonts.defaultFont,
    },
});

export default theme;
