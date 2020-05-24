
import {
    IS_TOKEN_HAS, REDIRECT_OFF,
    SET_ERROR_SIGN_IN_PAGE,
    SET_LOADING_DATA,
    SET_SIGN_IN_FORM_VALUES
} from "../../ui/common/Constants";
import {authApi} from "../../dal/api";
import {ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "../store";

const initialState: signInitialStateType = {
    email: '',
    password: '',
    rememberMe: false,
    loading: false,
    disabled: false,
    error: null,
    token: '',
    redirect: false,
    authToken: ''
};

export type signInitialStateType = {
    email: string
    password: string
    rememberMe: boolean,
    loading: boolean
    disabled: boolean
    error: string | null
    token: string
    redirect: false,
    authToken?:string
}

const signInReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case SET_SIGN_IN_FORM_VALUES: {
            return {
                ...state,
                email: action.email,
                password: action.password,
                rememberMe: action.rememberMe,
                token: action.token,
                redirect: action.redirect
            }
        }
        case SET_LOADING_DATA: {
            return {
                ...state,
                loading: action.loading,
                disabled: action.disabled,
                redirect: action.redirect
            }
        }
        case SET_ERROR_SIGN_IN_PAGE: {
            return {
                ...state,
                error: action.error

            }
        }
        case IS_TOKEN_HAS: {
            return {
                ...state,
                authToken: action.authToken
            }
        }
        case REDIRECT_OFF:{
            return {
                ...state,
                redirect: false
            }
        }
            default: return state
    }

};

//thunks

export const setSignInFormValues = (email: string, password: string, rememberMe: boolean) =>
    async (
        dispatch: ThunkDispatch<AppStoreType, {}, any>,
        getStore: AppStoreType
    ) => {

    dispatch({type: SET_LOADING_DATA, loading: true, disabled: true});
    await authApi.login(email, password, rememberMe)
        .then(res => {
            dispatch({type: SET_LOADING_DATA, loading: false, disabled: false});
            dispatch({
                type: SET_SIGN_IN_FORM_VALUES,
                email: res.email,
                password: password,
                rememberMe: res.rememberMe,
                token: res.token,
                redirect: true
            });
            localStorage.setItem('auth-token', res.token);
            localStorage.setItem('user-id', res._id);

            const authToken = localStorage.getItem('auth-token');
            dispatch({type: IS_TOKEN_HAS, authToken})
            //console.log(authToken)

        })
        .catch(fal => {
                console.log(fal.response);
                const error = fal.response.data.error;
                dispatch({type: SET_LOADING_DATA, loading: false, disabled: false, redirect: false});
                dispatch({type: SET_ERROR_SIGN_IN_PAGE, error})
            }
        );
};

export default signInReducer
