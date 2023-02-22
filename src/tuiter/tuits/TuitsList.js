import React from "react";
import TuitItem from "./TuitItem.js";
import {useSelector} from "react-redux";


const TuitList = () => {
    const homeTuitArray = useSelector(
        (state) => state.homeTuits);
    return (<div className="wd-home-great-container">
        {homeTuitArray.map((item) => <TuitItem item={item}/>)}
    </div>)
}

export default TuitList;
