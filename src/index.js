import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faArrowLeft,
    faArrowUpFromBracket,
    faBell, faBookmark, faCalendarDays,
    faCircleCheck, faComment, faEllipsis,
    faEnvelope, faFlask,
    faHashtag, faHeart,
    faHouseChimney, faList, faLocationDot,
    faRetweet, faUser
} from "@fortawesome/free-solid-svg-icons";
import {faComment as faComment2, faHeart as faHeart2, faCalendar} from "@fortawesome/free-regular-svg-icons"
import {faTwitter} from "@fortawesome/free-brands-svg-icons";

library.add(faCircleCheck, faRetweet, faHouseChimney, faTwitter, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faEllipsis, faFlask, faComment, faComment2, faHeart, faHeart2, faArrowUpFromBracket, faArrowLeft, faLocationDot, faCalendar, faCalendarDays)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

