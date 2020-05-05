import React from "react";
import Input from "../../common/Input";
import Button from "../../common/Button";
import Link from "../../common/LInk";
import Title from "../../common/Title";
import styles from "../Auth.module.css";
import {SIGN_IN} from "../../common/Constants";
import {useSelector, useDispatch} from "react-redux";


const Register:React.FC = () => {

    const dispatch = useDispatch()
    const header = useSelector((state:any) => state.register.header)
    return (

            <div className={styles.wrapperOfAuth}>
                <Title title={header}/>
                <div><Input placeholder={'email'} type={"text"}/></div>
                <div><Input placeholder={'password'} type={"text"}/></div>
                <div><Input placeholder={'repeat password'} type={"text"}/></div>
                <div><Button typeOfButton={"button"} actionOfButton={() => {
                }} nameOfButton={'Register'}/></div>
                <Link way={SIGN_IN} wordOfLink='Sign In'/>
            </div>

    )
}

export default Register
