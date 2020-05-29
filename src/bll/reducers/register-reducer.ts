import {REGISTER_SUCCESS, SET_ERROR_REGISTER_PAGE, WAITING_FOR_RESPONSE} from "../../ui/common/Constants";
import {
    registerInitialState,
    registerSuccessActionType,
    setErrorRegisterPageActionType,
    waitingForResponseActionType
} from "../../ui/authorization/types/registerTypes";
import {authApi} from "../../dal/api";
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
export default registerReducer

export const setRegisterFormValues = (email: string | any, password: string, repeatPassword: string) =>
    async (dispatch: ThunkDispatch<AppStoreType, {}, any>) => {
        if (password !== repeatPassword) {
            let error = 'fields password and repeat password should be the same';
            dispatch({type: SET_ERROR_REGISTER_PAGE, error})
        } else {
            let correctEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
            if (password.length <= 7 || !email.match(correctEmail)) {
                let error = 'your email of password is not valid'
                dispatch({type: SET_ERROR_REGISTER_PAGE, error})
            } else {
                dispatch({type: WAITING_FOR_RESPONSE, loading: true})
                await authApi.register(email, password)
                try {
                    dispatch({type: WAITING_FOR_RESPONSE, loading: false})
                    dispatch({type: REGISTER_SUCCESS, email: email, password: password, redirect: true})
                } catch {
                    let error = 'your email is invalid or is already registered'
                    dispatch({type: WAITING_FOR_RESPONSE, loading: false})
                    dispatch({type: SET_ERROR_REGISTER_PAGE, error})
                }
            }
        }
    };


