import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {PROFILE, REGISTER_SUCCESS, SET_ERROR_REGISTER_PAGE, WAITING_FOR_RESPONSE} from "../../common/Constants";
import {authApi} from "../../../dal/api";
import {AppStoreType} from "../../../bll/store";
import Register from "./Register";
import {Redirect} from "react-router";


const RegisterContainer: React.FC = () => {

    const dispatch = useDispatch();
    const state = useSelector((state: AppStoreType) => state.register)

    const setRegisterFormValues = (email: any, password: string, repeatPassword: string) => {
        if (password !== repeatPassword) {
            let error = 'fields password and repeat password should be the same'
            dispatch({type: SET_ERROR_REGISTER_PAGE, error})
        } else {
            let correctEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
            if (password.length <= 7 && email !== correctEmail) {
                let error = 'your email of password is not valid'
                dispatch({type: SET_ERROR_REGISTER_PAGE, error})
            } else {
                dispatch({type: WAITING_FOR_RESPONSE, loading: true})
                return authApi.register(email, password)
                    .then(res => {
                        dispatch({type: WAITING_FOR_RESPONSE, loading: false})
                        dispatch({type: REGISTER_SUCCESS, email: email, password: password, redirect:true})
                    })
                    .catch(err => {
                        let error = 'your email is invalid or is already registered'
                        dispatch({type: WAITING_FOR_RESPONSE, loading: false})
                        dispatch({type: SET_ERROR_REGISTER_PAGE, error})
                    })
            }
        }
    };
    const CancelErrorPosition = () => dispatch({type: SET_ERROR_REGISTER_PAGE, error: null})
    return (
        <>
            {state.redirect && <Redirect to={PROFILE}/>}
            <Register setRegisterFormValues={setRegisterFormValues}
                      loading={state.loading}
                      error={state.error}
                      CancelErrorPosition={CancelErrorPosition}/>
        </>
    )
};
export default RegisterContainer
