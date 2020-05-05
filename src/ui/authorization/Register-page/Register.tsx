import React, {ChangeEvent, useState} from "react";
import Input from "../../common/Input";
import Button from "../../common/Button";
import Link from "../../common/LInk";
import Title from "../../common/Title";
import styles from "../Auth.module.css";
import {SIGN_IN} from "../../common/Constants";
import {useSelector, useDispatch} from "react-redux";

type OwnPropsType = {
    setRegisterFormValues:(email:string, password:string) => void,
}
const Register:React.FC<OwnPropsType> = (props) => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [repeatPassword, setRepeatPassword] = useState('')


    const changeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
    const changePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)
    const changeRepeatPassword = (e: ChangeEvent<HTMLInputElement>) => setRepeatPassword(e.currentTarget.value)

    // const passwordIsTheSame = password === repeatPassword
    //     ? props.setRegisterFormValues(email, password)
    //     : alert('you should to try set password again')
    const sendSignInFormValues = () => props.setRegisterFormValues(email, password)
    // const dispatch = useDispatch()
    // const header = useSelector((state:any) => state.register.header)
    return (

            <div className={styles.wrapperOfAuth}>
                <Title title={'Register'}/>
                <div><Input placeholder={'email'} type={"email"} onChange={changeEmail}/></div>
                <div><Input placeholder={'password'} type={"password"} onChange={changePassword}/></div>
                <div><Input placeholder={'repeat password'} type={"password"} onChange={changeRepeatPassword}/></div>
                <div><Button typeOfButton={"button"} actionOfButton={sendSignInFormValues} nameOfButton={'Register'}/></div>
                <Link way={SIGN_IN} wordOfLink='Sign In'/>
            </div>
    )
}

export default Register
