import React from "react";
import Link from "../../common/LInk";
import styles from './Header.module.css'



const Header = () => {
    return (
        <div className={styles.wrapperOfHeader}>
            <Link way={'/sign-in'} wordOfLink={'sign-in'}/>
            <Link way={'/register'} wordOfLink={'register'}/>
            <Link way={'/forgot'} wordOfLink={'forgot'}/>
            <Link way={'/set-new-pass'} wordOfLink={'set-new-pass'}/>
            <Link way={'/sign-in'} wordOfLink={'neko'}/>
        </div>
    )
}
export default Header