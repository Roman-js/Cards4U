import React, {useEffect} from "react";
import DecksTable from "./DecksTable";
import {connect, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {addNewDeck, deleteADeck, getDecks, updateDeck} from "../../../bll/reducers/decksTable-reducer";
import {getCards} from "../../../bll/reducers/cardsTable-reducer";
import {CardsPackUpdateType} from "./decksType";

type OwnPropsType = {
    addNewDeck: (name: string, rating: number)=>void,
    deleteADeck: (id: string)=>void,
    getDecks: ()=>void,
    getCards: (id:string)=>void,
    updateDeck: (deck: CardsPackUpdateType)=>void
}

const DecksTableContainer = (props: OwnPropsType) =>{

    const state = useSelector((state: AppStoreType) => state.decks.decks);


    useEffect(() => {
        props.getDecks()
    }, []);
    //debugger
    return(
        <DecksTable decks={state}
                    addNewDeck={props.addNewDeck}
                    deleteADeck={props.deleteADeck}
                    updateDeck={props.updateDeck}
                    getCards={props.getCards}/>
    )
};

export default connect(null, {
    addNewDeck, deleteADeck, getDecks, getCards, updateDeck})(DecksTableContainer)