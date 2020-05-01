import React from "react";
import {Route} from "react-router";
import SignIn from "./authorization/SignIn";
import Register from "./authorization/Register";
import Forgot from "./authorization/Forgot";
import SetNewPass from "./authorization/SetNewPass";
import styles from "./authorization/Auth.module.css";
import Header from "./authorization/Header/Header";


const Cards = () => {

    return (
        <>
        <Header/>
        <div className={styles.wrapperOfAuth}>
            <Route path='/sign-in' render={() => <SignIn/>}/>
            <Route path='/register' render={() => <Register/>}/>
            <Route path='/forgot' render={() => <Forgot/>}/>
            <Route path='/set-new-pass' render={() => <SetNewPass/>}/>
        </div>
            </>
    )
}

export default Cards

