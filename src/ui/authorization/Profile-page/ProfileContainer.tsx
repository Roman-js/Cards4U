import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect, useSelector} from "react-redux";
import {approveAuth} from "../../../bll/reducers/profile-reducer";
import {getDecks} from "../../../bll/reducers/decksTable-reducer";
import {AppStoreType} from "../../../bll/store";
import {getCards} from "../../../bll/reducers/cardsTable-reducer";



type OwnPropsType = {
    approveAuth: (login: boolean)=>void
    getDecks: ()=>void
    getCards: (id:string )=>void
}

const ProfileContainer: React.FC<OwnPropsType> = (props: OwnPropsType) =>{

    useEffect(() => {
        props.getDecks();
        let authToken = localStorage.getItem('auth-token');
        console.log(authToken);
        const approve = !!authToken; //authToken?true:false;
        props.approveAuth(approve);
    }, []);



    const decks = useSelector((state: AppStoreType) => state.decks.decks);




    return <Profile decks={decks}
                    approveAuth={props.approveAuth}
                    getCards={props.getCards}/>
};

export default connect(null, {approveAuth, getDecks, getCards}) (ProfileContainer)