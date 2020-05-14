import React, {useEffect} from "react";
import {authApi} from "../../../dal/api";
import {connect} from "react-redux";
import {approveAuth} from "../../../bll/reducers/profile-reducer";

type OwnPropsType = {
    approveAuth: ()=>void
}

const Profile = (props:OwnPropsType) => {

    props.approveAuth()


    return (

        <div>
             <h1>Profile page</h1>
            {/*//!authToken? <Redirect to={SIGN_IN}/>:<div></div>*/}
            {/*    // <Redirect to={SIGN_IN}/>}*/}
        </div>
    )
}

export default connect(null, {approveAuth})(Profile)
