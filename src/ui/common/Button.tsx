import React from "react";
import styles from './Common.module.css'

type OwnPropsType = {
    typeOfButton: "button" | "submit" | "reset" | undefined,
    actionOfButton: ()=>void,
    nameOfButton: string,
    disabled?: boolean

}

const Button: React.FC<OwnPropsType> = (props: OwnPropsType) =>{

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
};

export default Button

