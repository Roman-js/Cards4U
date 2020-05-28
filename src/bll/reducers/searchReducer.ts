import {getDecks} from "./decksTable-reducer";
import {SET_SEARCHING_NAME} from "../../ui/common/Constants";
import {searchInitialState, setSearchingNameSuccessActionType} from "../../ui/authorization/types/searchReducerTypes";


const initialState: searchInitialState = {
    name: '',
    minValue: 0,
    maxValue: 30
};


const searchingReducer = (state = initialState, action: setSearchingNameSuccessActionType): setSearchingNameSuccessActionType => {

    switch (action.type) {
        case SET_SEARCHING_NAME: {
            debugger
            return {
                ...state,
                name: action.name,
                minValue:action.minValue,
                maxValue:action.maxValue
            }
        }
        default:
            return state

    }
};

export default searchingReducer


//action creators

export const setSearchingNameSuccess = (name: string, minValue: number, maxValue: number): setSearchingNameSuccessActionType =>
    ({type: SET_SEARCHING_NAME, name, minValue, maxValue})

//thunks

export const setSearchName = (name: string, minValue: number, maxValue: number) => (dispatch: any) => {
    dispatch(setSearchingNameSuccess(name, minValue, maxValue))
    dispatch(getDecks())
}
