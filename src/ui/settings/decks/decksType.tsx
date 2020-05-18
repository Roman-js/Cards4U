export type CardsPackType = {
    user_id: string | null
    name?: string
    path?: string
    grade?: number
    shots?: number
    rating?: number
    type?: string
}

export type CardsPackUpdateType = {
    _id: string | null
    name?: string
    path?: string
    grade?: number
    shots?: number
    rating?: number
    type?: string
    user_id: string
}
