import { HashRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AllRoutes from "./routes/AllRoutes";
import Interceptors from "./context/Interceptors";

import styles from "./App.module.scss";

const App = () => (
    <Interceptors>
        <HashRouter>
            <Header />
            <div className={styles.content}>
                <AllRoutes />
            </div>
            <Footer />
        </HashRouter>
    </Interceptors>
);

export default App;
