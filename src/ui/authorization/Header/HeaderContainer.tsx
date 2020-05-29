import React from "react";
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {LOGIN_SUCCESS, REDIRECT_OFF} from "../../common/Constants";

const HeaderContainer: React.FC = () =>{



    const auth = useSelector((state:AppStoreType)=>state.profile.login);
    const dispatch = useDispatch();


    let tokenIsClear = () => {
        localStorage.removeItem('auth-token');
        localStorage.removeItem('user-id');
        dispatch({type: LOGIN_SUCCESS, login: false});
        dispatch({type: REDIRECT_OFF})

    };
    return(
        <Header login={auth} tokenIsClear={tokenIsClear}/>
    )
};

export default HeaderContainer
