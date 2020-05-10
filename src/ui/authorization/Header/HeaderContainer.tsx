import React, {useEffect, useState} from "react";
import Header from "./Header";

const HeaderContainer = () =>{


    const [login, setLogin] = useState(false);

    let authToken = localStorage.getItem('auth-token');
    useEffect(()=>{authToken?setLogin(true):setLogin(false)}, []);


    let tokenIsClear = () => {
        const clear = localStorage.removeItem('auth-token');
        setLogin(false)
        console.log(clear)
    };
    return(
        <Header login={login} tokenIsClear={tokenIsClear}/>
    )
};

export default HeaderContainer
