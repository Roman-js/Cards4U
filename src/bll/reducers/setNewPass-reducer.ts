import React from "react";
import {SET_LOADING_VALUE, SET_NEW_TOKEN, SHOW_ERROR, TO_CLEAN_ERROR_FIELD} from "../../ui/common/Constants";

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

        case SHOW_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        case SET_NEW_TOKEN: {
            return {
                ...state,
                token: action.token
            }
        }
        case SET_LOADING_VALUE: {
            return {
                ...state,
                loading: action.loading
            }
        }
        case TO_CLEAN_ERROR_FIELD: {
            return {
                ...state,
                error: action.error
            }
        }

        default: return state
    }

};



export default setNewPassReducer