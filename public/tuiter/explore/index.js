import NavigationSidebar from "./NavigationSidebar/index.js";
import who from "./WhoToFollowListItem/who.js";
import whoToFollowListItem from "./WhoToFollowListItem/WhoToFollowListItem.js";
import {exploreScreen} from "./ExploreScreen/ExploreComponent.js";

/* eslint-env jquery */

function exploreComponent() {
    $('#wd-explore').append(`
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
   <!--<h3>Navigation Sidebar</h3>-->
     ${NavigationSidebar()}
   </div>
        ${exploreScreen()}
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white">
    ${who.map((item) => whoToFollowListItem(item)).join('')}
   </div>
  </div>
   `);
}


$(exploreComponent);

