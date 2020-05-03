import React from "react";
import SignIn from "./SignIn";
import {useDispatch} from "react-redux";
import {authApi} from "../../../dal/api";


const SignInContainer = () => {

    const dispatch = useDispatch();

  const setSignInFormValues = (email: string,password: string,rememberMe: boolean) => {

      authApi.login(email,password, rememberMe)

          .then(
              res=>{return{res}})
        return (
            dispatch({
                type: 'SET-SIGN-IN-FORM-VALUES',
                email: email,
                password: password,
                rememberMe: rememberMe
            })
        )
    };
    return (
        <>
            <SignIn setSignInFormValues={setSignInFormValues}/>
        </>
    )

};

export default SignInContainer