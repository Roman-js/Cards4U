export  type CardsType = {

    cardsPack_id: string | null
    question: string
    answer: string  //?
    grade?: number  //?
    shots?: number
    rating?: number
    type?: string
    token: string | null
    _id: string
}

export type addCardType = {
    card: {
        cardsPack_id: string | null
        question: string
        answer: string
        grade: number
    }
    token: string | null
}