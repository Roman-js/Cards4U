import {ADD_NEW_DECK, DELETE_DECK, GET_DECKS, UPDATE_DECK} from "../../ui/common/Constants";
import {ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "../store";
import {decksApi} from "../../dal/api";
import {CardsPackType} from "../../ui/settings/decks/decksType";


const initialState = {
    decks: [
        {
            grade: 0,
            name: "7777",
            path: "/def",
            rating: 0,
            shots: 0,
            type: "pack",
            _id: "5ebd1e6d5af2c800049590de"
        }
    ]
};

const decksTableReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case ADD_NEW_DECK:
            return {
                ...state,
                decks: [...state.decks, action.newCardsPack]
            };

        case DELETE_DECK:
            return {
                ...state, decks: state.decks.filter(deck => deck._id !== action._id)
            };

        case GET_DECKS: {
            return {
                ...state, decks: action.cardPacks
            }
        }

        case UPDATE_DECK:
            return {
                ...state, decks: state.decks.map(deck => {
                    return deck._id === action.updateCardsDeck._id ? action.updateCardsDeck : deck
                })
            };

        default:
            return state
    }
};

export default decksTableReducer

////////////////////////////////////////thunks

export const addNewDeck = (name: string, rating: number) =>
    async (dispatch: ThunkDispatch<AppStoreType, {}, any>,
           getState: AppStoreType) => {

        const token = localStorage.getItem('auth-token');
        const userId = localStorage.getItem('user-id') as string;

        const response = await decksApi.addDeck({name: name, user_id: userId, rating: rating}, token);

        const newCardsPack = response.newCardsPack;
        dispatch({type: ADD_NEW_DECK, newCardsPack});
        console.log(response);
        try {
        } catch (e) {
            console.log(e.data)
        }
    };

export const deleteADeck = (_id: string) =>
    async (dispatch: ThunkDispatch<AppStoreType, {}, any>,
           getState: AppStoreType) => {

        await decksApi.deleteDeck(_id);
        dispatch({type: DELETE_DECK, _id});
        try {
        } catch (e) {
            console.log(e.data)
        }
    };

export const getDecks = () =>
    async (dispatch: ThunkDispatch<AppStoreType, {}, any>,
           getState: () => AppStoreType) => {

        const token = localStorage.getItem('auth-token');
        const {name} = getState().search;
        const {minValue, maxValue} = getState().search;

        const data = await decksApi.getDeck(token, name, minValue, maxValue);
        localStorage.removeItem('auth-token');
        localStorage.setItem('auth-token', data.token);

        const cardPacks = data.cardPacks;
        dispatch({type: GET_DECKS, cardPacks});
        try {
        } catch (e) {
            console.log(e.data)
        }
    };

export const updateDeck = (deck: CardsPackType) =>
    async (dispatch: ThunkDispatch<AppStoreType, {}, any>,
           getState: AppStoreType) => {

        const updateCardsDeck = await decksApi.updateDeck(deck);
        dispatch({type: UPDATE_DECK, updateCardsDeck});
        try {
        } catch (e) {
            console.log(e.data)
        }
    };
