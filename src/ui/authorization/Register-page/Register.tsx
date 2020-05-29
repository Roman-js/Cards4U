import React, {ChangeEvent, useState} from "react";
import Input from "../../common/Input";
import Button from "../../common/Button";
import Link from "../../common/LInk";
import Title from "../../common/Title";
import styles from "../Auth.module.css";
import {SIGN_IN} from "../../common/Constants";
import {useDispatch} from "react-redux";
import {setRegisterFormValues} from "../../../bll/reducers/register-reducer";

type OwnPropsType = {
    setRegisterFormValues: (email: string, password: string, repeatPassword: string) => void,
    loading: boolean,
    error:boolean,
    cancelErrorPosition:()=>void
}
const Register: React.FC<OwnPropsType> = ({setRegisterFormValues, loading, error, cancelErrorPosition}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    console.log(setRegisterFormValues)


    const changeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
    const changePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)
    const changeRepeatPassword = (e: ChangeEvent<HTMLInputElement>) => setRepeatPassword(e.currentTarget.value)

    const toCleanErrorField = () => {
        return cancelErrorPosition()
    }

    const sendSignInFormValues = () => setRegisterFormValues(email, password, repeatPassword)
    return (
        <div className={styles.wrapperOfAuth}>
            <Title title={'Register'}/>
            {loading && <div>wait</div>}
            {error && <label >{error}</label>}
                <div><Input placeholder={'email'}
                            type={"email"}
                            onBlur={toCleanErrorField}
                            onFocus={toCleanErrorField}
                            onChange={changeEmail}/>
                </div>
                <div><Input placeholder={'password'}
                            type={"password"}
                            onBlur={toCleanErrorField}
                            onFocus={toCleanErrorField}
                            onChange={changePassword}/>
                </div>
                <div><Input placeholder={'repeat password'}
                            type={"password"}
                            onBlur={toCleanErrorField}
                            onFocus={toCleanErrorField}
                            onChange={changeRepeatPassword}/>
                </div>
                <Button typeOfButton={"button"} actionOfButton={sendSignInFormValues} nameOfButton={'Register'}/>
            <Link way={SIGN_IN} wordOfLink='Sign In'/>
        </div>
    )
}

export default Register
