import React from "react";
import {Route} from "react-router";
import SetNewPass from "../authorization/SetNewPass-page/SetNewPass";
import styles from "../authorization/Auth.module.css";
import Header from "../authorization/Header/Header";
import {FORGOT, REGISTER, SET_NEW_PASS, SIGN_IN} from "../common/Constants";
import SignInContainer from "../authorization/SignIn-page/SignInContainer";
import ForgotContainer from "../authorization/Forgot-page/ForgotContainer";
import RegisterContainer from "../authorization/Register-page/RegisterContainer";


const Cards = () => {

    return (
        <>
        <Header/>
        <div className={styles.wrapperOfAuth}>
            <Route path={SIGN_IN} render={() => <SignInContainer/>}/>
            <Route path={REGISTER} render={() => <RegisterContainer/>}/>
            <Route path={FORGOT} render={() => <ForgotContainer/>}/>
            <Route path={SET_NEW_PASS} render={() => <SetNewPass/>}/>
        </div>
            </>
    )
}

export default Cards

