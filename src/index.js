import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faBell, faBookmark,
    faCircleCheck, faEllipsis,
    faEnvelope, faFlask,
    faHashtag,
    faHouseChimney, faList,
    faRetweet, faUser
} from "@fortawesome/free-solid-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";

library.add(faCircleCheck, faRetweet, faHouseChimney, faTwitter, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faEllipsis, faFlask)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

