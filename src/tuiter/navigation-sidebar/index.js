import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import items from "./navigationItems.js"
import getNavigationItem from "./getNavigationItem.js";

// TODO: refract this to components
const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            {items.map(item => getNavigationItem({item, isActive: active === item.hrefName}))}
        </div>
    );
};
export default NavigationSidebar;

