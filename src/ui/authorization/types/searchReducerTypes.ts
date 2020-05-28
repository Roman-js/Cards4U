import {SET_SEARCHING_NAME} from "../../common/Constants";

export type setSearchingNameSuccessActionType = {
    type?: typeof SET_SEARCHING_NAME,
    name:string
    minValue: number,
    maxValue:number
}
export type searchInitialState = {
    name: string,
    minValue: number,
    maxValue: number
}
