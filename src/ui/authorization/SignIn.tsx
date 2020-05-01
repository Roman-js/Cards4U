import React from "react";
import Input from "../common/Input";
import Link from "../common/LInk";
import Button from "../common/Button";
import Title from "../common/Title";
import styles from "./Auth.module.css";


const SignIn = () => {
    return (

            <div className={styles.wrapperOfAuth}>
                <Title title={'sign-in'}/>
                <div><Input type="text" placeholder='email'/></div>
                <div><Input type="password" placeholder='password'/></div>
                <div><Link way={'/forgot'} wordOfLink={'Forgot password?'}/></div>
                <div><Input placeholder={''} type={"checkbox"}/>Remember Me</div>
                <div><Button typeOfButton={"button"} actionOfButton={() => {
                }} nameOfButton='Sign In'/></div>
                <div><Link way={'/register'} wordOfLink='Registration'/></div>
            </div>

    )

}

export default SignIn