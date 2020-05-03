import React, {ChangeEvent, useState} from "react";
import Title from "../../common/Title";
import Button from "../../common/Button";
import Link from "../../common/LInk";
import Input from "../../common/Input";
import styles from '../Auth.module.css'

type OwnPropsType = {
    setForgotPassword: (email: string) => void
}
const Forgot = (props: OwnPropsType) => {

    const [email, setEmail] = useState('');

    const valueOfInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    };
    const restoreForgotPassword = () => {
        return props.setForgotPassword(email)
    }
    return (

        <div className={styles.wrapperOfAuth}>
            <Title title='forgot'/>
            <div><Input placeholder='email address'
                        type={"text"}
                        value={email}
                        onChange={valueOfInputEmail}/></div>
            <div><Button typeOfButton={"button"}
                         actionOfButton={restoreForgotPassword}
                         nameOfButton='Send email'
                         disabled={false}/></div>
            <div><Link way={'/sign-in'} wordOfLink='Sign In'/></div>
        </div>

    )
}

export default Forgot