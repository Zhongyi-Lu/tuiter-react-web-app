import getNavigationItem from "./getNavigationItem.js";

const items = [
    {
        name: "Home",
        href: "../HomeScreen/index.html",
        icon: "fa-solid fa-house-chimney",
        active: false,
    },
    {
        name: "Explore",
        href: "../ExploreScreen/index.html",
        icon: "fa-solid fa-house-chimney",
        active: true,
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
]


const NavigationSidebar = () => {
    return (`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i>
     </a>       
       ${items.map((item) => getNavigationItem(item)).join("")}
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;