import React from "react";
import Title from "../../common/Title";
import Input from "../../common/Input";
import Button from "../../common/Button";
import Link from "../../common/LInk";
import styles from "../Auth.module.css";


const SetNewPass = () => {
    return (

            <div className={styles.wrapperOfAuth}>
                <Title title='Set New Password'/>
                <div><Input placeholder={'new pass'}
                            type={'text'} value={''}
                            onChange={()=>{}}/></div>
                <div><Input placeholder={'repeat pass'}
                            type={'text'}
                            value={''}
                            onChange={()=>{}}/></div>
                <div><Button typeOfButton={"button"}
                             disabled={false}
                             actionOfButton={() => {
                }} nameOfButton='Set new password'/></div>
                <div><Link way={'/sign-in'} wordOfLink='Sign In'/></div>
            </div>

    )
}

export default SetNewPass
