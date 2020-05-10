import React from "react";
import Forgot from "./Forgot";
import {useDispatch, useSelector} from "react-redux";
import {authApi} from "../../../dal/api";
import {AppStoreType} from "../../../bll/store";
import {Redirect} from "react-router";
import {
    RESTORE_FORGOT_PASSWORD,
    SET_LOADING_DATA_FORGOT_PAGE,
    SET_VALUE_ERROR_FORGOT_PAGE
} from "../../common/Constants";


const ForgotContainer = () => {

    const dispatch = useDispatch();
    const state = useSelector((state: AppStoreType) => state.forgot);

    const html1 = "<a href=http://localhost:3000/template-typescript#/set-new-pass/";
    const html2 = ">reset-password-link</a>";


    const setForgotPassword = (email: string) => {
        dispatch({type: SET_LOADING_DATA_FORGOT_PAGE, loading: true, disabled: true});
        authApi.forgotPass(email,
            html1, html2)
            .then(result => {
                console.log(result);
                dispatch({type: SET_LOADING_DATA_FORGOT_PAGE, loading: false, disabled: false, emailApproved: true});
            })
            .catch(fal => {
                console.log(fal.response.data.error);
                const error = fal.response.data.error;
                dispatch({type: SET_VALUE_ERROR_FORGOT_PAGE, error: error})
                dispatch({type: SET_LOADING_DATA_FORGOT_PAGE, loading: false, disabled: false})
            });

        return (
            dispatch({type: RESTORE_FORGOT_PASSWORD, email})
        )
    };
    const toCleanError = () => {
        dispatch({type: SET_VALUE_ERROR_FORGOT_PAGE, error: null})
    };
    return (
        !state.emailApproved ?
            <Forgot setForgotPassword={setForgotPassword}
                    toCleanError={toCleanError}
                    loading={state.loading}
                    disabled={state.disabled}
                    error={state.error}/> :
            <Redirect to='/set-new-pass/:token'/>
    )
};

export default ForgotContainer