import React from "react";
import SetNewPass from "./SetNewPass";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {authApi} from "../../../dal/api";
import {useParams} from "react-router";


const SetNewPassContainer = () => {

    const dispatch = useDispatch();
    const state = useSelector((state: AppStoreType) => state.setNewPass);

    const {token} = useParams();

    const setValueOfSetNewPassForm = (password: string, repeatPassword: string) => {

        if (password === repeatPassword && password.length > 7) {
            dispatch({type: 'SET-LOADING-VALUE', loading: true, disabled: true});
            authApi.setNewPass(token, password)
                .then(res => {
                    dispatch({type: 'SET-NEW-TOKEN', token: token});
                    dispatch({type: 'SET-LOADING-VALUE', loading: false, disabled: false})
                })

                .catch(fal => {
                        console.log(fal.response);
                        dispatch({type: 'SHOW-ERROR', error: fal.response.data.error})
                        dispatch({type: 'SET-LOADING-VALUE', loading: false, disabled: false})
                    }
                )
        } else {
            dispatch({
                type: 'SHOW-ERROR',
                error: 'Incorrect Password! Password should have min 8 values and each one fields should be same!'
            })
        }
    };
    const toCleanErrorField = () => {
        dispatch({type: 'TO-CLEAN-ERROR-FIELD', error: null})
    };

    return (
        <SetNewPass
            setValueOfSetNewPassForm={setValueOfSetNewPassForm}
            error={state.error}
            loading={state.loading}
            disabled={state.disabled}
            toCleanErrorField={toCleanErrorField}/>
    )
}

export default SetNewPassContainer