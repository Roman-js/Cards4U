import React from "react";
import {Route} from "react-router";
import Register from "../authorization/Register-page/Register";
import Forgot from "../authorization/Forgot-page/Forgot";
import SetNewPass from "../authorization/SetNewPass-page/SetNewPass";
import styles from "../authorization/Auth.module.css";
import Header from "../authorization/Header/Header";
import {FORGOT, REGISTER, SET_NEW_PASS, SIGN_IN} from "../common/Constants";
import SignInContainer from "../authorization/SignIn-page/SignInContainer";
import ForgotContainer from "../authorization/Forgot-page/ForgotContainer";


const Cards = () => {

    return (
        <>
        <Header/>
        <div className={styles.wrapperOfAuth}>
            <Route path={SIGN_IN} render={() => <SignInContainer/>}/>
            <Route path={REGISTER} render={() => <Register/>}/>
            <Route path={FORGOT} render={() => <ForgotContainer/>}/>
            <Route path={SET_NEW_PASS} render={() => <SetNewPass/>}/>
        </div>
            </>
    )
}

export default Cards

