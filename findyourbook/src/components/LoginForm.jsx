import { useState } from "react";
import {Formik} from "formik";
import Dropzone from "react-dropzone";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

// const loginSchema = yup.object().shape({
//     email:yup.string().email("invalid email").required("required"),
//     password: yup.string().required("required"),
// })
// const initialValuesLogin = {
//     email : "",
//     password : "",
// }

const LoginForm = () => {

    // const dispatch = useDispatch();
    // const navigate = useNavigate();


    return(
        <div
        className="p-5 w-full flex flex-col items-center"
        >
            <h1
            className="text-3xl font-semibold text-blue-900"
            >Welcome To Find Your Book!</h1>
            <h1
            className="text-3xl font-semibold text-slate-800 mt-4"
            >Login</h1>

        </div>
    )
}

export default LoginForm