import React, {ChangeEvent, useEffect, useState} from "react";
import Input from "../../common/Input";
import Link from "../../common/LInk";
import Button from "../../common/Button";
import Title from "../../common/Title";
import styles from "../Auth.module.css";
import {authApi} from "../../../dal/api";

type OwnPropsType = {
    setSignInFormValues: (email: string, password: string, rememberMe: boolean) => void
    loading: boolean
    disabled: boolean
    error: string | null
    toCleanErrorField: () => void
}


const SignIn: React.FC<OwnPropsType> = (props) => {

    let authToken = localStorage.getItem('auth-token')
    useEffect(()=>{
        authApi.authMe(authToken)
    },[]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    //пример UseSelector Достаем данные из store
    //const valueOfInputEmail = useSelector((state: AppStoreType) => state.signIn.email);


    const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        return setEmail(e.currentTarget.value)
    }
    const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
        return setPassword(e.currentTarget.value)
    }
    const changeRememberMe = (e: ChangeEvent<HTMLInputElement>) => {
        return !rememberMe ? setRememberMe(true) : setRememberMe(false)
    }

    const sendSignInFormValues = () => {
        return (
            props.setSignInFormValues(email, password, rememberMe))
    };
    const toCleanErrorField = () => {
        return props.toCleanErrorField()
    }

    return (

        <div className={styles.wrapperOfAuth}>
            <Title title={'sign-in'}/>
            {props.loading ? <div>loading...</div> : null}
            {props.error ? <div>{props.error}</div> : null}
            <div><Input type="text"
                        placeholder='email'
                        value={email}
                        onFocus={toCleanErrorField}
                        onBlur={toCleanErrorField}
                        onChange={changeEmail}/></div>
            <div><Input type="password"
                        placeholder='password'
                        value={password}
                        onFocus={toCleanErrorField}
                        onBlur={toCleanErrorField}
                        onChange={changePassword}/></div>
            <div><Link way={'/forgot'}
                       wordOfLink={'Forgot password?'}/></div>
            <div><Input type={"checkbox"}
                        checked={rememberMe}
                        onChange={changeRememberMe}/>Remember Me
            </div>
            <div><Button typeOfButton={"button"}
                         actionOfButton={sendSignInFormValues}
                         disabled={props.disabled}
                         nameOfButton='Sign In'/></div>
            <div><Link way={'/register'} wordOfLink='Registration'/></div>
        </div>
    )

}

export default SignIn
