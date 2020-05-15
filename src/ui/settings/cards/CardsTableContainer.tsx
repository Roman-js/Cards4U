import React from "react";
import CardsTable from "./CardsTable";
import {connect, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {addNewCard, deleteACard} from "../../../bll/reducers/cardsTable-reducer";

type OwnPropsType = {
    addNewCard: (question: string, answer: string, grade: number)=>void,
    deleteACard: (id: string)=>void
}

const CardsTableContainer = (props: OwnPropsType) => {

const state = useSelector((state:AppStoreType) => state.cards.theCards);

    return (
            <CardsTable addNewCard={props.addNewCard} deleteACard={props.deleteACard} cards={state}/>
    )
};

export default connect(null, {addNewCard, deleteACard})(CardsTableContainer)

