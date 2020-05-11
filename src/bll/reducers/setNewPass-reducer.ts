import React from "react";
import {SET_LOADING_VALUE, SET_NEW_TOKEN, SHOW_ERROR, TO_CLEAN_ERROR_FIELD} from "../../ui/common/Constants";
import {authApi} from "../../dal/api";
import {ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "../store";

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


//thunks

export const setValueOfSetNewPassForm = (password: string, repeatPassword: string, token: string | undefined) =>
    async (
        dispatch: ThunkDispatch<AppStoreType, {}, any>,
        getStore: AppStoreType
    ) => {

        if (password === repeatPassword && password.length > 7) {
            dispatch({type: SET_LOADING_VALUE, loading: true, disabled: true});
              await authApi.setNewPass(token, password);
                try  {
                    dispatch({type: SET_NEW_TOKEN, token: token});
                    dispatch({type: SET_LOADING_VALUE, loading: false, disabled: false})
                }

                catch(e) {
                        console.log(e.response);
                        dispatch({type: SHOW_ERROR, error: e.response.data.error})
                        dispatch({type: SET_LOADING_VALUE, loading: false, disabled: false})
                    }

        } else {
            dispatch({
                type: SHOW_ERROR,
                error: 'Incorrect Password! Password should have min 8 values and each one fields should be same!'
            })
        }
    };


export default setNewPassReducer