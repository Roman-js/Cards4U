import React, {useState} from "react";
import style from './Profile.module.css';
import Button from "../../common/Button";
import {CardsPackType} from "../../settings/decks/decksType";
import {Redirect} from "react-router";
import {CARDS_TABLE, PLAY} from "../../common/Constants";


type OwnPropsType = {

    decks: CardsPackType[]
    approveAuth: (login: boolean) => void
    getCards: (id: string) => void
    nextPage: (page: number) => void
    myDecks: ()=>void
    allDecks: ()=>void
}


const Profile: React.FC<OwnPropsType> = (props: OwnPropsType) => {


    const [toCards, setToCards] = useState(false);
    const [toPlay, setToPlay] = useState(false);

    const [numberOfPage, setNumberOfPage] = useState(1);

    const increment = () => {
        setNumberOfPage(numberOfPage+1);
        props.nextPage(numberOfPage+1)

    };
    const decrement = () => {
        props.nextPage(numberOfPage-1);
        numberOfPage<=1?setNumberOfPage(1):setNumberOfPage(numberOfPage-1);
    };


    return (

        <div className={style.profileWrapper}>
            <div className={style.profilePart}>
                <img src={'https://static.tildacdn.com/tild6564-3565-4232-b434-653536636432/avatar_OCAS.jpg'}/>
                <div><Button typeOfButton={'button'} actionOfButton={() => {
                }} nameOfButton='UPLOAD AVATAR'/></div>
                <div><Button typeOfButton={'button'} actionOfButton={props.allDecks} nameOfButton='ALL DECKS'/></div>
                <div><Button typeOfButton={'button'} actionOfButton={props.myDecks} nameOfButton='MY DECKS'/></div>

                <div className={style.paginationButtons}>
                    <Button typeOfButton={'button'} actionOfButton={decrement} nameOfButton={'PREVIOUS'}/>{'  '}
                    <Button typeOfButton={'button'} actionOfButton={increment} nameOfButton={'NEXT'}/>
                </div>

            </div>
            <div className={style.appPart}>
                <div className={style.decksWrapper}>
                    {props.decks.map(deck =>
                        <div className={style.deckCover}>
                            <Button typeOfButton='button' actionOfButton={() => {
                                props.getCards(deck._id);
                                setToPlay(true)
                            }} nameOfButton={'PLAY'}/>
                            <div><Button typeOfButton='button' actionOfButton={() => {
                                props.getCards(deck._id);
                                setToCards(true)
                            }
                            } nameOfButton={'CARDS'}/>
                            </div>
                            <div className={style.decksName}><b>{deck.name}</b></div>
                        </div>)}
                </div>
            </div>
            {toCards ? <Redirect to={CARDS_TABLE}/> : null}
            {toPlay ? <Redirect to={PLAY}/> : null}
        </div>
    )
};

export default Profile
