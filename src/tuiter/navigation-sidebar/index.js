import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item" href="#/">Tuiter</a>
            <Link to="/tuiter/tuiterHome" className={`list-group-item ${active === 'tuiterHome' ? 'active' : ''}`}>
                Home
            </Link>
            <Link to="/tuiter/exploreScreen" className={`list-group-item ${active === 'exploreScreen' ? 'active' : ''}`}>
                Explore
            </Link>
            <Link to="/" className="list-group-item">
                Labs
            </Link>
            <a href="#/" className={`list-group-item
                    ${active === 'notifications' ? 'active' : ''}`}>
                Notifications
            </a>
            <a href="#/" className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`}>
                Messages
            </a>
            <a href="#/" className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`}>
                Bookmarks
            </a>
            <a href="#/" className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`}>
                Lists
            </a>
            <a href="#/" className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`}>
                Profile
            </a>
            <a href="#/" className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}>
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;

