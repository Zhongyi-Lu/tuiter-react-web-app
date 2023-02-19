/* eslint-env jquery */
import NavigationSidebar from "../explore/NavigationSidebar/index.js";
import PostList from "./PostList/PostList.js";
import PostSummaryList from "../explore/PostSummaryList/PostSummaryList.js";

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
        icon: "fa-solid fa-hashtag",
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
            ${NavigationSidebar(navigationItems)}
        </div>
        <div class="col-10 col-lg-7 col-xl-6">
            <div class="wd-home-great-container">
                ${PostList()}
            </div>
        </div>
        <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white">
            <div class="wd-home-post-summary-list-container">
               ${PostSummaryList()}
            </div>
        </div>
    </div>


        
   `);
}

$(exploreComponent);

