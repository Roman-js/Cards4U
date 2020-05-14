import React, {useEffect} from "react";
import DecksTable from "./DecksTable";
import {connect, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {addNewDeck, deleteADeck, getDecks} from "../../../bll/reducers/decksTable-reducer";

type OwnPropsType = {
    addNewDeck: (name: string)=>void,
    deleteADeck: (id: string)=>void,
    getDecks: ()=>void
}

const DecksTableContainer = (props: OwnPropsType) =>{

    const state = useSelector((state: AppStoreType) => state.decks.decks);

    useEffect(() => {
       props.getDecks()
    }, []);
    debugger
    return(
        <DecksTable decks={state} addNewDeck={props.addNewDeck} deleteADeck={props.deleteADeck}/>
    )
};

export default connect(null, {
    addNewDeck, deleteADeck, getDecks})(DecksTableContainer)