import React, {ChangeEvent, useState} from "react";

import style from './DecksTable.module.css';
import Button from "../../common/Button";
import Input from "../../common/Input";
import Title from "../../common/Title";
import SearchContainer from "../Search/SearchContainer";
import Link from "../../common/LInk";
import {CARDS_TABLE, PLAY} from "../../common/Constants";
import {CardsPackType} from "./decksType";


type OwnPropsType = {
    decks: CardsPackType[],
    addNewDeck: (name: string, rating: number) => void,
    deleteADeck: (_id: string) => void
    getCards: (id:string )=>void
    updateDeck: (deck: any)=>void
}
const DecksTable: React.FC<OwnPropsType> = (props) => {

    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [update, setUpdate] = useState(false);
    const [changeName, setChangeName] = useState('');
    const [updatedDeck, setUpdatedDeck] = useState({});

    const nameOfNewDeck = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    };
    const sendNewDeck = () => {
        props.addNewDeck(name, rating)
    };
    const sendDeleteDeck = (_id: string ) => {
        props.deleteADeck(_id)
    };
    const increment = () =>{
        setRating(rating + 1.0)
    };
    const decrement = () =>{
        setRating(rating -1.0)
    };
    const onUpdateDeck = (deck: any) =>{
        setUpdate(true);
        setChangeName(deck.name);
        setUpdatedDeck(deck);
    };
    const onUpdateDeckName = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        setChangeName(e.currentTarget.value)
    };
    const offUpdateDeck = () =>{
        setUpdate(false);
        const UpdatedDeckSuccess = {...updatedDeck, name: changeName};
        props.updateDeck(UpdatedDeckSuccess)

    };


    return (
        <>
            <SearchContainer/>
            <Title title='DECKS'/>
            <table className={style.Table}>
                <tbody>
                <tr>
                    <th><Input type={"text"} value={name} placeholder={'Deck\'s name'} onChange={nameOfNewDeck}/></th>
                    <th>Rating {' '} {rating} {' '}
                        <Button actionOfButton={increment} nameOfButton='↑' typeOfButton="button"/> {' '}
                        <Button actionOfButton={decrement} nameOfButton='↓' typeOfButton="button" />
                    </th>
                    <th>
                        <Button actionOfButton={sendNewDeck} nameOfButton='add' typeOfButton="button"/>
                    </th>
                </tr>
                {props.decks.map(deck =>
                    <tr className={style.cells} key={deck._id}>
                        <td>{deck.name}</td>
                        <td>{deck.rating}</td>
                        <td><Button actionOfButton={() => onUpdateDeck(deck)} nameOfButton='Update' typeOfButton="button"/>{' '}
                            <Button actionOfButton={() => sendDeleteDeck(deck._id)} nameOfButton='Delete'
                                    typeOfButton="button"/>{' '}
                            <span onClick={()=>props.getCards(deck._id)}><Link way={CARDS_TABLE} wordOfLink={'cards'}/></span>{' '}
                            <span onClick={()=>props.getCards(deck._id)}><Link way={PLAY} wordOfLink={'play'}/></span>
                        </td>
                    </tr>)}
                </tbody>
            </table>

            {update ?
                <div className={style.updateCard}>
                    <div className={style.fieldOfUpdate}>
                        <h1>UPDATE YOUR DECK</h1>
                        <textarea placeholder={'Name'} onChange={onUpdateDeckName} value={changeName}/>
                        <button onClick={offUpdateDeck}>Save</button>
                        <button onClick={()=>setUpdate(false)}>Cancel</button>
                    </div>
                </div> : null}
        </>
    )
};

export default DecksTable
