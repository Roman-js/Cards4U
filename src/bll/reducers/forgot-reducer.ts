import React from "react";

const initialState = {
    email: ''
}

const forgotReducer = (state = initialState, action: any) =>{
   switch (action.type) {
       case 'RESTORE-FORGOT-PASSWORD': {
         return {
             ...state, email: action.email
         }
       }

   }
   return state
}

export default forgotReducer