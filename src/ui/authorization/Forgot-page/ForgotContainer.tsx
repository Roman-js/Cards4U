import React from "react";
import Forgot from "./Forgot";
import {connect, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {Redirect} from "react-router";
import {setForgotPassword, toCleanError} from "../../../bll/reducers/forgot-reducer";

type OwnPropsType = {
    setForgotPassword: (email: string)=>void
    toCleanError: ()=>void
}

const ForgotContainer: React.FC<OwnPropsType> = (props) => {

    const state = useSelector((state: AppStoreType) => state.forgot);

    return (
        !state.emailApproved ?
            <Forgot setForgotPassword={props.setForgotPassword}
                    toCleanError={props.toCleanError}
                    loading={state.loading}
                    disabled={state.disabled}
                    error={state.error}/> :
            <Redirect to='/set-new-pass/:token'/>
    )
};

export default connect(null, {setForgotPassword, toCleanError})(ForgotContainer)