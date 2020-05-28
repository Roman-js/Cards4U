import React from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {setSearchName} from "./../../../bll/reducers/searchReducer"
import Search from "./Search";

// type MapDispatchPropsType = {
//     setSearchName: (name: string, minValue: number, maxValue: number) => void,
//     minValue: number,
//     maxValue: number
// }

const SearchContainer = () => {

    const dispatch = useDispatch()

    const minValue = useSelector((state:any) => state.search.minValue)
    const maxValue = useSelector((state:any) => state.search.maxValue)

    return (
        <Search setSearchName={setSearchName} minValue={minValue} maxValue={maxValue}/>
    )
}

export default connect(null, {setSearchName})(SearchContainer)
