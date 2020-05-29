import React from "react";
import {connect, useSelector} from "react-redux";
import {setSearchDeck} from "./../../../bll/reducers/searchReducer"
import Search from "./Search";
import {AppStoreType} from "../../../bll/store";

const SearchContainer = () => {

    const minValue = useSelector((state: AppStoreType) => state.search.minValue)
    const maxValue = useSelector((state: AppStoreType) => state.search.maxValue)
    // const id = useSelector((state: AppStoreType) => state.cards.id)


    return (
        <Search  minValue={minValue} maxValue={maxValue}/>
    )
}

export default connect(null, {setSearchDeck})(SearchContainer)
