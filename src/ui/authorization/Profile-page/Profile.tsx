import React from "react";
import {connect} from "react-redux";
import {approveAuth} from "../../../bll/reducers/profile-reducer";

type OwnPropsType = {
    approveAuth: (login: boolean)=>void
}

const Profile: React.FC<OwnPropsType> = (props:OwnPropsType) => {

    let authToken = localStorage.getItem('auth-token');
    const approve = !!authToken; //authToken?true:false;
    props.approveAuth(approve);


    return (

        <div>
             <h1>Profile page</h1>
            {/*//!authToken? <Redirect to={SIGN_IN}/>:<div></div>*/}
            {/*    // <Redirect to={SIGN_IN}/>}*/}
        </div>
    )
};

export default connect(null, {approveAuth})(Profile)
