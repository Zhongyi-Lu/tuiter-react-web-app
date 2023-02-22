import React from "react";
import "./profile.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ProfileComponent = (user) => {
    return <div>
        <div className="wd-profile-top-bar">
            <div className="wd-profile-arrow">
                <FontAwesomeIcon icon="fa-solid fa-arrow-left"/>
            </div>
            <div>
                <div className="wd-profile-large-username">
                    Jose
                </div>
                <div className="wd-profile-top-bar-tweets">
                    6114 Tweets
                </div>
            </div>
        </div>

        <div>
            <div className="wd-profile-banner-container">
                <img src="/images/hot-Top-trending-niche-JS-Frameworks.png"
                     className="wd-profile-banner"/>
            </div>
        </div>

        <div>
            <div className="wd-profile-avatar-bar">
                <div className="wd-profile-avatar">

                </div>

                <input type="button" value="Edit profile" className="wd-profile-edit-button"/>

            </div>
        </div>

        <div>
            <div className="wd-profile-name-container">
                <div className="wd-profile-username">
                    Jose
                </div>
                <div className="wd-profile-handle">
                    @jannuzi
                </div>
            </div>

            <div className="wd-profile-description">
                Faculty, Software Engineer, AI, Space, and...
            </div>

            <div className="wd-profile-location-and-date">
                <span>
                    Boston
                </span>
                <span>
                    Born
                </span>
                <span>
                    Joined
                </span>
            </div>

            <div className="wd-profile-followings">
                <span className="wd-profile-followings-number">340</span>
                <span className="wd-profile-followings-text">Following</span>
                <span className="wd-profile-followings-number">340</span>
                <span className="wd-profile-followings-text">Following</span>
            </div>
        </div>

    </div>
}

export default ProfileComponent;
