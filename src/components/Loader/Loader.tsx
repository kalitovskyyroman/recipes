import LinearProgress from "@mui/material/LinearProgress";
import { useLoader } from "../../context/useLoader";

const Loader = () => {
    const { isShowLoader } = useLoader();

    return isShowLoader ? <LinearProgress color="success" /> : null;
};

export default Loader;
