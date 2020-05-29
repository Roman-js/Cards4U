import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {PROFILE, SET_ERROR_REGISTER_PAGE} from "../../common/Constants";
import {AppStoreType} from "../../../bll/store";
import Register from "./Register";
import {Redirect} from "react-router";


const RegisterContainer: React.FC = (props) => {

    const dispatch = useDispatch();
    const state = useSelector((state: AppStoreType) => state.register)

    const cancelErrorPosition = () => dispatch({type: SET_ERROR_REGISTER_PAGE, error: null})
    return (
        <>
            {state.redirect && <Redirect to={PROFILE}/>}
            <Register loading={state.loading}
                      error={state.error}
                      cancelErrorPosition={cancelErrorPosition}/>
        </>
    )
};
export default RegisterContainer
