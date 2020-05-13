import axios from 'axios'

const instance = axios.create({
    baseURL:"https://dry-forest-56016.herokuapp.com/shop/"
});

export const Api = {

    addDeck(name: string) {
        return instance.post('shop', name)
    },

    deleteDeck(id: number){
        return instance.delete('shop', )
    }
}