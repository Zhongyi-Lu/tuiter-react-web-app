import React from "react";
import TuitsList from "./TuitsList.js";
import WhatsHappening from "./whats-happening.js";


const HomeComponent = () => {
    return (<div className="wd-home-great-container">
        <WhatsHappening/>
        <TuitsList/>
    </div>)
}

export default HomeComponent;
