import React, {ChangeEvent, useState} from "react";
import Search from "../Search/Search";
import Title from "../../common/Title";
import style from "../decks/DecksTable.module.css";
import Input from "../../common/Input";
import Button from "../../common/Button";


type OwnPropsType = {
    cards: any[]
    addNewCard: (question: string, answer: string, grade: number)=>void,
    deleteACard: (id: string)=>void
}
const CardsTable = (props: OwnPropsType) => {

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [grade, setGrade] = useState(0);

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
    const increment = () =>{
        setGrade(grade + 1)
    };
    const decrement = () =>{
        setGrade(grade - 1)
    };

    return (
        <>
            <Search />
            <Title title='CARDS'/>
            <table className={style.Table}>
                <tr>
                    <th><Input type={"text"} value={question} placeholder={'Question'} onChange={textOfQuestion}/></th>
                    <th>Grade {' '} {grade} {' '}
                        <Button actionOfButton={ increment } nameOfButton='↑' typeOfButton="button"/> {' '}
                        <Button actionOfButton={ decrement } nameOfButton='↓' typeOfButton="button"/>
                    </th>
                    <th>
                        <Input type={"text"} value={answer} placeholder={'Answer'} onChange={textOfAnswer} />{' '}
                        <Button actionOfButton={sendNewCard} nameOfButton='add' typeOfButton="button"/>
                    </th>
                </tr>
                {props.cards.map(card =>
                    <tr className={style.cells}>
                        <td>{card.question}{' '}</td>
                        <td>{card.grade}</td>
                        <td>{card.answer}{' '}<Button actionOfButton={() => {
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