import React from "react";
import SignIn from "./SignIn";
import {useDispatch, useSelector} from "react-redux";
import {authApi} from "../../../dal/api";
import {AppStoreType} from "../../../bll/store";
import {Redirect} from "react-router";


const SignInContainer =  () => {

    const dispatch = useDispatch();

    const state = useSelector((state: AppStoreType) => state.signIn)
    //const disable = useSelector((state: AppStoreType) => state.signIn.disabled)


    const setSignInFormValues = (email: string, password: string, rememberMe: boolean) => {
        dispatch({type: 'SET-LOADING-DATA', loading: true, disabled: true})
        authApi.login(email, password, rememberMe)
            .then(res => {
                console.log(res);
                dispatch({type: 'SET-LOADING-DATA', loading: false, disabled: false});
                dispatch({
                    type: 'SET-SIGN-IN-FORM-VALUES',
                    email: res.email,
                    password: password,
                    rememberMe: res.rememberMe,
                    token: res.token,
                    redirect: true
                })
            })
            .catch(fal => {
                    console.log(fal.response);
                    const error = fal.response.data.error;
                    dispatch({type: 'SET-LOADING-DATA', loading: false, disabled: false, redirect: false})
                    dispatch({type: 'SET-ERROR-SIGN-IN-PAGE', error})
                }
            );
    };
    const toCleanErrorField = () => {
        dispatch({type: 'SET-ERROR-SIGN-IN-PAGE', error: null})
    }
    return (

            state.redirect ? <Redirect to='/profile' />:
            <SignIn setSignInFormValues={setSignInFormValues}
                    loading={state.loading}
                    disabled={state.disabled}
                    error={state.error}
                    toCleanErrorField={toCleanErrorField}/>
    )
};

export default SignInContainer