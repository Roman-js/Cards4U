import React, {useState} from "react";
import Link from "../../common/LInk";
import styles from './Header.module.css'
import {FORGOT, PROFILE, REGISTER, SET_NEW_PASS, SIGN_IN} from "../../common/Constants";
import Button from "../../common/Button";
import {Redirect} from "react-router";


const Header = () => {

    const [login, setLogin] = useState(true);
    let tokenIsClear = () => {
        debugger
        localStorage.removeItem('auth-token');
        setLogin(false)
    };
    const newToken = () =>{
        setLogin(true)
    }
    return (
        <div className={styles.wrapperOfHeader}>
            <Link way={SIGN_IN} wordOfLink={'sign-in'}/>
            <Link way={REGISTER} wordOfLink={'register'}/>
            <Link way={FORGOT} wordOfLink={'forgot'}/>
            <Link way={SET_NEW_PASS} wordOfLink={'set-new-pass'}/>
            <Link way={PROFILE} wordOfLink={'profile'}/>
            <Button typeOfButton={'button'} actionOfButton={tokenIsClear} nameOfButton={'logout'}/>
           {/*{ login? <Button typeOfButton={'button'} actionOfButton={tokenIsClear} nameOfButton={'logout'}/>:*/}
           {/* <Button typeOfButton={'button'} actionOfButton={newToken} nameOfButton={'login'}/>}*/}
        </div>
    )
}
export default Header
