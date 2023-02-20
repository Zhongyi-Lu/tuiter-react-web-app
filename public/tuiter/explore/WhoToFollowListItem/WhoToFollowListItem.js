const WhoToFollowListItem = (who) => {
    return (`
        <div class="list-group-item  list-group-item-action wd-who-list-group-item">
            <div class="wd-who-sub-container">
                <img src="${who.avatarIcon}" class="wd-who-icon">
                <div class="justify-content-between ms-2">
                    <div class="text-nowrap wd-who-font-weight-bold">${who.userName}
                        <i class="fa-solid fa-circle-check"></i></div>
                    <div>@${who.handle}</div>
                </div>
                <input type="button" value="Follow" class="ms-auto w-25 wd-who-button"/>
            </div>
        </div>
 `);
}

export default WhoToFollowListItem;
