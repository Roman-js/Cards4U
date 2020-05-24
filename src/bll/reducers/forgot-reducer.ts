import {
    RESTORE_FORGOT_PASSWORD,
    SET_LOADING_DATA_FORGOT_PAGE,
    SET_VALUE_ERROR_FORGOT_PAGE
} from "../../ui/common/Constants";
import {ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "../store";
import {authApi} from "../../dal/api";

const initialState = {
    email: '',
    loading: false,
    disabled: false,
    error: null,
    emailApproved: false
}

const forgotReducer = (state = initialState, action: any) =>{
   switch (action.type) {
       case RESTORE_FORGOT_PASSWORD: {
         return {
             ...state, email: action.email
         }
       }
       case SET_LOADING_DATA_FORGOT_PAGE: {
           return {
               ...state,
               loading: action.loading,
               disabled: action.disabled,
               emailApproved: action.emailApproved
           }
       }
       case SET_VALUE_ERROR_FORGOT_PAGE: {
           return {
               ...state,
               error: action.error
           }
       }
           default: return state
   }

}

const html1 = "<a href=http://localhost:3000/template-typescript#/set-new-pass/";
const html2 = ">reset-password-link</a>";

//thunks
export const setForgotPassword = (email: string) =>
    async (
        dispatch: ThunkDispatch<AppStoreType, {}, any>,
        getStore: AppStoreType
    ) => {
        dispatch({type: SET_LOADING_DATA_FORGOT_PAGE, loading: true, disabled: true});
        try {
            const data = await authApi.forgotPass(email, html1, html2);
            console.log(data);
            dispatch({type: SET_LOADING_DATA_FORGOT_PAGE, loading: false, disabled: false, emailApproved: true});
            dispatch({type: RESTORE_FORGOT_PASSWORD, email})
        } catch (e) {
            console.log(e.response.data.error);
            const error = e.response.data.error;
            dispatch({type: SET_VALUE_ERROR_FORGOT_PAGE, error: error})
            dispatch({type: SET_LOADING_DATA_FORGOT_PAGE, loading: false, disabled: false})
        }

    };

export const toCleanError = () =>
    async (
        dispatch: ThunkDispatch<AppStoreType, {}, any>,
        getStore: AppStoreType
    ) => {
        try {
            dispatch({type: SET_VALUE_ERROR_FORGOT_PAGE, error: null})
        } catch (e) {
            console.log(e);
        }
    };

export default forgotReducer