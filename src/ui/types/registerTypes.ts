import {REGISTER_SUCCESS, SET_ERROR_REGISTER_PAGE, WAITING_FOR_RESPONSE} from "../common/Constants";

export type registerInitialState = {
    email: string,
    password: string,
    id?: string,
    error: boolean,
    loading: boolean,
    redirect:boolean
}
export type registerSuccessActionType = {
    type: typeof REGISTER_SUCCESS,
    email: string
    password: string,
    redirect:boolean
}
export type waitingForResponseActionType = {
    type: typeof WAITING_FOR_RESPONSE,
    loading: boolean
}
export type setErrorRegisterPageActionType = {
    type: typeof SET_ERROR_REGISTER_PAGE,
    error: boolean
}

