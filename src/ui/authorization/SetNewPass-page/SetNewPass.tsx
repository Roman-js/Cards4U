import React, {ChangeEvent, useState} from "react";
import Title from "../../common/Title";
import Input from "../../common/Input";
import Button from "../../common/Button";
import Link from "../../common/LInk";
import styles from "../Auth.module.css";

type OwnPropsType = {
    setValueOfSetNewPassForm: (password: string, repeatPassword: string) => void
    error: string
    loading: boolean | null
    disabled: boolean
    toCleanErrorField: ()=>void
}

const SetNewPass = (props: OwnPropsType) => {

    const [newPass, setNewPass] = useState('');
    const [repeatNewPass, setRepeatNewPass] = useState('');

    const valueOfInputNewPass = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPass(e.currentTarget.value)
    };
    const valueOfInputRepeatPass = (e: ChangeEvent<HTMLInputElement>) => {
        setRepeatNewPass(e.currentTarget.value)
    };
    const sendToCheckPassword = () => {
        props.setValueOfSetNewPassForm(newPass, repeatNewPass)
        setNewPass('');
        setRepeatNewPass('');
    };
    const toCleanField = () =>{
        props.toCleanErrorField()
    }

    return (
        <div className={styles.wrapperOfAuth}>
            <Title title='Set New Password'/>
            {props.error?<div>{props.error}</div>:null}
            {props.loading?<div>Loading...</div>:null}
            <div><Input placeholder={'new pass'}
                        type={'password'}
                        value={newPass}
                        onBlur={toCleanField}
                        onFocus={toCleanField}
                        onChange={valueOfInputNewPass}/></div>
            <div><Input placeholder={'repeat pass'}
                        type={'password'}
                        value={repeatNewPass}
                        onBlur={toCleanField}
                        onFocus={toCleanField}
                        onChange={valueOfInputRepeatPass}/></div>
            <div><Button typeOfButton={"button"}
                         disabled={props.disabled}
                         actionOfButton={sendToCheckPassword
                         } nameOfButton='Set new password'/></div>
            <div><Link way={'/sign-in'} wordOfLink='Sign In'/></div>
        </div>
    )
}

export default SetNewPass