import React from "react";

const initialState: signInitialStateType = {
    email: '',
    password: '',
    rememberMe: false,
    loading: false,
    disabled: false
}

export type signInitialStateType = {
    email: string
    password: string
    rememberMe: boolean,
    loading: boolean
    disabled: boolean
}

const signInReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case 'SET-SIGN-IN-FORM-VALUES': {
            return{
                ...state,
                email: action.email,
                password: action.password,
                rememberMe: action.rememberMe,
            }
        }
        case 'SET-LOADING-DATA': {
            return{
                ...state,
                loading: action.loading,
                disabled: action.disabled
            }
        }


    }

    return state
}

export default signInReducer