import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Common.module.css'

type OwnPropsType = {
    way: string,
    wordOfLink: string
}
const Link: React.FC<OwnPropsType> = (props: OwnPropsType) =>{

    return(
        <NavLink className={styles.forLinks} to={props.way}>{props.wordOfLink}</NavLink>
    )
};

export default Link

