import { HashRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AllRoutes from "./Routing/AllRoutes";
import style from "./App.module.scss";

const App = () => (
    <>
        <Header />
        <div className={style.app}>
            <HashRouter basename="https://kalitovskyyroman.github.io/recipes/">
                <AllRoutes />
            </HashRouter>
        </div>
        <Footer />
    </>
);

export default App;
