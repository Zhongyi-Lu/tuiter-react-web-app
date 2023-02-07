const WhoToFollowListItem = (who) => {
    return (`
        <div class="list-group-item">
            <div class="wd-who-to-follow-sub-container">
                <img src="${who.avatarIcon}" class="wd-right-container-icon">
                <div class="justify-content-between ms-2">
                    <div class="text-nowrap wd-font-weight-bold">${who.userName}
                        <i class="fa-solid fa-circle-check"></i></div>
                    <div>@${who.handle}</div>
                </div>
                <div class=" ms-auto w-25 wd-right-container-follow-button
                    ">
                    Follow
                </div>
            </div>
        </div>
 `);
}

export default WhoToFollowListItem;
