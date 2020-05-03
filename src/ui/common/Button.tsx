import React from "react";
import styles from './Common.module.css'

const Button = (props: OwnPropsType) =>{

    return(
        <button
            className={styles.forButton}
            type={props.typeOfButton}
            onClick={props.actionOfButton}
            disabled={props.disabled}
        >
            {props.nameOfButton}
        </button>
    )
}

export default Button

type OwnPropsType = {
    typeOfButton: "button" | "submit" | "reset" | undefined,
    actionOfButton: ()=>void,
    nameOfButton: string,
    disabled?: boolean

}