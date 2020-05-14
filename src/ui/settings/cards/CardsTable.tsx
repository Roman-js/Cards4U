import React, {ChangeEvent, useState} from "react";
import Search from "../Search/Search";
import Title from "../../common/Title";
import style from "../decks/DecksTable.module.css";
import Input from "../../common/Input";
import Button from "../../common/Button";

type OwnPropsType = {
    cards: any[]
    addNewCard: (name: string)=>void,
    deleteACard: (id: string)=>void
}
const CardsTable = (props: OwnPropsType) => {

    const [name, setName] = useState('');

    const nameOfNewCard = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    };
    const sendNewCard = () => {
        props.addNewCard(name)
    };
    const sendDeleteCard = (id: string) => {
        props.deleteACard(id)
    };

    return (
        <>
            <Search />
            <Title title='DECKS'/>
            <table className={style.Table}>
                <tr>
                    <th><Input type={"text"} value={name} placeholder={'Deck\'s name'} onChange={nameOfNewCard}/></th>
                    <th>Rating {' '}
                        <Button actionOfButton={() => {
                        }} nameOfButton='↑' typeOfButton="button"/> {' '}
                        <Button actionOfButton={() => {
                        }} nameOfButton='↓' typeOfButton="button"/>
                    </th>
                    <th>
                        <Button actionOfButton={sendNewCard} nameOfButton='add' typeOfButton="button"/>
                    </th>
                </tr>
                {props.cards.map(card =>
                    <tr className={style.cells}>
                        <td>{card.nameOfDeck}</td>
                        <td>{card.rating}</td>
                        <td><Button actionOfButton={() => {
                        }} nameOfButton='Update' typeOfButton="button"/>
                            <Button actionOfButton={() => sendDeleteCard(card.id)} nameOfButton='Delete'
                                    typeOfButton="button"/>
                        </td>
                    </tr>)}

            </table>
        </>
    )
}

export default CardsTable