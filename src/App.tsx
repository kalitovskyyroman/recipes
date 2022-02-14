import { useEffect, useState } from "react";
import MobileHeader from "./components/Header/MobileHeader/MobileHeader";
import DesktopHeader from "./components/Header/DesktopHeader/DesktopHeader";
import Footer from "./components/Footer/Footer";

import sizes from "./styles/mixins/breakpoints.module.scss";
import style from "./App.module.scss";

const App = () => {
    const [isMobile, setIsMobile] = useState(false);

    const onResize = () => setIsMobile(window.innerWidth < Number(sizes.tablet));

    useEffect(() => {
        window.addEventListener("resize", onResize);

        return () => window.removeEventListener("resize", onResize);
    });

    return (
        <>
            {isMobile ? <MobileHeader /> : <DesktopHeader />}
            <div className={style.app}>
                <div className={style.content}>content</div>
                <Footer />
            </div>
        </>
    );
};

export default App;
