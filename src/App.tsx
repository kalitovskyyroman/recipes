import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CustomSnackbar from "./components/CustomSnackbar/CustomSnackbar";
import PageContent from "./Page.content";

const App = () => (
    <>
        <CustomSnackbar />
        <Header />
        <PageContent />
        <Footer />
    </>
);

export default App;
