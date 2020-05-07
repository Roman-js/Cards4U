import React from "react";
import Link from "../../common/LInk";
import styles from './Header.module.css'
import {FORGOT, PROFILE, REGISTER, SET_NEW_PASS, SIGN_IN} from "../../common/Constants";
import {NavLink} from "react-router-dom";



const Header = () => {
    return (
        <div className={styles.wrapperOfHeader}>
            <Link way={SIGN_IN} wordOfLink={'sign-in'}/>
            <Link way={REGISTER} wordOfLink={'register'}/>
            <Link way={FORGOT} wordOfLink={'forgot'}/>
            <Link way={SET_NEW_PASS} wordOfLink={'set-new-pass'}/>
            <Link way={PROFILE} wordOfLink={'profile'}/>
            <NavLink to={SIGN_IN}>Logout</NavLink>
        </div>
    )
}
export default Header
