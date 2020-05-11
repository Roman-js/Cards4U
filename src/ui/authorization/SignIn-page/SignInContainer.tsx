import React from "react";
import SignIn from "./SignIn";
import {connect, useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {Redirect} from "react-router";
import {SET_ERROR_SIGN_IN_PAGE} from "../../common/Constants";
import {setSignInFormValues} from "../../../bll/reducers/signIn-reducer";

type OwnPropsType = {
    setSignInFormValues: (email: string, password: string, rememberMe: boolean)=>void
}
const SignInContainer = (props: OwnPropsType) => {

    const dispatch = useDispatch();

    const state = useSelector((state: AppStoreType) => state.signIn);
    //const disable = useSelector((state: AppStoreType) => state.signIn.disabled)


    const toCleanErrorField = () => {
        dispatch({type: SET_ERROR_SIGN_IN_PAGE, error: null})
    };
    return (

        state.redirect ? <Redirect to='/profile'/> :
            <SignIn setSignInFormValues={props.setSignInFormValues}
                    loading={state.loading}
                    disabled={state.disabled}
                    error={state.error}
                    toCleanErrorField={toCleanErrorField}/>
    )
};

export default connect(null, {setSignInFormValues})(SignInContainer)
