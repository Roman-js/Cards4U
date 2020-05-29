import React from "react";
import {connect, useSelector} from "react-redux";
import Search from "./Search";


const SearchContainer = () => {


    const minValue = useSelector((state:any) => state.search.minValue)
    const maxValue = useSelector((state:any) => state.search.maxValue)

    return (
        <Search minValue={minValue} maxValue={maxValue}/>
    )
}

export default SearchContainer
