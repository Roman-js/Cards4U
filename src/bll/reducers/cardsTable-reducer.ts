import {ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "../store";
import {ADD_NEW_CARD, DELETE_CARD, GET_CARDS, UPDATE_CARD} from "../../ui/common/Constants";
import {cardsApi} from "../../dal/api";

const initialState = {
    theCards: [
        {
            cardsPack_id: '5ebe22ad7b58e90004b4b1e0',
            _id: '',
            question: 'something 1',
            answer: 'something else 1',
            grade: 3,
            shots: 1
        },
        {
            cardsPack_id: '5ebe22ad7b58e90004b4b1e1',
            _id: '',
            question: 'something 2',
            answer: 'something else 2',
            grade: 1,
            shots: 1
        },
        {
            cardsPack_id: '5ebe22ad7b58e90004b4b1e2',
            _id: '',
            question: 'something 3',
            answer: 'something else 3',
            grade: 4,
            shots: 1
        },
        {
            cardsPack_id: '5ebe22ad7b58e90004b4b1e3',
            _id: '',
            question: 'something 4',
            answer: 'something else 4',
            grade: 5,
            shots: 1
        },{
            cardsPack_id: '5ebe22ad7b58e90004b4b1e12',
            _id: '',
            question: 'something 5',
            answer: 'something else 5',
            grade: 2,
            shots: 1
        },

    ],
    //cardsPack_id: 'aaa'
};

type IState = typeof initialState

const cardsTableReducer = (state = initialState, action: any): IState => {

    switch (action.type) {
        case ADD_NEW_CARD:
            return {
                ...state,
                theCards: [...state.theCards, {
                    cardsPack_id: action.cardsPack_id,
                    _id: action._id,
                    answer: action.answer,
                    question: action.question,
                    grade: action.grade,
                    shots: 0
                }]
            };

        case GET_CARDS:
            return {
                ...state, theCards: action.cards
            };

        case UPDATE_CARD:
            debugger
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

        await cardsApi.addCard({
            card: {cardsPack_id: cardsPack_id, question, answer, grade},
            token: token
        })
            .then(result => {
                console.log(result);
                dispatch({type: ADD_NEW_CARD, question, answer, grade, cardsPack_id});
            })

    };

export const deleteACard = (id: string) =>
    async (dispatch: ThunkDispatch<AppStoreType, {}, any>,
           getState: AppStoreType) => {

        await cardsApi.deleteCard(id)
            .then(data => {
                const cardsPack_id = data.deletedCard._id;
                dispatch({type: DELETE_CARD, _id: cardsPack_id});
            });
    };

export const getCards = (id: string) =>
    async (dispatch: ThunkDispatch<AppStoreType, {}, any>,
           getState: AppStoreType) => {
        await cardsApi.getCards(id)
            .then(data => {
                const cards = data.cards;
                const cardsPack_id = localStorage.getItem('cardsPack_id');
                dispatch({type: GET_CARDS, cards, cardsPack_id});
            });
        try {
            console.log(initialState.theCards);
        } catch (e) {
            console.log(e)
        }
    };

export const updateCards = (card: any) =>
    async (dispatch: ThunkDispatch<AppStoreType, {}, any>,
           getState: AppStoreType) => {

        await cardsApi.updateCard(card)
            .then(updatedCard => {
                dispatch({type: UPDATE_CARD, updatedCard})
            })
    };





