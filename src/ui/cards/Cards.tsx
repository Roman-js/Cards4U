import React from "react";
import {Route} from "react-router";
import SignIn from "../authorization/SignIn";
import Register from "../authorization/Register";
import Forgot from "../authorization/Forgot";
import SetNewPass from "../authorization/SetNewPass";
import styles from "../authorization/Auth.module.css";
import Header from "../authorization/Header/Header";
import {FORGOT, REGISTER, SET_NEW_PASS, SIGN_IN} from "../common/Constants";


const Cards = () => {

    return (
        <>
        <Header/>
        <div className={styles.wrapperOfAuth}>
            <Route path={SIGN_IN} render={() => <SignIn/>}/>
            <Route path={REGISTER} render={() => <Register/>}/>
            <Route path={FORGOT} render={() => <Forgot/>}/>
            <Route path={SET_NEW_PASS} render={() => <SetNewPass/>}/>
        </div>
            </>
    )
}

export default Cards

