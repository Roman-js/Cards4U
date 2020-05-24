import React from "react";

type OwnPropsType = {
    title: string
}

const Title: React.FC<OwnPropsType> = (props: OwnPropsType) =>{
    return(
        <div>
            <h2>{props.title}</h2>
        </div>
    )
};

export default Title

