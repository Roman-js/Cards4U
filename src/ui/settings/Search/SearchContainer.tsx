import React from "react";
import {connect, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {setSearchName} from "../../../bll/reducers/searchReducer";
import Search from "./Search";

type MapDispatchPropsType = {
    setSearchName: (name:any)=>void,
}

const SearchContainer = (props: MapDispatchPropsType) =>{


    return(
        <Search setSearchName={props.setSearchName}/>
    )
}

export default connect(null, {setSearchName})(SearchContainer)
