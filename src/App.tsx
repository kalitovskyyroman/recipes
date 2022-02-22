import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AllRoutes from "./Routing/AllRoutes";
import style from "./App.module.scss";

const App = () => (
    <>
        <Header />
        <div className={style.app}>
            <AllRoutes />
        </div>
        <Footer />
    </>
);

export default App;
