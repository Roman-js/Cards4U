import React from "react";
import Link from "../../common/LInk";
import styles from './Header.module.css'
import {DECKS_TABLE, FORGOT, PROFILE, REGISTER, SET_NEW_PASS, SIGN_IN, UPLOAD_FILE} from "../../common/Constants";
import Button from "../../common/Button";


type OwnPropsType = {
    login: boolean,
    tokenIsClear: ()=>void
}
const Header: React.FC<OwnPropsType> = (props) => {

  const tokenIsClear = () =>{
      props.tokenIsClear();
  };


    return (
        <div className={styles.wrapperOfHeader}>
            <Link way={SIGN_IN} wordOfLink={'sign-in'}/>
            <Link way={REGISTER} wordOfLink={'register'}/>
            <Link way={FORGOT} wordOfLink={'forgot'}/>
            <Link way={SET_NEW_PASS} wordOfLink={'set-new-pass'}/>
            <Link way={PROFILE} wordOfLink={'profile'}/>
            <Link way={UPLOAD_FILE} wordOfLink={'file'}/>
            {/*<Button typeOfButton={'button'} actionOfButton={tokenIsClear} nameOfButton={'logout'}/>*/}
           { props.login? <Button typeOfButton={'button'} actionOfButton={tokenIsClear} nameOfButton={'logout'}/>:null}

        </div>
    )
};
export default Header
