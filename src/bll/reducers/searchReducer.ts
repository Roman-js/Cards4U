import {ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "../store";
import {SearchApi} from "../../dal/api";


const initialState:any = {
    items:[],
    settings: {
        minValue: 10,
        maxValue: 300,
        name: '',
    }
};



const searchingReducer = (state = initialState, action: any): any => {

    switch (action.type) {

        case 'SET_SEARCHING_NAME': {
            debugger
            return {
                ...state,
                settings:{...state.settings, name: action.name}
            }
        }
        default:
            return state

    }
};

export default searchingReducer


//action creators

export const setSearchingNameSuccess = (name: string): any =>
    ({type: 'SET_SEARCHING_NAME', name})

const setRangeValueMinMaxSuccess = (minValue: number, maxValue: number): any => ({
    type: 'SET_RANGE_VALUE_MIN_MAX', minValue, maxValue
})

//thunks

export const setSearchName = (name: string) => (dispatch: any) => {
    debugger
    SearchApi.setSearchingName(name)
        .then((res: any) => {
            debugger
            dispatch(setSearchingNameSuccess(res.name))
        })
}
export const setRangeValue = (minValue: number, maxValue: number) => (dispatch: any): any => {
    SearchApi.setRange(minValue, maxValue)
        .then((res: any) => {
            debugger
            dispatch(setRangeValueMinMaxSuccess(minValue, maxValue))
        })
}




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
