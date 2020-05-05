import React from "react";
import SignIn from "./SignIn";
import {useDispatch, useSelector} from "react-redux";
import {authApi} from "../../../dal/api";
import {AppStoreType} from "../../../bll/store";


const SignInContainer = () => {

    const dispatch = useDispatch();

    const state = useSelector((state: AppStoreType) => state.signIn)
    //const disable = useSelector((state: AppStoreType) => state.signIn.disabled)


    const setSignInFormValues = (email: string, password: string, rememberMe: boolean) => {
        dispatch({type: 'SET-LOADING-DATA', loading: true, disabled: true})
        authApi.login(email, password, rememberMe)
            .then(res => {
                return res;
                dispatch({type: 'SET-LOADING-DATA', loading: false, disabled: false})
            })
            .catch(fal => {
                    console.log(fal.response);
                    const error = fal.response.data.error;
                    dispatch({type: 'SET-LOADING-DATA', loading: false, disabled: false})
                    dispatch({type: 'SET-ERROR-SIGN-IN-PAGE', error})
                }
            );
        return (
            dispatch({
                type: 'SET-SIGN-IN-FORM-VALUES',
                email: email,
                password: password,
                rememberMe: rememberMe,
            })
        )
    };
   const toCleanErrorField = () =>{
       dispatch({type: 'SET-ERROR-SIGN-IN-PAGE', error: null})

   }
    return (
        <>
            <SignIn setSignInFormValues={setSignInFormValues}
                    loading={state.loading}
                    disabled={state.disabled}
                    error={state.error}
                    toCleanErrorField={toCleanErrorField}/>
        </>
    )
};

export default SignInContainer