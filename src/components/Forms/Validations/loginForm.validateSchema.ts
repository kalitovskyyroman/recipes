import * as Yup from "yup";
import FieldEnum from "../../../enums/FieldEnum";

const validationSchema = Yup.object().shape({
    [FieldEnum.Email]: Yup.string().email().required("Email is required"),
    [FieldEnum.Password]: Yup.string()
        .trim()
        .min(5, "Password must be at least 5 characters")
        .required("Password is required"),
});

export default validationSchema;
