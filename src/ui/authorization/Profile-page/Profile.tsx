import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {authApi} from "../../../dal/api";
import {Redirect} from "react-router";
import {SIGN_IN} from "../../common/Constants";


const Profile = () => {

    let authToken = localStorage.getItem('auth-token');
    console.log(authToken);
    useEffect(()=>{
        authApi.authMe(authToken)
    },[]);

    return (

        <div>
            {!authToken? <Redirect to={SIGN_IN}/>:<div></div>}
        </div>
    )
}

export default Profile
