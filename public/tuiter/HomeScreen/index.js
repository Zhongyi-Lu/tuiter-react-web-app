/* eslint-env jquery */
import items from "./ExploreScreen/items.js";
import getExploreItem from "./ExploreScreen/getExploreItem.js";
import NavigationSidebar from "../explore/NavigationSidebar";
import who from "../explore/WhoToFollowListItem/who.js";
import whoToFollowListItem from "../explore/WhoToFollowListItem/WhoToFollowListItem.js";

const navigationItems = [
    {
        name: "Home",
        href: "../HomeScreen/index.html",
        icon: "fa-solid fa-house-chimney",
        active: true,
    },
    {
        name: "Explore",
        href: "../explore/index.html",
        icon: "fa-solid fa-house-chimney",
        active: false,
    },
    {
        name: "Notifications",
        href: "#",
        icon: "fa-solid fa-bell",
        active: false,
    },
    {
        name: "Messages",
        href: "#",
        icon: "fa-solid fa-envelope",
        active: false,
    },
    {
        name: "Bookmarks",
        href: "#",
        icon: "fa-solid fa-bookmark",
        active: false,
    },
    {
        name: "Lists",
        href: "#",
        icon: "fa-solid fa-list",
        active: false,
    },
    {
        name: "Profile",
        href: "#",
        icon: "fa-solid fa-user",
        active: false,
    },
    {
        name: "More",
        href: "#",
        icon: "fa-solid fa-ellipsis",
        active: false,
    },
];

function exploreComponent() {
    $('#wd-explore').append(`
    
    <div class="row pt-3">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            <!--<h3>Navigation Sidebar</h3>-->
            ${NavigationSidebar(navigationItems)}
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

