import {REGISTER_SUCCESS} from "../../ui/common/Constants";
import {registerInitialState, registerSuccessActionType} from "../../ui/authorization/authTypes/registerTypes";


const initialState:registerInitialState = {
    email: '',
    password: ''
}

const registerReducer = (state: registerInitialState = initialState, action: registerActionType):registerInitialState => {
    switch (action.type) {
        case REGISTER_SUCCESS: {
            return {
                ...state,
                email: action.email,
                password: action.password
            }
        }
    }
    return state
}

type registerActionType = registerSuccessActionType

export default registerReducer
