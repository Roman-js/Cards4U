import React, {ChangeEvent, useState} from "react";
import Title from "../../common/Title";
import Button from "../../common/Button";
import Link from "../../common/LInk";
import Input from "../../common/Input";
import styles from '../Auth.module.css'

type OwnPropsType = {
    setForgotPassword: (email: string) => void
    toCleanError: () => void
    loading: boolean
    disabled: boolean
    error: string | null
}
const Forgot = (props: OwnPropsType) => {

    const [email, setEmail] = useState('');

    const valueOfInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    };
    const restoreForgotPassword =  () => {
         props.setForgotPassword(email);
        setEmail('')
    };
    const toCleanError = () => {
         props.toCleanError()
    };

    return (

        <div className={styles.wrapperOfAuth}>
            <Title title='forgot'/>
            {props.loading ? <div>Loading...</div> : null}
            {props.error ? <div>{props.error}</div> : null}
            <div><Input placeholder='email address'
                        type={"text"}
                        value={email}
                        onBlur={toCleanError}
                        onFocus={toCleanError}
                        onChange={valueOfInputEmail}/></div>
            <div><Button typeOfButton={"button"}
                         actionOfButton={restoreForgotPassword}
                         nameOfButton='Send email'
                         disabled={props.disabled}/></div>
            <div><Link way={'/sign-in'} wordOfLink='Sign In'/></div>
        </div>

    )
}

export default Forgot