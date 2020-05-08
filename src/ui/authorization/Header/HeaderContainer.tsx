import React, {useEffect} from "react";
import Header from "./Header";
import {authApi} from "../../../dal/api";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";

const HeaderContainer = () =>{

    const token = useSelector((state: AppStoreType) => state.signIn.token)

   useEffect(()=>{
        authApi.authMe(token)
    },[]);

    return(
        <Header/>
    )
};

export default HeaderContainer