import React from "react";
import {ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "../store";
import {authApi} from "../../dal/api";

const initialState = {}

const profileReducer = (state = initialState) =>{
return state
};

export default profileReducer

//thunks

export const approveAuth = () =>

    async (dispatch: ThunkDispatch<AppStoreType, {}, any>,
           getState: AppStoreType)=>{
        let authToken = localStorage.getItem('auth-token');
        await authApi.authMe(authToken)
            .then(res=>{
                //localStorage.setItem('auth-token',)
            })

    }
