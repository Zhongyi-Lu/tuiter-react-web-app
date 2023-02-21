import React from "react";
import "../../App.css"

const WhoToFollowListItem = ({who}) => {
    return (
        <div className="list-group-item">
            <div className="wd-who-to-follow-sub-container">
                <img src={`/images/${who.avatarIcon}`} className="wd-right-container-icon" alt="avatar icon"/>
                <div className="justify-content-between ms-2">
                    <div className="text-nowrap wd-font-weight-bold">{who.userName}
                        <i className="fa-solid fa-circle-check"></i></div>
                    <div>@{who.handle}</div>
                </div>
                <input type="button" value="Follow" className="ms-auto w-25 wd-right-container-follow-button"/>
            </div>
        </div>);
};
export default WhoToFollowListItem;

