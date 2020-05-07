import {REGISTER_SUCCESS, SET_ERROR_REGISTER_PAGE, WAITING_FOR_RESPONSE} from "../../ui/common/Constants";
import {
    registerInitialState,
    registerSuccessActionType, setErrorRegisterPageActionType,
    waitingForResponseActionType
} from "../../ui/authorization/authTypes/registerTypes";


const initialState:registerInitialState = {
    email: '',
    password: '',
    loading:false,
    error:false,
    redirect:false
}

const registerReducer = (state: registerInitialState = initialState, action: registerActionType):registerInitialState => {
    switch (action.type) {
        case REGISTER_SUCCESS: {
            return {
                ...state,
                email: action.email,
                password: action.password,
                redirect:true
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
