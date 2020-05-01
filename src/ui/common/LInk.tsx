import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Common.module.css'

const Link = (props: OwnPropsType) =>{

    return(
        <NavLink className={styles.forLinks} to={props.way}>{props.wordOfLink}</NavLink>
    )
}

export default Link

type OwnPropsType = {
    way: string,
    wordOfLink: string
}