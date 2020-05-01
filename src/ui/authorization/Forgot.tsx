import React from "react";
import Title from "../common/Title";
import Button from "../common/Button";
import Link from "../common/LInk";
import Input from "../common/Input";
import Header from "./Header/Header";
import styles from './Auth.module.css'


const Forgot = () => {
    return (
        <div>
            <Header/>
            <div className={styles.wrapperOfAuth}>
                <Title title='forgot'/>
                <div><Input placeholder='email address' type={"text"}/></div>
                <div><Button typeOfButton={"button"} actionOfButton={() => {
                }} nameOfButton='Send email'/></div>
                <div><Link way={'/sign-in'} wordOfLink='Sign In'/></div>
            </div>
        </div>
    )
}

export default Forgot