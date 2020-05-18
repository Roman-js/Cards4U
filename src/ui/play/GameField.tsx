import React from "react";
import Button from "../common/Button";


const GameField = () =>{


    return(
        <>

            <div>question</div>
            <Button typeOfButton={"button"} actionOfButton={()=>{}} nameOfButton='check' />
            <div>answer</div>
            <div>
                <Button typeOfButton={"button"} actionOfButton={()=>{}} nameOfButton={"didn't know"}/>{' '}
                <Button typeOfButton={"button"} actionOfButton={()=>{}} nameOfButton={"forgot"}/>{' '}
                <Button typeOfButton={"button"} actionOfButton={()=>{}} nameOfButton={"spend a lot of time"}/>{' '}
                <Button typeOfButton={"button"} actionOfButton={()=>{}} nameOfButton={"mixed up"}/>{' '}
                <Button typeOfButton={"button"} actionOfButton={()=>{}} nameOfButton={"knew"}/>{' '}
                <Button typeOfButton={"button"} actionOfButton={()=>{}} nameOfButton={"NEXT"}/>
            </div>
    </>
    )
};

export default GameField