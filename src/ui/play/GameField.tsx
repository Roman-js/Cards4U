import React, {useState} from "react";
import Button from "../common/Button";

type OwnPropsType = {
    cards: any[]
}
const GameField = (props: OwnPropsType) => {

   const [checked, setChecked] = useState(false);

   const showAnswer = () =>{
       setChecked(true)
   };

    return (
        <>
            {props.cards.map(card=>{
               return <div>
                    {card.question}
                    <Button typeOfButton={"button"} actionOfButton={showAnswer} nameOfButton='check'/>
                    {checked ? card.answer: null}
                </div>
            })}

            <div>
                <Button typeOfButton={"button"} actionOfButton={() => {
                }} nameOfButton={"didn't know"}/>{' '}
                <Button typeOfButton={"button"} actionOfButton={() => {
                }} nameOfButton={"forgot"}/>{' '}
                <Button typeOfButton={"button"} actionOfButton={() => {
                }} nameOfButton={"spend a lot of time"}/>{' '}
                <Button typeOfButton={"button"} actionOfButton={() => {
                }} nameOfButton={"mixed up"}/>{' '}
                <Button typeOfButton={"button"} actionOfButton={() => {
                }} nameOfButton={"knew"}/>{' '}
                <Button typeOfButton={"button"} actionOfButton={() => {
                }} nameOfButton={"NEXT"}/>
            </div>
        </>
    )
};

export default GameField