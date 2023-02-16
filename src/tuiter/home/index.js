import React from "react";
import getHomeItem from "./getHomeItem";
import items from "./homeItems.js"


const HomeComponent = () => {
    return (<div className="wd-home-great-container">
        {items.map((item) => getHomeItem(item))}
    </div>)
}

export default HomeComponent;
