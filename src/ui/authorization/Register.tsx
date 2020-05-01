import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import Link from "../common/LInk";
import Title from "../common/Title";
import styles from "./Auth.module.css";


const Register = () => {
    return (

            <div className={styles.wrapperOfAuth}>
                <Title title='register'/>
                <div><Input placeholder={'email'} type={"text"}/></div>
                <div><Input placeholder={'password'} type={"text"}/></div>
                <div><Input placeholder={'repeat password'} type={"text"}/></div>
                <div><Button typeOfButton={"button"} actionOfButton={() => {
                }} nameOfButton={'Register'}/></div>
                <Link way={'/sign-in'} wordOfLink='Sign In'/>
            </div>

    )
}

export default Register