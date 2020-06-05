import {ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "../store";
import {ADD_NEW_CARD, DELETE_CARD, GET_CARDS, UPDATE_CARD} from "../../ui/common/Constants";
import {cardsApi} from "../../dal/api";
import {CardsType} from "../../ui/settings/cards/cardsType";

const initialState = {
    theCards: [
        {
            cardsPack_id: '5ebe22ad7b58e90004b4b1e0',
            _id: '',
            question: 'something 1',
            answer: 'something else 1',
            grade: 3,
            shots: 1,
            token: ''
        },
    ],
};

type IState = typeof initialState

const cardsTableReducer = (state = initialState, action: any): IState => {

    switch (action.type) {
        case ADD_NEW_CARD:
            return {
                ...state,
                theCards: [...state.theCards, action.newCard]
            };

        case GET_CARDS:
            return {
                ...state, theCards: action.cards
            };

        case UPDATE_CARD:
            return {
                ...state, theCards: state.theCards.map(card => {
                    return card._id === action.updatedCard._id ? action.updatedCard : card
                })
            };

        case DELETE_CARD:
            return {
                ...state, theCards: state.theCards.filter(card => card._id !== action._id)
            };

        default:
            return state
    }
};

export default cardsTableReducer

/////////////////////////////////thunks

export const addNewCard = (question: string, answer: string, grade: number) =>
    async (dispatch: ThunkDispatch<AppStoreType, {}, any>,
           getState: AppStoreType) => {
        const token = localStorage.getItem('auth-token');
        const cardsPack_id = localStorage.getItem('cardsPack_id');

        try {
            const result = await cardsApi.addCard({
                card: {cardsPack_id: cardsPack_id, question, answer, grade},
                token: token
            });
            console.log(result);
            const newCard = {...result.newCard, token: result.token};
            dispatch({type: ADD_NEW_CARD, newCard});}

            catch (e) {
            console.log(e)
        }

    };

export const deleteACard = (id: string) =>
    async (dispatch: ThunkDispatch<AppStoreType, {}, any>,
           getState: AppStoreType) => {

        try {
            const data = await cardsApi.deleteCard(id);
            const cardsPack_id = data.deletedCard._id;
            dispatch({type: DELETE_CARD, _id: cardsPack_id});
        } catch (e) {
            console.log(e)
        }
    };

export const getCards = (id: string) =>
    async (dispatch: ThunkDispatch<AppStoreType, {}, any>,
           getState: AppStoreType) => {

        try {
            const data = await cardsApi.getCards(id);
            const cards = data.cards;
            const cardsPack_id = localStorage.getItem('cardsPack_id');
            dispatch({type: GET_CARDS, cards, cardsPack_id});
        } catch (e) {
            console.log(e)
        }
    };

export const updateCards = (card: CardsType) =>
    async (dispatch: ThunkDispatch<AppStoreType, {}, any>,
           getState: AppStoreType) => {


        try {
            const updatedCard = await cardsApi.updateCard(card);
            dispatch({type: UPDATE_CARD, updatedCard});
        } catch (e) {
            console.log(e)
        }
    };





