import React from "react";
import Strip from "./Strip";
import s from "./Search.module.css"
import Input from "../../common/Input";
import Button from "../../common/Button";

const Search = () => {
    return (
        <div className={s.settings}>
            <div className={s.input}><Input type='text' placeholder='Search'/></div>
            <div className={s.strip}><Strip/></div>
            <div className={s.button}><Button actionOfButton={() => {}} nameOfButton='Search' typeOfButton="button"/></div>
        </div>
    )
}
export default Search
