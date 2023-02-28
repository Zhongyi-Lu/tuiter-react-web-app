import React from "react";
import "./profile.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const ProfileComponent = () => {
    const user = useSelector(
        (state) => state.user);

    const navigate = useNavigate();

    return <div>
        <div className="wd-profile-top-bar">
            <div className="wd-profile-arrow">
                <FontAwesomeIcon icon="fa-solid fa-arrow-left"/>
            </div>
            <div>
                <div className="wd-profile-large-username">
                    {user.firstName} {user.lastName}
                </div>
                <div className="wd-profile-top-bar-tweets">
                    {user.tweets} Tweets
                </div>
            </div>
        </div>

        <div>
            <div className="wd-profile-banner-container">
                <img src={user.profilePicture}
                     className="wd-profile-banner"/>
            </div>
        </div>

        <div>
            <div className="wd-profile-avatar-bar">
                <div>
                    <img src={user.bannerPicture} className="wd-profile-avatar"/>
                </div>

                <input type="button" value="Edit profile" className="wd-profile-edit-button"
                       onClick={() => {
                           navigate("../edit-profile");
                       }
                       }/>
            </div>
        </div>

        <div>
            <div className="wd-profile-name-container">
                <div className="wd-profile-username">
                    {user.firstName} {user.lastName}
                </div>
                <div className="wd-profile-handle">
                    @{user.handle}
                </div>
            </div>

            <div className="wd-profile-description">
                {user.bio}
            </div>

            <div className="wd-profile-location-and-date">
                <span className="wd-profile-location-and-date-subcontainer">
                    <FontAwesomeIcon icon="fa-solid fa-location-dot"
                                     className="wd-profile-location-icon"/>
                    <span className="wd-profile-location-and-date-text">
                        {user.location}
                    </span>
                </span>

                <span className="wd-profile-location-and-date-subcontainer">
                    <FontAwesomeIcon icon="fa-regular fa-calendar"
                                     className="wd-profile-location-icon"/>
                    <span className="wd-profile-location-and-date-text">
                        Born
                    </span>
                    <span className="wd-profile-location-and-date-text">
                        {user.dateOfBirth}
                </span>
                </span>

                <span className="wd-profile-location-and-date-subcontainer">
                    <FontAwesomeIcon icon="fa-solid fa-calendar-days"
                                     className="wd-profile-location-icon"/>
                    <span className="wd-profile-location-and-date-text">
                        Joined
                    </span>
                    <span className="wd-profile-location-and-date-text">
                        {user.dateJoined}
                </span>
                </span>
            </div>

            <div className="wd-profile-followings">
                <span className="wd-profile-followings-number">{user.followingCount}</span>
                <span className="wd-profile-followings-text">Following</span>
                <span className="wd-profile-followings-number">{user.followersCount}</span>
                <span className="wd-profile-followings-text">Followers</span>
            </div>
        </div>

    </div>
}

export default ProfileComponent;
