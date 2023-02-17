import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCircleCheck, faRetweet} from "@fortawesome/free-solid-svg-icons";

library.add(faCircleCheck, faRetweet)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

