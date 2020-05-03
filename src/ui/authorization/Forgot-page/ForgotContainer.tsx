import React from "react";
import Forgot from "./Forgot";
import {useDispatch} from "react-redux";
import {authApi} from "../../../dal/api";


const ForgotContainer = () => {

    const dispatch = useDispatch();

    const html1 = "<a href='http://localhost:3000/template-typescript#/set-new-pass'";
    const html2 = ">reset-password-link</a>";

    const setForgotPassword = (email: string) => {
        authApi.forgotPass(email,
            html1, html2)
        dispatch({type: 'RESTORE-FORGOT-PASSWORD', email})
    };

    return (
        <Forgot setForgotPassword = {setForgotPassword}/>
    )
}

export default ForgotContainer