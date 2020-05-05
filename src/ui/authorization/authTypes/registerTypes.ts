import {REGISTER_SUCCESS} from "../../common/Constants";

export type registerInitialState = {
    email: string,
    password: string,
    rememberMe?: boolean,
    id?: string,
    error?: string
}
export type registerSuccessActionType = {
    type: typeof REGISTER_SUCCESS,
    email: string
    password: string
}
