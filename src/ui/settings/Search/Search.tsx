import React from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Input from "../../common/Input";
import Strip from "./Strip";
import s from './Search.module.css'
import Button from "../../common/Button";
import {AppStoreType} from "../../../bll/store";
import {setSearchCard, setSearchDeck} from "../../../bll/reducers/searchReducer";

type OwnPropsType = {
    // setSearchName: (name: string, minValue: number, maxValue: number) => void,
    minValue: number,
    maxValue: number,
}

const Search: React.FC<OwnPropsType> = ({minValue, maxValue}) => {

    const id = useSelector((state: AppStoreType) => state.search.id)
    const [name, setName] = useState('')
    const [values, setValue] = useState<number[]>([minValue, maxValue])
    const handleStrip = (values: number[]) => {
        setValue(values)
    }

    const dispatch = useDispatch();
    const search = () => dispatch(setSearchDeck(name, values[0], values[1])) || dispatch(setSearchCard(id, name, values[0], values[1]))
    // const search = () => dispatch(setSearchCard(id, name, values[0], values[1]))

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
