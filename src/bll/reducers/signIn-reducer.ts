import React from "react";

const initialState: signInitialStateType = {
    email: '',
    password: '',
    rememberMe: false,
    loading: false,
    disabled: false,
    error: null,
    token: false
}

export type signInitialStateType = {
    email: string
    password: string
    rememberMe: boolean,
    loading: boolean
    disabled: boolean
    error: string | null
    token: boolean
}

const signInReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case 'SET-SIGN-IN-FORM-VALUES': {
            return {
                ...state,
                email: action.email,
                password: action.password,
                rememberMe: action.rememberMe,
                token: action.token
            }
        }
        case 'SET-LOADING-DATA': {
            return {
                ...state,
                loading: action.loading,
                disabled: action.disabled
            }
        }
        case 'SET-ERROR-SIGN-IN-PAGE': {
            return {
                ...state,
                error: action.error

            }
        }
            default: return state
    }

}

export default signInReducer
