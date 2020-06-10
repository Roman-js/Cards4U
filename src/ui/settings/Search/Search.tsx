import React, {useState} from "react";
import {useDispatch} from "react-redux";
import s from './Search.module.css'
import Button from "../../common/Button";
import {setSearchDeck} from "../../../bll/reducers/searchReducer";

type OwnPropsType = {
    minValue: number,
    maxValue: number
}

const Search: React.FC<OwnPropsType> = ({minValue, maxValue}) => {


    const [name, setName] = useState('');
    const [values, setValue] = useState<number[]>([minValue, maxValue]);
    const handleStrip = (values: number[]) => {
        setValue(values)
    };

    const dispatch = useDispatch();
    // const search = (minValue:number, maxValue:number) => dispatch(setRangeValue(minValue, maxValue))
    const search = () => dispatch(setSearchDeck(name, values[0], values[1]))
    //(name:string, minValue:number, maxValue:number) => dispatch(setSearchName((name, minValue, maxValue))

    return (
        <div className={s.settings}>
            <div className={s.input}><input type='text' placeholder='&#128269;' onChange={e => setName(e.currentTarget.value)}/></div>
            {/*<div className={s.strip}><Strip values={values} handleStrip={handleStrip}/></div>*/}
            <div className={s.button}><Button actionOfButton={search} nameOfButton='Search' typeOfButton="button"/>
            </div>
        </div>
    )
};
export default Search
