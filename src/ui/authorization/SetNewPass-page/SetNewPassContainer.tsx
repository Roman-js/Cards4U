import React from "react";
import SetNewPass from "./SetNewPass";
import {connect, useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {TO_CLEAN_ERROR_FIELD} from "../../common/Constants";
import {setValueOfSetNewPassForm} from "../../../bll/reducers/setNewPass-reducer";


type OwnPropsType={
    setValueOfSetNewPassForm: (password: string, repeatPassword: string, token: string | undefined)=>void
}
const SetNewPassContainer: React.FC<OwnPropsType> = (props: OwnPropsType) => {

    const dispatch = useDispatch();
    const state = useSelector((state: AppStoreType) => state.setNewPass);

    const toCleanErrorField = () => {
        dispatch({type: TO_CLEAN_ERROR_FIELD, error: null})
    };


    return (
        <SetNewPass
            setValueOfSetNewPassForm={props.setValueOfSetNewPassForm}
            error={state.error}
            loading={state.loading}
            disabled={state.disabled}
            toCleanErrorField={toCleanErrorField}/>
    )
};

export default connect(null, {setValueOfSetNewPassForm})(SetNewPassContainer)