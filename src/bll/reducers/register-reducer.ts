import {REGISTER_SUCCESS, SET_ERROR_REGISTER_PAGE, WAITING_FOR_RESPONSE} from "../../ui/common/Constants";
import {
    registerInitialState,
    registerSuccessActionType, setErrorRegisterPageActionType,
    waitingForResponseActionType
} from "../../ui/authorization/authTypes/registerTypes";
import {authApi} from "../../dal/api";
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "../store";


const initialState: registerInitialState = {
    email: '',
    password: '',
    loading: false,
    error: false,
    redirect: false

}

const registerReducer = (state: registerInitialState = initialState, action: registerActionType): registerInitialState => {
    switch (action.type) {
        case REGISTER_SUCCESS: {
            return {
                ...state,
                email: action.email,
                password: action.password,
                redirect: true
            }
        }
        case WAITING_FOR_RESPONSE: {
            return {
                ...state,
                loading: action.loading
            }
        }
        case SET_ERROR_REGISTER_PAGE: {
            return {
                ...state,
                error: action.error
            }
        }
    }
    return state
}
type registerActionType = registerSuccessActionType | waitingForResponseActionType | setErrorRegisterPageActionType

// export const login = (email,password, rememberMe, captcha) => async (dispatch) => {
//     let response = await authAPI.login(email,password, rememberMe, captcha)
//     if(response.data.resultCode === 0){
//         dispatch(getAuthUserData())
//     } else {
//         if(response.data.resultCode === 10){
//             dispatch(getCaptchaUrl())
//         }
//         let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
//         dispatch(stopSubmit('login', {_error:message}))
//     }
// }
//  export const setRegisterFormValues = (email: any, password: string, repeatPassword: string) => async (dispatch: any) => {
//     debugger
//     if (password !== repeatPassword) {
//         let error = 'fields password and repeat password should be the same'
//         dispatch({type: SET_ERROR_REGISTER_PAGE, error})
//     } else {
//         let correctEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
//         if (password.length <= 7 && email !== correctEmail) {
//             let error = 'your email of password is not valid'
//             dispatch({type: SET_ERROR_REGISTER_PAGE, error})
//         } else {
//             dispatch({type: WAITING_FOR_RESPONSE, loading: true})
//             await authApi.register(email, password)
//                 try {
//                     dispatch({type: WAITING_FOR_RESPONSE, loading: false})
//                     dispatch({type: REGISTER_SUCCESS, email: email, password: password, redirect: true})
//                 }
//                 catch(e){
//                     let error = 'your email is invalid or is already registered'
//                     dispatch({type: WAITING_FOR_RESPONSE, loading: false})
//                     dispatch({type: SET_ERROR_REGISTER_PAGE, error})
//                 }
//         }
//     }
// };
export default registerReducer
