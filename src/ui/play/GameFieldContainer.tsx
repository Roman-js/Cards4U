import React from "react";
import GameField from "./GameField";
import {AppStoreType} from "../../bll/store";
import {useSelector} from "react-redux";


const GameFieldContainer = () =>{

    const cards = useSelector((state:AppStoreType)=> state.cards.theCards);

    return (
        <GameField cards={cards}/>
    )
};

export default GameFieldContainer