import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setSearchName} from "../../../bll/reducers/searchReducer";
import Input from "../../common/Input";
import Strip from "./Strip";
import s from './Search.module.css'
import Button from "../../common/Button";

type OwnPropsType = {
    setSearchName: (name:any)=>void,
}
const Search:React.FC<OwnPropsType> = () => {

    const [name, setName] = useState('')
    const dispatch = useDispatch();
    // const search = (minValue:number, maxValue:number) => dispatch(setRangeValue(minValue, maxValue))
    const search = () => dispatch(setSearchName(name))

    return (
        <div className={s.settings}>
            <div className={s.input}><Input type='text' onChange={e => setName(e.currentTarget.value)}/></div>
            <div className={s.strip}><Strip/></div>
            <div className={s.button}><Button actionOfButton={search} nameOfButton='Search' typeOfButton="button"/></div>
        </div>
    )
}
export default Search
