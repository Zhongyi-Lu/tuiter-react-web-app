import whoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowComponent = () => {
    return (`
        <div class="list-group-item">
            <div class="wd-who-title-text">
                Who to follow
            </div>
        </div>
        ${who.map((item) => whoToFollowListItem(item)).join('')}
 `);
}

export default WhoToFollowComponent;
