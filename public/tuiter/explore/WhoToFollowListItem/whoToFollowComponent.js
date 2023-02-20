import whoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowComponent = () => {
    return (`
        <div class="wd-who-great-container">
            <div class="list-group-item list-group-item-action wd-who-list-group-item">
                <div class="wd-who-title-text">
                    Who to follow
                </div>
            </div>
            <div">
                ${who.map((item) => whoToFollowListItem(item)).join('')}
            </div>
        </div>
 `);
}

export default WhoToFollowComponent;
