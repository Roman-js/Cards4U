import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect, useSelector} from "react-redux";
import {approveAuth} from "../../../bll/reducers/profile-reducer";
import {addNewDeck, deleteADeck, getDecks, updateDeck} from "../../../bll/reducers/decksTable-reducer";
import {AppStoreType} from "../../../bll/store";
import {getCards} from "../../../bll/reducers/cardsTable-reducer";


type OwnPropsType = {
    approveAuth: (login: boolean) => void
    getDecks: (page: number, pageCount: number, privateDecks: boolean) => void
    getCards: (id: string) => void
    deleteADeck: (_id: string) => void
    updateDeck: (deck: any) => void
    addNewDeck: (name: string, rating: number)=>void
}

const ProfileContainer: React.FC<OwnPropsType> = (props: OwnPropsType) => {

    useEffect(() => {
        props.getDecks(1, 4, false);
        let authToken = localStorage.getItem('auth-token');
        console.log(authToken);
        const approve = !!authToken; //authToken?true:false;
        props.approveAuth(approve);
    }, []);

    const nextPage = (page: number) => {
        page <= 1 ? props.getDecks(1, 4, false) :
            props.getDecks(page, 4, false)
    };

    const myDecks = () => {
        props.getDecks(1, 4, true)
    };

    const allDecks = () => {
        props.getDecks(1, 4, false)
    };


    const decks = useSelector((state: AppStoreType) => state.decks.decks);


    return <Profile decks={decks}
                    nextPage={nextPage}
                    myDecks={myDecks}
                    allDecks={allDecks}
                    approveAuth={props.approveAuth}
                    getCards={props.getCards}
                    deleteADeck={props.deleteADeck}
                    addNewDeck={props.addNewDeck}
                    updateDeck={props.updateDeck}/>
};

export default connect(null, {
    approveAuth,
    getDecks,
    getCards,
    deleteADeck,
    updateDeck,
    addNewDeck
})(ProfileContainer)