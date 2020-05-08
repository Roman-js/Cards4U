import React, {useEffect} from "react";
import Header from "./Header";
import {authApi} from "../../../dal/api";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";

const HeaderContainer = () =>{


    let authToken = localStorage.getItem('auth-token')

   useEffect(()=>{

        authApi.authMe(authToken)
    },[]);

    return(
        <Header />
    )
};

export default HeaderContainer
