import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import Input from "../../common/Input";
import Strip from "./Strip";
import s from './Search.module.css'
import Button from "../../common/Button";
import {setSearchName} from "./../../../bll/reducers/searchReducer"

type OwnPropsType = {
    setSearchName: (name: string, minValue: number, maxValue: number) => void,
    minValue: number,
    maxValue: number
}

const Search: React.FC<OwnPropsType> = ({minValue, maxValue}) => {


    const [name, setName] = useState('')
    const [values, setValue] = useState<number[]>([minValue, maxValue])
    const handleStrip = (values: number[]) => {
        setValue(values)
    }

    const dispatch = useDispatch();
    const search = () => dispatch(setSearchName(name, values[0], values[1]))

    return (
        <div className={s.settings}>
            <div className={s.input}><Input type='text' onChange={e => setName(e.currentTarget.value)}/></div>
            <div className={s.strip}><Strip values={values} handleStrip={handleStrip}/></div>
            <div className={s.button}><Button actionOfButton={search} nameOfButton='Search' typeOfButton="button"/>
            </div>
        </div>
    )
}
export default Search
