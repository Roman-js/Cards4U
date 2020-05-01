import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tic-tic/'
})

export const authApi = {


    register(email: string, password: string){
        return instance.post('auth/register', {email, password})
            .then(res=>{return {res}})
            .catch(fal=>fal)
    },

    forgotPass(email: string, html1: string, html2: string){
        return instance.post('auth/forgot', {email, html1, html2})
            .then(res=>{return {res}})
            .catch(fal=>fal)
    },

    authMe(){
        return instance.post('auth/me', {token: ''})
            .then(res=>res)
            .catch((fal)=>{return fal})
    },

    setNewPass(resetPasswordToken: string, password: string){
        return instance.post('auth/set-new-password', {resetPasswordToken, password})
    }

}