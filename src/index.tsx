import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import "./styles/reset.scss";
import App from "./App";
import theme from "./theme";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);
