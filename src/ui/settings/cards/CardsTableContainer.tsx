import React from "react";
import CardsTable from "./CardsTable";
import {connect, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {addNewCard, deleteACard} from "../../../bll/reducers/cardsTable-reducer";

type OwnPropsType = {
    addNewCard: (name: string)=>void,
    deleteACard: (id: string)=>void
}

const CardsTableContainer = (props: OwnPropsType) => {

const cards = useSelector((state:AppStoreType)=>state.cards.cards);

    return (
            <CardsTable addNewCard={props.addNewCard} deleteACard={props.deleteACard} cards={cards}/>
    )
};

export default connect(null, {addNewCard, deleteACard})(CardsTableContainer)

