import React, {useEffect} from "react";
import {authApi} from "../../../dal/api";


const Profile = () => {

    let authToken = localStorage.getItem('auth-token');
    console.log(authToken);
    useEffect(()=>{
        authApi.authMe(authToken)
    },[]);

    return (

        <div>
             <h1>Profile page</h1>
            {/*//!authToken? <Redirect to={SIGN_IN}/>:<div></div>*/}
            {/*    // <Redirect to={SIGN_IN}/>}*/}
        </div>
    )
}

export default Profile
