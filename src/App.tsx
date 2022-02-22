import { HashRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AllRoutes from "./Routing/AllRoutes";
import style from "./App.module.scss";

const App = () => (
    <>
        <HashRouter>
            <Header />
            <div className={style.app}>
                <AllRoutes />
            </div>
        </HashRouter>
        <Footer />
    </>
);

export default App;
