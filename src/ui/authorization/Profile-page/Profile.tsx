import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {authApi} from "../../../dal/api";


const Profile = () => {
    debugger
    // const state = useSelector((state:any)=>state.profile.authToken)
    let authToken = localStorage.getItem('auth-token')
    useEffect(()=>{

        authApi.authMe(authToken)
    },[]);
    return (

        <div></div>
    )
}

export default Profile
