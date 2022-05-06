import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import "./styles/reset.scss";
import App from "./App";
import theme from "./theme";
import GlobalProvider from "./providers/GlobalProvider";

ReactDOM.render(
    <HashRouter>
        <GlobalProvider>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </GlobalProvider>
    </HashRouter>,
    document.getElementById("root")
);
