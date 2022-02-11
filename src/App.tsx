import Footer from "./components/Footer/Footer";
import logo from "./logo.svg";
import style from "./App.module.scss";

const App = () => (
    <div className={style.app}>
        <header className={style["app-header"]}>
            <img src={logo} className={style["app-logo"]} alt="logo" />
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a className={style["app-link"]} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
            </a>
        </header>
        <Footer />
    </div>
);

export default App;
