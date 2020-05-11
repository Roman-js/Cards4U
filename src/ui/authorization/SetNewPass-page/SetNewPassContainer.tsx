import React from "react";
import SetNewPass from "./SetNewPass";
import {connect, useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {authApi} from "../../../dal/api";
import {useParams} from "react-router";
import {SET_LOADING_VALUE, SET_NEW_TOKEN, SHOW_ERROR, TO_CLEAN_ERROR_FIELD} from "../../common/Constants";
import {setValueOfSetNewPassForm} from "../../../bll/reducers/setNewPass-reducer";


type OwnPropsType={
    setValueOfSetNewPassForm: (password: string, repeatPassword: string, token: string | undefined)=>void
}
const SetNewPassContainer = (props: OwnPropsType) => {

    const dispatch = useDispatch();
    const state = useSelector((state: AppStoreType) => state.setNewPass);

    //const {token} = useParams();

    // const setValueOfSetNewPassForm = (password: string, repeatPassword: string, token: string | undefined) => {
    //
    //     if (password === repeatPassword && password.length > 7) {
    //         dispatch({type: SET_LOADING_VALUE, loading: true, disabled: true});
    //         authApi.setNewPass(token, password)
    //             .then(res => {
    //                 dispatch({type: SET_NEW_TOKEN, token: token});
    //                 dispatch({type: SET_LOADING_VALUE, loading: false, disabled: false})
    //             })
    //
    //             .catch(fal => {
    //                     console.log(fal.response);
    //                     dispatch({type: SHOW_ERROR, error: fal.response.data.error})
    //                     dispatch({type: SET_LOADING_VALUE, loading: false, disabled: false})
    //                 }
    //             )
    //     } else {
    //         dispatch({
    //             type: SHOW_ERROR,
    //             error: 'Incorrect Password! Password should have min 8 values and each one fields should be same!'
    //         })
    //     }
    // };
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
}

export default connect(null, {setValueOfSetNewPassForm})(SetNewPassContainer)