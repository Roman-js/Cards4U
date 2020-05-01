import React from "react";
import Link from "../../common/LInk";
import styles from './Header.module.css'
import {FORGOT, REGISTER, SET_NEW_PASS, SIGN_IN} from "../../common/Constants";



const Header = () => {
    return (
        <div className={styles.wrapperOfHeader}>
            <Link way={SIGN_IN} wordOfLink={'sign-in'}/>
            <Link way={REGISTER} wordOfLink={'register'}/>
            <Link way={FORGOT} wordOfLink={'forgot'}/>
            <Link way={SET_NEW_PASS} wordOfLink={'set-new-pass'}/>
            <Link way={SIGN_IN} wordOfLink={'neko'}/>
        </div>
    )
}
export default Header
