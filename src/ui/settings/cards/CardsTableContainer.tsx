import React from "react";
import CardsTable from "./CardsTable";
import {connect, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {addNewCard, deleteACard, updateCards} from "../../../bll/reducers/cardsTable-reducer";

type OwnPropsType = {
    addNewCard: (question: string, answer: string, grade: number)=>void,
    deleteACard: (id: string)=>void,
    updateCards: (card: any)=>void
}

const CardsTableContainer = (props: OwnPropsType) => {

const state = useSelector((state:AppStoreType) => state.cards.theCards);


    return (
            <CardsTable addNewCard={props.addNewCard}
                        deleteACard={props.deleteACard}
                        updateCards={props.updateCards}
                        cards={state}/>
    )
};

export default connect(null, {addNewCard, deleteACard, updateCards})(CardsTableContainer)

