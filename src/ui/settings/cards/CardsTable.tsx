import React, {ChangeEvent, useState} from "react";
import Title from "../../common/Title";
import style from "./CardsTable.module.css";
import Input from "../../common/Input";
import Button from "../../common/Button";
import SearchContainer from "../search/SearchContainer";
import {CardsType} from "./cardsType";


type OwnPropsType = {
    cards: CardsType[]
    addNewCard: (question: string, answer: string, grade: number) => void,
    deleteACard: (id: string) => void
    updateCards: (card: CardsType) => void
}
const CardsTable: React.FC<OwnPropsType> = (props) => {

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [grade, setGrade] = useState(0);
    const [update, setUpdate] = useState(false);
    const [changeQuestion, setChangeQuestion] = useState('');
    const [changeAnswer, setChangeAnswer] = useState('');
    const [updatedCard, setUpdatedCard] = useState({});

    const textOfQuestion = (e: ChangeEvent<HTMLInputElement>) => {
        setQuestion(e.currentTarget.value)
    };
    const textOfAnswer = (e: ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.currentTarget.value)
    };
    const sendNewCard = () => {
        props.addNewCard(question, answer, grade)
    };
    const sendDeleteCard = (id: string) => {
        props.deleteACard(id)
    };
    const onUpdateCard = (card: CardsType) => {
        setUpdate(true);
        setChangeQuestion(card.question);
        setChangeAnswer(card.answer);
        setUpdatedCard(card)
    };
    const offUpdateCard = () => {
        setUpdate(false);
        const updatedCardSuccess = {...updatedCard, question: changeQuestion, answer: changeAnswer};
        props.updateCards(updatedCardSuccess as CardsType)
    };
    const onUpdateCardQuestion = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setChangeQuestion(e.currentTarget.value)
    };
    const onUpdateCardAnswer = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setChangeAnswer(e.currentTarget.value)
    };

    const increment = () => {
        setGrade(grade + 1)
    };
    const decrement = () => {
        setGrade(grade - 1)
    };

    return (
        <>
            <SearchContainer/>
            <Title title='CARDS'/>
            <table className={style.Table}>
                <tbody>
                <tr>
                    <th><Input type={"text"} value={question} placeholder={'Question'} onChange={textOfQuestion}/></th>
                    <th>Grade {' '} {grade} {' '}
                        <Button actionOfButton={increment} nameOfButton='↑' typeOfButton="button"/> {' '}
                        <Button actionOfButton={decrement} nameOfButton='↓' typeOfButton="button"/>
                    </th>
                    <th>
                        <Input type={"text"} value={answer} placeholder={'Answer'} onChange={textOfAnswer}/>{' '}
                        <Button actionOfButton={sendNewCard} nameOfButton='add' typeOfButton="button"/>
                    </th>
                </tr>
                {props.cards.map(card =>
                    <tr className={style.cells} key={card._id}>
                        <td>{card.question}{' '}</td>
                        <td>{card.grade}</td>
                        <td>{">>>>>>......<<<<<<"}{' '}
                            <Button actionOfButton={() => onUpdateCard(card)} nameOfButton='Update'
                                    typeOfButton="button"/>
                            <Button actionOfButton={
                                () => sendDeleteCard(card._id)
                            } nameOfButton='Delete'
                                    typeOfButton="button"/>

                        </td>
                    </tr>)}
                </tbody>
            </table>

            {update ?
                <div className={style.updateCard}>
                    <div className={style.fieldOfUpdate}>
                        <h1>UPDATE YOUR CARD</h1>
                        <textarea placeholder={'Question'} onChange={onUpdateCardQuestion} value={changeQuestion}/>
                        <textarea placeholder={'Answer'} onChange={onUpdateCardAnswer} value={changeAnswer}/>
                        <button onClick={offUpdateCard}>Save</button>
                        <button onClick={() => setUpdate(false)}>Cancel</button>
                    </div>
                </div> : null}
        </>
    )
};

export default CardsTable
