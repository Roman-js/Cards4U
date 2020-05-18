import axios from 'axios'
import {CardsPackType, CardsPackUpdateType} from "../ui/settings/decks/decksType";
import {CardsType} from "../ui/settings/cards/cardsType";

const instance = axios.create({
    // withCredentials: true,
    baseURL: "https://cards-nya-back.herokuapp.com/1.0/",
    //baseURL:"https://neko-cafe-back.herokuapp.com/",
});

export const authApi = {

    login(email: string, password: string, rememberMe: boolean) {
        return instance.post("auth/login", {email, password, rememberMe})
            .then(response => {
                return response.data
            })
    },

    forgotPass(email: string, html1: string, html2: string) {
        return instance.post('auth/forgot', {email, html1, html2})
            .then(res => {
                return console.log(res)
            })
        //.catch(fal=>console.log(fal))
    },

    register(email: string, password: string) {
        return instance.post('auth/register', {email, password})
            .then(res => res)
    },

    authMe(authToken: string | null) {
        //debugger
        return instance.post('auth/me', {token: authToken})
            .then(response=>{console.log(
                response.data);
                localStorage.removeItem('auth-token');
                localStorage.setItem('auth-token', response.data.token);
            })
            .catch((fal) => {
                return fal
            })
    },

    setNewPass(resetPasswordToken: string | undefined, password: string) {
        return instance.post('auth/set-new-password', {resetPasswordToken, password})
            .then(res => res)
    }
};

export const decksApi = {

    addDeck(cardsPack: CardsPackType, token: string | null) {
        return instance.post('cards/pack', {cardsPack, token})
            .then(response => {
                localStorage.removeItem('auth-token');
                localStorage.setItem('auth-token', response.data.token);
                return response.data
            })
    },
    deleteDeck(id: string) {
        const token = localStorage.getItem('auth-token');
        return instance.delete(`cards/pack?token=${token}&id=${id}`)
            .then(response=>{console.log(response)
                localStorage.removeItem('auth-token');
                localStorage.setItem('auth-token', response.data.token);
            })
    },
    getDeck(token: string | null, name:string, minValue:number, maxValue:number) {
        debugger
        return instance.get(`cards/pack?token=${token}`+(minValue && maxValue && `&min=${minValue}&max=${maxValue}`+ name && `&packName=${name}`))
            // +(name && `&packName=${name}`))
            .then(response=>{
                console.log(response.data);
                localStorage.removeItem('auth-token');
                localStorage.setItem('auth-token', response.data.token);
                return response.data
            })
    },
    updateDeck(deck: CardsPackUpdateType){
       const token =  localStorage.getItem('auth-token');
        instance.put('cards/pack', {cardsPack: deck, token})
            .then(response => {
                localStorage.removeItem('auth-token');
                localStorage.setItem('auth-token', response.data.token)
                return response.data.updatedCardsPack
            })

    }


};

export const cardsApi = {

    addCard(card: CardsType) {
        return instance.post('cards/card', card)

    },

    deleteCard(id: string) {
        return instance.delete('cards/card',)
    },

};

// export const SearchApi = {
//
//     setSearchingName(name:string){
//         debugger
//         return instance.get(name.length > 0 ? `productName=${name}&` : '')
//     },
//     setRange(minValue:number, maxValue:number){
//         return instance.get(maxValue ? `min=${minValue}&max=${maxValue}&` : '')
//     }
// }

