import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {REGISTER_SUCCESS, SET_ERROR_REGISTER_PAGE, WAITING_FOR_RESPONSE} from "../../common/Constants";
import Register from "./Register";
import {authApi} from "../../../dal/api";
import {AppStoreType} from "../../../bll/store";


const RegisterContainer: React.FC = () => {

    const dispatch = useDispatch();
    const state = useSelector((state: AppStoreType) => state.register)

    const setRegisterFormValues = (email: any, password: string, repeatPassword: string) => {
        if (password !== repeatPassword) {
            let error = 'fields password and repeat password should be the same'
            dispatch({type: SET_ERROR_REGISTER_PAGE, error})
        } else {
            let correctEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
            if (password.length < 7 && email !== correctEmail) {
                let error = 'your email of password is invalid'
                dispatch({type: SET_ERROR_REGISTER_PAGE, error})
            } else {
                dispatch({type: WAITING_FOR_RESPONSE, loading: true})
                return authApi.register(email, password)
                    .then(res => {
                        dispatch({type: WAITING_FOR_RESPONSE, loading: false})
                        dispatch({type: REGISTER_SUCCESS, email: email, password: password})
                    })
                    .catch(err => {
                        const error = err.response.data.error
                        console.log(err.response.data.error)
                        dispatch({type: WAITING_FOR_RESPONSE, loading: false})
                        dispatch({type: SET_ERROR_REGISTER_PAGE, error})
                    })
            }
        }
    };
    const CancelErrorPosition = () => dispatch({type: SET_ERROR_REGISTER_PAGE, error: null})
    return (
        <>
            <Register setRegisterFormValues={setRegisterFormValues}
                      loading={state.loading}
                      error={state.error}
                      CancelErrorPosition={CancelErrorPosition}/>
        </>
    )
};
export default RegisterContainer
