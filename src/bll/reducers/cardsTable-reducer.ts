import {ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "../store";
import {ADD_NEW_CARD, DELETE_CARD} from "../../ui/common/Constants";
import {cardsApi} from "../../dal/api";

const initialState = {
    theCards: [
        {
            cardsPack_id: '5ebe22ad7b58e90004b4b1e0',
            question: 'something',
            answer: 'something else',
            grade: 2,
        },

    ]
};

type IState = typeof initialState

//  export type cardsType = {
//      cardsPack_id: string
//      question?: string
//      answer?: string
//      grade?: number
//  }

const cardsTableReducer = (state = initialState, action: any):IState  =>{

    switch (action.type) {
        case ADD_NEW_CARD:
            debugger
            return {
                ...state,
                theCards: [...state.theCards, {
                    cardsPack_id: '5ebe22ad7b58e90004b4b1e0',
                    answer: action.answer,
                    question: action.question,
                    grade: action.grade
                }]
            };

        // case DELETE_CARD:
        //     return {
        //         ...state, decks: state.cards.filter(card=>card.id !== action.id)
        //     };

        default:
            return state

    }
    };

export default cardsTableReducer

//thunks

export const addNewCard = (question: string, answer: string, grade: number) =>
    async (dispatch: ThunkDispatch<AppStoreType, {}, any>,
           getState: AppStoreType) =>{

        const token = localStorage.getItem('auth-token');
        await cardsApi.addCard({card: {cardsPack_id: "5ebe5f4f1f24b100041aa00f", question, answer, grade},
            token: token})
        .then(result=>{
            dispatch({type: ADD_NEW_CARD, question, answer, grade, cardsPack_id: "5ebe5f4f1f24b100041aa00f"});
        })

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

