import React from "react";
import CardsTable from "./CardsTable";
import {connect} from "react-redux";


const CardsTableContainer = () => {



    return (
            <CardsTable />
    )
};

export default connect(null, {})(CardsTableContainer)