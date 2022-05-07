import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AllRoutes from "./routes/AllRoutes";
import CustomSnackbar from "./components/CustomSnackbar/CustomSnackbar";

import styles from "./App.module.scss";

const App = () => (
    <>
        <CustomSnackbar />
        <Header />
        <div className={styles.content}>
            <AllRoutes />
        </div>
        <Footer />
    </>
);

export default App;
