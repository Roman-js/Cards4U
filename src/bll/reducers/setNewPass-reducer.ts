import React from "react";

const initialState: initialStateType = {
    error: '',
    token: '',
    loading: null,
    disabled: false
}

type initialStateType = {
    error: string | null,
    token: string | undefined
    loading: boolean | null
    disabled: boolean
}

const setNewPassReducer = (state = initialState, action: any ) =>{

    switch (action.type) {

        case 'SHOW-ERROR': {
            return {
                ...state,
                error: action.error
            }
        }
        case 'SET-NEW-TOKEN': {
            return {
                ...state,
                token: action.token
            }
        }
        case 'SET-LOADING-VALUE': {
            return {
                ...state,
                loading: action.loading
            }
        }
        case 'TO-CLEAN-ERROR-FIELD': {
            return {
                ...state,
                error: action.error
            }
        }

        default: return state
    }


}

export default setNewPassReducer