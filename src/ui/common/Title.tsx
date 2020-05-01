import React from "react";

const Title = (props: OwnPropsType) =>{

    return(
        <div>
            <h2>{props.title}</h2>
        </div>
    )
}

export default Title

type OwnPropsType = {
    title: string
}