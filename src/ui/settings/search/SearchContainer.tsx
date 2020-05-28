import React from "react";
import {connect, useSelector} from "react-redux";
import {setSearchName} from "./../../../bll/reducers/searchReducer"
import Search from "./Search";
import {AppStoreType} from "../../../bll/store";

const SearchContainer = () => {

    const minValue = useSelector((state:AppStoreType) => state.search.minValue)
    const maxValue = useSelector((state:AppStoreType) => state.search.maxValue)

    return (
        <Search setSearchName={setSearchName} minValue={minValue} maxValue={maxValue}/>
    )
}

export default connect(null, {setSearchName})(SearchContainer)
