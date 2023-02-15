/* eslint-env jquery */
import items from "./ExploreScreen/items.js";
import getExploreItem from "./ExploreScreen/getExploreItem.js";
import NavigationSidebar from "../explore/NavigationSidebar";
import who from "../explore/WhoToFollowListItem/who.js";
import whoToFollowListItem from "../explore/WhoToFollowListItem/WhoToFollowListItem.js";

function exploreComponent() {
    $('#wd-explore').append(`
    
    <div class="row pt-3">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            <!--<h3>Navigation Sidebar</h3>-->
            ${NavigationSidebar()}
        </div>
        <div class="col-10 col-lg-7 col-xl-6">
            <div class="wd-home-great-container">
                ${items.map(item =>
                    getExploreItem(item)
                ).join('')}
            </div>
        </div>
        <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white">
            ${who.map((item) => whoToFollowListItem(item)).join('')}
        </div>
    </div>


        
   `);
}

$(exploreComponent);

