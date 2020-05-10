import React from "react";
import {
    RESTORE_FORGOT_PASSWORD,
    SET_LOADING_DATA_FORGOT_PAGE,
    SET_VALUE_ERROR_FORGOT_PAGE
} from "../../ui/common/Constants";

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

export default forgotReducer