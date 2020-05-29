import React from "react";
import style from '../Common.module.css'


type OwnPropsType = {

    onApprove: (id: string) => void
    name: string
}

const ApproveOfDelete = (props: OwnPropsType) => {
debugger
    return (

        <div className={style.modalDeleteCard}>
            <div className={style.filedOfApproveDelete}>
                <button>Yes</button>
            </div>
        </div>
    )
};

export default ApproveOfDelete