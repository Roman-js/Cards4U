import React from "react";
import {Route} from "react-router";
import SetNewPassContainer from "../authorization/SetNewPass-page/SetNewPassContainer";
import styles from "../authorization/Auth.module.css";
import Header from "../authorization/Header/Header";
import {FORGOT, REGISTER, SET_NEW_PASS, SIGN_IN} from "../common/Constants";
import SignInContainer from "../authorization/SignIn-page/SignInContainer";
import ForgotContainer from "../authorization/Forgot-page/ForgotContainer";
import RegisterContainer from "../authorization/Register-page/RegisterContainer";
import HeaderContainer from "../authorization/Header/HeaderContainer";


const Cards = () => {

    return (
        <>
        <HeaderContainer/>
        <div className={styles.wrapperOfAuth}>
            <Route path={SIGN_IN} render={() => <SignInContainer/>}/>
            <Route path={REGISTER} render={() => <RegisterContainer/>}/>
            <Route path={FORGOT} render={() => <ForgotContainer/>}/>
            <Route path={SET_NEW_PASS} render={() => <SetNewPassContainer />}/>
        </div>
            </>
    )
}

export default Cards

