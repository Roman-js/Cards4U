import React, {ChangeEvent, useState} from "react";
import style from './Profile.module.css';
import Button from "../../common/Button";
import {CardsPackType} from "../../settings/decks/decksType";
import {Redirect} from "react-router";
import {CARDS_TABLE, PLAY} from "../../common/Constants";
import Title from "../../common/Title";
import SearchContainer from "../../settings/Search/SearchContainer";


type OwnPropsType = {

    decks: CardsPackType[]
    approveAuth: (login: boolean) => void
    getCards: (id: string) => void
    nextPage: (page: number) => void
    myDecks: () => void
    allDecks: () => void
    deleteADeck: (_id: string) => void
    updateDeck: (deck: any) => void
    addNewDeck: (name: string, rating: number) => void
}


const Profile: React.FC<OwnPropsType> = (props: OwnPropsType) => {


    const [toCards, setToCards] = useState(false);
    const [toPlay, setToPlay] = useState(false);
    const [update, setUpdate] = useState(false);
    const [changeName, setChangeName] = useState('');
    const [updatedDeck, setUpdatedDeck] = useState({});

    const [name, setName] = useState('');

    const [numberOfPage, setNumberOfPage] = useState(1);

    const onUpdateDeckName = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setChangeName(e.currentTarget.value)
    };
    const onUpdateDeck = (deck: CardsPackType) => {
        setUpdate(true);
        setChangeName(deck.name);
        setUpdatedDeck(deck);
    };
    const offUpdateDeck = () => {
        setUpdate(false);
        const UpdatedDeckSuccess = {...updatedDeck, name: changeName};
        props.updateDeck(UpdatedDeckSuccess)
    };
    const sendNewDeck = () => {
        props.addNewDeck(name, 0)
    };

    const increment = () => {
        setNumberOfPage(numberOfPage + 1);
        props.nextPage(numberOfPage + 1)

    };
    const decrement = () => {
        props.nextPage(numberOfPage - 1);
        numberOfPage <= 1 ? setNumberOfPage(1) : setNumberOfPage(numberOfPage - 1);
    };


    return (
        <>
            <div className={style.profileWrapper}>

                <div className={style.profilePart}>
                    <img src={'https://static.tildacdn.com/tild6564-3565-4232-b434-653536636432/avatar_OCAS.jpg'}/>
                    <div><Button typeOfButton={'button'} actionOfButton={() => {
                    }} nameOfButton='UPLOAD AVATAR'/></div>
                    <div><SearchContainer/></div>
                    <div><Button typeOfButton={'button'} actionOfButton={props.allDecks} nameOfButton='ALL DECKS'/>
                    </div>
                    <div><Button typeOfButton={'button'} actionOfButton={props.myDecks} nameOfButton='MY DECKS'/></div>


                    <div className={style.paginationButtons}>
                        <Button typeOfButton={'button'} actionOfButton={decrement} nameOfButton={'PREVIOUS'}/>{'  '}
                        <Button typeOfButton={'button'} actionOfButton={increment} nameOfButton={'NEXT'}/>
                    </div>
                </div>

                <div className={style.appPart}>
                    <div className={style.decksWrapper}>
                        <div className={style.addNewDeckField}>
                            <input className={style.inputAddDeck} value={name}
                                   onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                       setName(e.currentTarget.value)
                                   }}
                                   placeholder="Deck's name"/>
                            <Button typeOfButton={'button'}
                                    actionOfButton={sendNewDeck} nameOfButton='Create Deck'/>
                        </div>
                        {props.decks.map(deck =>
                            <div className={style.deckCover} key={deck._id}>

                                <div className={style.buttonsOfSettings}>
                                    <Button typeOfButton='button' actionOfButton={() => {
                                        props.getCards(deck._id);
                                        setToPlay(true)
                                    }} nameOfButton={'PLAY'}/>
                                    <Button typeOfButton='button' actionOfButton={() =>
                                        onUpdateDeck(deck)
                                    } nameOfButton={'UPDATE'}/>
                                </div>

                                <div className={style.buttonsOfSettings}>
                                    <Button typeOfButton='button' actionOfButton={() => {
                                        props.getCards(deck._id);
                                        setToCards(true)
                                    }
                                    } nameOfButton={'CARDS'}/>

                                    <Button typeOfButton='button' actionOfButton={() => {
                                        props.deleteADeck(deck._id);
                                    }
                                    } nameOfButton={'DELETE'}/>
                                </div>

                                <div className={style.decksName}><b>{deck.name}</b></div>
                            </div>)}
                    </div>
                </div>
                {toCards ? <Redirect to={CARDS_TABLE}/> : null}
                {toPlay ? <Redirect to={PLAY}/> : null}
                {update ?
                    <div className={style.updateCard}>
                        <div className={style.fieldOfUpdate}>
                            <Title title='UPDATE YOUR DECK'/>
                            <textarea placeholder={'Name'} onChange={onUpdateDeckName} value={changeName}/>
                            <button onClick={offUpdateDeck}>Save</button>
                            <button onClick={() => setUpdate(false)}>Cancel</button>
                        </div>
                    </div> : null}

            </div>
        </>
    )
};

export default Profile
