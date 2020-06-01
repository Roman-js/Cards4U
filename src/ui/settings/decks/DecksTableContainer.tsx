import React, {useEffect} from "react";
import DecksTable from "./DecksTable";
import {connect, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {addNewDeck, deleteADeck, getDecks, updateDeck} from "../../../bll/reducers/decksTable-reducer";
import {getCards} from "../../../bll/reducers/cardsTable-reducer";
import {CardsPackType} from "./decksType";

type OwnPropsType = {
    addNewDeck: (name: string , rating: number)=>void,
    deleteADeck: (_id: string)=>void,
    getDecks: (page: number, pageCount: number, privateDecks: boolean)=>void,
    getCards: (id:string )=>void,
    updateDeck: (deck: CardsPackType)=>void
}

const DecksTableContainer: React.FC<OwnPropsType> = (props) =>{

    const state = useSelector((state: AppStoreType) => state.decks.decks);


    useEffect(() => {
        props.getDecks(1,4, false);
    }, []);

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