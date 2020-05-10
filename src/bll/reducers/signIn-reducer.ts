import React from "react";
import {
    IS_TOKEN_HAS,
    SET_ERROR_SIGN_IN_PAGE,
    SET_LOADING_DATA,
    SET_SIGN_IN_FORM_VALUES
} from "../../ui/common/Constants";

const initialState: signInitialStateType = {
    email: '',
    password: '',
    rememberMe: false,
    loading: false,
    disabled: false,
    error: null,
    token: '',
    redirect: false,
    authToken: ''
}

export type signInitialStateType = {
    email: string
    password: string
    rememberMe: boolean,
    loading: boolean
    disabled: boolean
    error: string | null
    token: string
    redirect: false,
    authToken?:string
}

const signInReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case SET_SIGN_IN_FORM_VALUES: {
            return {
                ...state,
                email: action.email,
                password: action.password,
                rememberMe: action.rememberMe,
                token: action.token,
                redirect: action.redirect
            }
        }
        case SET_LOADING_DATA: {
            return {
                ...state,
                loading: action.loading,
                disabled: action.disabled,
                redirect: action.redirect
            }
        }
        case SET_ERROR_SIGN_IN_PAGE: {
            return {
                ...state,
                error: action.error

            }
        }
        case IS_TOKEN_HAS: {
            return {
                ...state,
                authToken: action.authToken
            }
        }
            default: return state
    }

};

export default signInReducer
