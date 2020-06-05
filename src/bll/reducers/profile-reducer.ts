import {ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "../store";
import {authApi} from "../../dal/api";
import {LOGIN_SUCCESS} from "../../ui/common/Constants";

const initialState = {
    login: false
};

const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            return {...state, login: action.login}
        }

    }

    return state
};

export default profileReducer

//thunks

export const approveAuth = (login: boolean) =>

    async (dispatch: ThunkDispatch<AppStoreType, {}, any>,
           getState: AppStoreType) => {

        try {
            await authApi.authMe();
            dispatch({type: LOGIN_SUCCESS, login: login})
        }
        catch(e){

        }


    };
