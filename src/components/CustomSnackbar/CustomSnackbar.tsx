/* eslint-disable react/jsx-props-no-spreading */
import Alert from "@mui/material/Alert";
import Slide, { SlideProps } from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
import { useSnackbar } from "../../context/useSnackbar";

type TransitionProps = Omit<SlideProps, "direction">;

const Transition = (props: TransitionProps) => <Slide {...props} direction="down" />;

const CustomSnackbar = () => {
    const { snackbarData, handleClose } = useSnackbar();

    return (
        <Snackbar
            TransitionComponent={Transition}
            anchorOrigin={{
                vertical: "top",
                horizontal: "center",
            }}
            autoHideDuration={3000}
            onClose={handleClose}
            open={snackbarData.isOpen}
        >
            <Alert severity={snackbarData.type} sx={{ width: "100%" }}>
                {snackbarData.message}
            </Alert>
        </Snackbar>
    );
};

export default CustomSnackbar;
