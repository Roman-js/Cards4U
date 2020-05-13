import React, {ChangeEvent, useState} from "react";

import style from './DecksTable.module.css';
import Button from "../../common/Button";
import Input from "../../common/Input";
import Title from "../../common/Title";
import Search from "./Search/Search";

type OwnPropsType = {
    decks: any[],
    addNewDeck: (name: string) => void,
    deleteADeck: (id: number) => void
}
const DecksTable = (props: OwnPropsType) => {

    const [name, setName] = useState('');

    const nameOfNewDeck = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    };
    const sendNewDeck = () => {
        props.addNewDeck(name)
    };
    const sendDeleteDeck = (id: number) => {
        props.deleteADeck(id)
    };

    return (
        <>
            <Search/>
            <Title title='DECKS'/>
            <table className={style.Table}>
                <tr>
                    <th><Input type={"text"} value={name} placeholder={'Deck\'s name'} onChange={nameOfNewDeck}/></th>
                    <th>Rating {' '}
                        <Button actionOfButton={() => {
                        }} nameOfButton='↑' typeOfButton="button"/> {' '}
                        <Button actionOfButton={() => {
                        }} nameOfButton='↓' typeOfButton="button"/>
                    </th>
                    <th>
                        <Button actionOfButton={sendNewDeck} nameOfButton='add' typeOfButton="button"/>
                    </th>
                </tr>
                {props.decks.map(deck =>
                    <tr className={style.cells}>
                        <td>{deck.nameOfDeck}</td>
                        <td>{deck.rating}</td>
                        <td><Button actionOfButton={() => {
                        }} nameOfButton='Update' typeOfButton="button"/>
                            <Button actionOfButton={() => sendDeleteDeck(deck.id)} nameOfButton='Delete'
                                    typeOfButton="button"/>
                        </td>
                    </tr>)}

            </table>
        </>
    )
};

export default DecksTable
