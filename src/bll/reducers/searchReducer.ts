import {getDecks} from "./decksTable-reducer";
import {SET_SEARCHING_NAME} from "../../ui/common/Constants";
import {searchInitialState, setSearchingNameSuccessActionType} from "../../ui/authorization/types/searchReducerTypes";
import {getCards} from "./cardsTable-reducer";

const initialState: searchInitialState = {
    name: '',
    minValue: 0,
    maxValue: 30
};


const searchingReducer = (state:any = initialState, action: any): any => {

    switch (action.type) {
        case SET_SEARCHING_NAME: {
            return {
                ...state,
                name: action.name,
                minValue: action.minValue,
                maxValue: action.maxValue
            }
        }
            case 'SET_SEARCHING_NAME_CARD_SUCCESS': {
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


// type ThunkType = ThunkAction<void, searchingInitialState, unknown, setSearchingNameSuccessActionType>
// type ThunkDispatchType = ThunkDispatch<searchingInitialState, unknown, setSearchingNameSuccessActionType>

//action creators

export const setSearchingNameSuccess = (name: string, minValue: number, maxValue: number): setSearchingNameSuccessActionType =>
    ({type: SET_SEARCHING_NAME, name, minValue, maxValue})
export const setSearchingNameCardSuccess = (id:string, name: string, minValue: number, maxValue: number): any =>
    ({type: 'SET_SEARCHING_NAME_CARD_SUCCESS', id, name, minValue, maxValue})

//thunks

export const setSearchDeck = (name: string, minValue: number, maxValue: number) => (dispatch: any) => {
    dispatch(setSearchingNameSuccess(name, minValue, maxValue))
    dispatch(getDecks())
}
export const setSearchCard = (id:string, name: string, minValue: number, maxValue: number) => (dispatch: any) => {
    debugger
    dispatch(setSearchingNameCardSuccess(id, name, minValue, maxValue))
    dispatch(getCards(id))
    // })
}
