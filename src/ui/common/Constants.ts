//constants for paths

export const SIGN_IN = '/sign-in';
export const REGISTER = '/register';
export const FORGOT = '/forgot';
export const SET_NEW_PASS = '/set-new-pass/:token';
export const PROFILE = '/profile';

export const CARDS_TABLE = '/cards-table';
export const DECKS_TABLE = '/decks-table';

//constants for reducers

export const REGISTER_SUCCESS = 'auth/register/REGISTER-SUCCESS';
export const WAITING_FOR_RESPONSE = 'auth/register/WAITING-FOR-RESPONSE';
export const SET_ERROR_REGISTER_PAGE = 'auth/register/SET-ERROR-REGISTER-PAGE';


//constants for SignIn-page
export const SET_LOADING_DATA = 'SET-LOADING-DATA';
export const SET_SIGN_IN_FORM_VALUES = 'SET-SIGN-IN-FORM-VALUES';
export const IS_TOKEN_HAS = 'IS-TOKEN-HAS';
export const SET_ERROR_SIGN_IN_PAGE = 'SET-ERROR-SIGN-IN-PAGE';

//constants for Forgot-page
export const SET_LOADING_DATA_FORGOT_PAGE = 'SET-LOADING-DATA-FORGOT-PAGE';
export const SET_VALUE_ERROR_FORGOT_PAGE = 'SET-VALUE-ERROR-FORGOT-PAGE';
export const RESTORE_FORGOT_PASSWORD = 'RESTORE-FORGOT-PASSWORD';

//constants for SetNewPass-page
export const SET_LOADING_VALUE = 'SET-LOADING-VALUE';
export const SET_NEW_TOKEN = 'SET-NEW-TOKEN';
export const SHOW_ERROR = 'SHOW-ERROR';
export const TO_CLEAN_ERROR_FIELD = 'TO-CLEAN-ERROR-FIELD';

//constants for DecksTable

export const ADD_NEW_DECK = 'ADD-NEW-DECK';
export const DELETE_DECK = 'DELETE-DECK';
export const GET_DECKS = 'GET-DECKS';

//constants for CardsTable

export const ADD_NEW_CARD = 'ADD-NEW-CARD';
export const DELETE_CARD = 'DELETE-CARD';
