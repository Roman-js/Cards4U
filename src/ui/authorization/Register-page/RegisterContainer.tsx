import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {REGISTER_SUCCESS} from "../../common/Constants";
import Register from "./Register";
import {authApi} from "../../../dal/api";


const RegisterContainer:React.FC = () => {

    const dispatch = useDispatch();

    const state = useSelector((state: AppStoreType) => state.register)
    //const disable = useSelector((state: AppStoreType) => state.signIn.disabled)

    const setRegisterFormValues = (email: string, password: string) => {
        dispatch({type: REGISTER_SUCCESS})
        authApi.register(email, password)
            .then(res => {
                return res;
                dispatch({type: REGISTER_SUCCESS, email: email,password: password})
            })
        return (
            dispatch({
                type: REGISTER_SUCCESS,
                email: email,
                password: password,
            })
        )
    };
    return (
        <>
            <Register setRegisterFormValues={setRegisterFormValues}/>
        </>
    )
};
export default RegisterContainer
