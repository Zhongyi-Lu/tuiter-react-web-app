import React from "react";
import "./navigation.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const getNavigationItem = ({item, isActive}) => {
    if (isActive) {
        return (
            <div className="list-group-item list-group-item-action active wd-nav-active-button-background">
                <a href={item.href} className="wd-nav-link-text-active">
                    <div className="wd-nav-left-panel-container">
                        <div className="wd-nav-left-panel-icon">
                            <FontAwesomeIcon icon={item.icon}/>
                        </div>
                        <div className="d-none d-xl-block wd-nav-link-text-active">{item.name}</div>
                    </div>
                </a>
            </div>
        )
    } else {
        return (
            <div className="wd-nav-gray-background">
                <div className="list-group-item list-group-item-action wd-nav-gray-background">
                    <a href={item.href} className="wd-nav-link-text">
                        <div className="wd-nav-left-panel-container">
                            <div className="wd-nav-left-panel-icon">
                                <FontAwesomeIcon icon={item.icon}/>
                            </div>
                            <div className="d-none d-xl-block">{item.name}</div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default getNavigationItem;
