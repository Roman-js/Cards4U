import React from "react";
import SignIn from "./SignIn";
import {useDispatch, useSelector} from "react-redux";
import {authApi} from "../../../dal/api";
import {AppStoreType} from "../../../bll/store";


const SignInContainer = () => {

    const dispatch = useDispatch();

    const loading = useSelector((state: AppStoreType) => state.signIn.loading)
    const disable = useSelector((state: AppStoreType) => state.signIn.disabled)
    //const valueOfInputEmail = useSelector((state: AppStoreType) => state.signIn.email);

    const setSignInFormValues = (email: string, password: string, rememberMe: boolean) => {
        dispatch({type: 'SET-LOADING-DATA', loading: true, disabled: true})
        authApi.login(email, password, rememberMe)
            .then(res => {
                return res;
                dispatch({type: 'SET-LOADING-DATA', loading: false, disabled: false})
            })
            .catch(fal => {
                    console.log(fal);
                    dispatch({type: 'SET-LOADING-DATA', loading: false, disabled: false})
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
    return (
        <>
            <SignIn setSignInFormValues={setSignInFormValues}
                    loading={loading}
                    disabled={disable}/>
        </>
    )

};

export default SignInContainer