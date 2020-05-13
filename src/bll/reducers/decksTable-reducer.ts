import {ADD_NEW_DECK, DELETE_DECK} from "../../ui/common/Constants";
import {ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "../store";
import {Api} from "../../dal/cardsApi";




const initialState = {
    decks: [
        {
            id: 1,
            nameOfDeck: 'React',
            rating: '3'
        },
        {
            id: 2,
            nameOfDeck: 'TypeScript',
            rating: '1'
        }
    ]
};

const decksTableReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case ADD_NEW_DECK:
            return {
                ...state,
                decks: [...state.decks, {
                    id: state.decks.length + 1,
                    nameOfDeck: action.name,
                    rating: '1'
                }]
            };

        case DELETE_DECK:
            return {
                ...state, decks: state.decks.filter(deck=>deck.id !== action.id)
            }

        default:
            return state

    }
};

export default decksTableReducer

//thunks
export const addNewDeck = (name: string) =>
    async (dispatch: ThunkDispatch<AppStoreType, {}, any>,
           getState: AppStoreType) =>{
        dispatch({type: ADD_NEW_DECK, name});
        try {
            await Api.addDeck(name)
        }
        catch (e) {
            console.log(e)
        }
    };

export const deleteADeck = (id: number) =>
    async (dispatch: ThunkDispatch<AppStoreType, {}, any>,
           getState: AppStoreType) =>{
    try {
        dispatch({type: DELETE_DECK, id});
        await Api.deleteDeck(id)
    }
    catch (e) {
        console.log(e)
    }
    }