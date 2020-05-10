import React, {useEffect} from "react";
import SignIn from "./SignIn";
import {useDispatch, useSelector} from "react-redux";
import {authApi} from "../../../dal/api";
import {AppStoreType} from "../../../bll/store";
import {Redirect} from "react-router";
import {IS_TOKEN_HAS, SET_ERROR_SIGN_IN_PAGE, SET_LOADING_DATA, SET_SIGN_IN_FORM_VALUES} from "../../common/Constants";


const SignInContainer = () => {

    const dispatch = useDispatch();

    const state = useSelector((state: AppStoreType) => state.signIn);
    //const disable = useSelector((state: AppStoreType) => state.signIn.disabled)


    const setSignInFormValues = (email: string, password: string, rememberMe: boolean) => {

        dispatch({type: SET_LOADING_DATA, loading: true, disabled: true});
        authApi.login(email, password, rememberMe)
            .then(res => {
                dispatch({type: SET_LOADING_DATA, loading: false, disabled: false});
                dispatch({
                    type: SET_SIGN_IN_FORM_VALUES,
                    email: res.email,
                    password: password,
                    rememberMe: res.rememberMe,
                    token: res.token,
                    redirect: true
                });
                localStorage.setItem('auth-token', res.token)
                const authToken = localStorage.getItem('auth-token');
                dispatch({type: IS_TOKEN_HAS, authToken})
                //console.log(authToken)

            })
            .catch(fal => {
                    console.log(fal.response);
                    const error = fal.response.data.error;
                    dispatch({type: SET_LOADING_DATA, loading: false, disabled: false, redirect: false});
                    dispatch({type: SET_ERROR_SIGN_IN_PAGE, error})
                }
            );
    };

    const toCleanErrorField = () => {
        dispatch({type: SET_ERROR_SIGN_IN_PAGE, error: null})
    };
    return (

        state.redirect ? <Redirect to='/profile'/> :
            <SignIn setSignInFormValues={setSignInFormValues}
                    loading={state.loading}
                    disabled={state.disabled}
                    error={state.error}
                    toCleanErrorField={toCleanErrorField}/>
    )
};

export default SignInContainer
