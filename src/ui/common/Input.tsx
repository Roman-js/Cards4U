import React, {ChangeEvent} from "react";
import styles from './Common.module.css'


const Input = (props: OwnPropsType) => {

    return (
        <input className={styles.forInput}
            //onFocus={true}
            //onBlur={()=>{}}
               value={props.value}
               onChange={props.onChange}
               placeholder={props.placeholder}
               type={props.type}/>
    )
}
export default Input

type OwnPropsType = {
    value?: string
    checked?: boolean,
    placeholder?: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    type: 'text' | 'password' | 'radio' | 'checkbox'
}