import React from "react";
import {Redirect, Route} from "react-router";
import SetNewPassContainer from "../authorization/SetNewPass-page/SetNewPassContainer";
import styles from "../authorization/Auth.module.css";
import {
    CARDS_TABLE,
    DECKS_TABLE,
    FORGOT,
    PLAY,
    PROFILE,
    REGISTER,
    SET_NEW_PASS,
    SIGN_IN,
    UPLOAD_FILE
} from "../common/Constants";
import SignInContainer from "../authorization/SignIn-page/SignInContainer";
import ForgotContainer from "../authorization/Forgot-page/ForgotContainer";
import RegisterContainer from "../authorization/Register-page/RegisterContainer";
import HeaderContainer from "../authorization/Header/HeaderContainer";
import DecksTableContainer from "../settings/decks/DecksTableContainer";
import CardsTableContainer from "../settings/cards/CardsTableContainer";
import GameFieldContainer from "../play/GameFieldContainer";
import UploadFile from "../common/uploadFile/uploadFile";
import ProfileContainer from "../authorization/Profile-page/ProfileContainer";


const Cards = () => {

    return (
        <>
            <HeaderContainer/>

            <div className={styles.wrapperOfAuth}>
                <Route path={SIGN_IN} render={() => <SignInContainer/>}/>
                <Route path={REGISTER} render={() => <RegisterContainer/>}/>
                <Route path={FORGOT} render={() => <ForgotContainer/>}/>
                <Route path={SET_NEW_PASS} render={() => <SetNewPassContainer/>}/>
                <Route path={PROFILE} render={() => <ProfileContainer/>}/>

                <Route path={DECKS_TABLE} render={() => <DecksTableContainer/>}/>
                <Route path={CARDS_TABLE} render={() => <CardsTableContainer/>}/>
                <Route path={PLAY} render={() => <GameFieldContainer/>}/>
                <Route path={UPLOAD_FILE} render={() => <UploadFile/>}/>
            </div>
            <Redirect to={PROFILE}/>
        </>
    )
};

export default Cards

