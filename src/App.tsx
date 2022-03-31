import { HashRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AllRoutes from "./routes/AllRoutes";

import styles from "./App.module.scss";

const App = () => (
    <HashRouter>
        <Header />
        <div className={styles.content}>
            <AllRoutes />
        </div>
        <Footer />
    </HashRouter>
);

export default App;
