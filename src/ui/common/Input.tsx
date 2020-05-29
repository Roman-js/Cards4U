import React, {ChangeEvent} from "react";
import styles from './Common.module.css'

type OwnPropsType = {
    value?: string,
    checked?: boolean,
    placeholder?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void, ////add '?' for
    type: 'text' | 'password' | 'radio' | 'checkbox' | 'email' | 'file',
    onBlur?: ()=>void,
    onFocus?: (e: React.FocusEvent)=>void


}

const Input: React.FC<OwnPropsType> = (props: OwnPropsType) => {

    return (
        <input className={styles.forInput}
               onFocus={props.onFocus}
               onBlur={props.onBlur}
               value={props.value}
               onChange={props.onChange}
               placeholder={props.placeholder}
               type={props.type}
               />

    )
};

export default Input

