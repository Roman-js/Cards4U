import {ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "../store";
import {ADD_NEW_CARD, ADD_NEW_DECK, DELETE_CARD, DELETE_DECK} from "../../ui/common/Constants";
import {cardsApi, decksApi} from "../../dal/api";

const initialState = {
    cards: [
        {id: ''}
    ]
}

const cardsTableReducer = (state = initialState, action: any) =>{

    switch (action.type) {
        case ADD_NEW_CARD:
            return {
                ...state,
                decks: [...state.cards, {
                    id: state.cards.length + 1,
                    nameOfCard: action.name,
                    rating: '1'
                }]
            };

        case DELETE_CARD:
            return {
                ...state, decks: state.cards.filter(card=>card.id !== action.id)
            }

        default:
            return state

    }
    };


//thunks

export const addNewCard = (name: string) =>
    async (dispatch: ThunkDispatch<AppStoreType, {}, any>,
           getState: AppStoreType) =>{
        dispatch({type: ADD_NEW_CARD, name});
        const token = localStorage.getItem('auth-token');
        const userId = localStorage.getItem('user-id');
        try {
            debugger
            await cardsApi.addCard({cardsPack_id: userId, token: token})
        }
        catch (e) {
            console.log(e)
        }
    };


export const deleteACard = (id: string) =>
    async (dispatch: ThunkDispatch<AppStoreType, {}, any>,
           getState: AppStoreType) =>{
        try {
            dispatch({type: DELETE_CARD, id});
            await cardsApi.deleteCard(id)
        }
        catch (e) {
            console.log(e)
        }
    }

export default cardsTableReducer