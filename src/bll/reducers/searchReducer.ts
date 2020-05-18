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

// const setRangeValueMinMaxSuccess = (minValue: number, maxValue: number): any => ({
//     type: 'SET_RANGE_VALUE_MIN_MAX', minValue, maxValue
// })

//thunks

export const setSearchName = (name: string, minValue: number, maxValue: number) => (dispatch: any) => {
    debugger
    dispatch(setSearchingNameSuccess(name, minValue, maxValue))
    dispatch(getDecks())
    // })
}
// export const setRangeValue = (minValue: number, maxValue: number) => (dispatch: any) => {
// }


// export const deleteADeck = (id: number) =>
//     async (dispatch: ThunkDispatch<AppStoreType, {}, any>,
//            getState: AppStoreType) =>{
//         try {
//             dispatch({type: DELETE_DECK, id});
//             await Api.deleteDeck(id)
//         }
//         catch (e) {
//             console.log(e)
//         }
//     }
