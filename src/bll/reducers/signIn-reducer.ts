import React from "react";

const initialState: signInitialStateType = {
    email: '',
    password: '',
    rememberMe: false
}

export type signInitialStateType = {
    email: string
    password: string
    rememberMe: boolean
}

const signInReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case 'SET-SIGN-IN-FORM-VALUES': {
            debugger
            return{
                ...state,
                email: action.email,
                password: action.password,
                rememberMe: action.rememberMe
            }
        }

    }

    return state
}

export default signInReducer