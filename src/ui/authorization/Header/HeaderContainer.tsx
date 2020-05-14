import React, {useEffect, useState} from "react";
import Header from "./Header";

const HeaderContainer = () =>{


    const [login, setLogin] = useState(false);

    let authToken = localStorage.getItem('auth-token');
    useEffect(()=>{authToken?setLogin(true):setLogin(false)}, []);


    let tokenIsClear = () => {
        localStorage.removeItem('auth-token');
        localStorage.removeItem('user-id');
        setLogin(false)

    };
    return(
        <Header login={login} tokenIsClear={tokenIsClear}/>
    )
};

export default HeaderContainer
