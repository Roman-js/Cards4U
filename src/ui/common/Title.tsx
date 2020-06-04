import React from "react";
import s from './Title.module.css'

type OwnPropsType = {
    title: string
}

const Title: React.FC<OwnPropsType> = (props: OwnPropsType) =>{
    return(
        <div>
            <h2 className={s.title}>{props.title}</h2>
        </div>
    )
};

export default Title

