import React from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Input from "../../common/Input";
import Strip from "./Strip";
import Button from "../../common/Button";
import style from "./Search.module.css"
import {AppStoreType} from "../../../bll/store";
import {setSearchDeck} from "../../../bll/reducers/searchReducer";

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
    // const search = (minValue:number, maxValue:number) => dispatch(setRangeValue(minValue, maxValue))
    const search = () => dispatch(setSearchDeck(name, values[0], values[1]))
    //(name:string, minValue:number, maxValue:number) => dispatch(setSearchName((name, minValue, maxValue))

    return (
        <div className={style.settings}>
            <div className={style.input}><Input type='text' onChange={e => setName(e.currentTarget.value)}/></div>
            <div className={style.strip}><Strip values={values} handleStrip={handleStrip}/></div>
            <div className={style.button}><Button actionOfButton={search} nameOfButton='Search' typeOfButton="button"/>
            </div>
        </div>
    )
}
export default Search
