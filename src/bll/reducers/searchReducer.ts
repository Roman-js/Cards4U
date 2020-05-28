import {getDecks} from "./decksTable-reducer";


const initialState: any = {
    name: '',
    minValue: 70,
    maxValue: 130
};


const searchingReducer = (state = initialState, action: any): any => {

    switch (action.type) {

        case 'SET_SEARCHING_NAME': {
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

export const setSearchingNameSuccess = (name: string, minValue: number, maxValue: number): any =>
    ({type: 'SET_SEARCHING_NAME', name, minValue, maxValue})

//thunks

export const setSearchName = (name: string, minValue: number, maxValue: number) => (dispatch: any) => {
    debugger
    dispatch(setSearchingNameSuccess(name, minValue, maxValue))
    dispatch(getDecks())
    // })
}
