import React from "react";

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
        case 'SET-SIGN-IN-FORM-VALUES': {
            debugger
            return {
                ...state,
                email: action.email,
                password: action.password,
                rememberMe: action.rememberMe,
                token: action.token,
                redirect: action.redirect
            }
        }
        case 'SET-LOADING-DATA': {
            return {
                ...state,
                loading: action.loading,
                disabled: action.disabled,
                redirect: action.redirect
            }
        }
        case 'SET-ERROR-SIGN-IN-PAGE': {
            return {
                ...state,
                error: action.error

            }
        }
        case 'IS-TOKEN-HAS': {
            debugger
            return {
                ...state,
                authToken: action.authToken
            }
        }
            default: return state
    }

}

export default signInReducer
