import React, {useState} from "react";
import Button from "../common/Button";
import style from './GameField.module.css'

type OwnPropsType = {
    card: any
    nextCard: ()=>void
    setGrade: (grade: number)=>void
}
const GameField = (props: OwnPropsType) => {
   const [checked, setChecked] = useState(false);


   const showAnswer = () =>{
       setChecked(true)
   };
const nextCard = () =>{
    props.nextCard()
    setChecked(false)
};


    return (
        <>

                <div className={style.gameFieldWrapper} key={props.card._id}>
                    <div className={style.cardQuestion}>
                        <span className={style.textQuestion}>{props.card.question}</span>
                    </div>
                    <Button typeOfButton={"button"} actionOfButton={showAnswer} nameOfButton='check'/>
                    <div className={checked? style.cardAnswerOn: style.cardAnswerOff} onClick={()=>setChecked(true)}>
                        <span className={style.textAnswer}>{checked ? props.card.answer: null}</span>
                    </div>

                </div>
            <div>
                <Button typeOfButton={"button"} actionOfButton={() => {props.setGrade(1)
                }} nameOfButton={"didn't know"}/>{' '}
                <Button typeOfButton={"button"} actionOfButton={() => {props.setGrade(2)
                }} nameOfButton={"forgot"}/>{' '}
                <Button typeOfButton={"button"} actionOfButton={() => {props.setGrade(3)
                }} nameOfButton={"spend a lot of time"}/>{' '}
                <Button typeOfButton={"button"} actionOfButton={() => {props.setGrade(4)
                }} nameOfButton={"mixed up"}/>{' '}
                <Button typeOfButton={"button"} actionOfButton={() => {props.setGrade(5)
                }} nameOfButton={"knew"}/>{' '}
            </div>
            <div> <Button typeOfButton={"button"} actionOfButton={nextCard} nameOfButton={"NEXT"}/></div>
        </>
    )
};

export default GameField