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
<!--       -->
<!--        <div class="list-group-item">-->
<!--            <div class="wd-left-panel-container">-->
<!--                <div class="wd-left-panel-icon">-->
<!--                    <i class="fa-solid fa-house-chimney"></i>-->
<!--                </div>-->
<!--                <div class="d-none d-xl-block">Home</div>-->
<!--            </div>-->
<!--        </div>-->

<!--        <div class="list-group-item active">-->
<!--            <div class="wd-left-panel-container">-->
<!--                <div class="wd-left-panel-icon">-->
<!--                    <i class="fa-solid fa-hashtag"></i>-->
<!--                </div>-->
<!--                <div class="col-xl-1 d-none d-xl-block">Explore</div>-->
<!--            </div>-->
<!--        </div>-->

<!--        <div class="list-group-item">-->
<!--            <div class="wd-left-panel-container">-->
<!--                <div class="wd-left-panel-icon">-->
<!--                    <i class="fa-solid fa-bell"></i>-->
<!--                </div>-->
<!--                <div class="col-xl-1 d-none d-xl-block">Notifications</div>-->
<!--            </div>-->
<!--        </div>-->

<!--        <div class="list-group-item">-->
<!--            <div class="wd-left-panel-container">-->
<!--                <div class="wd-left-panel-icon">-->
<!--                    <i class="fa-solid fa-envelope"></i>-->
<!--                </div>-->
<!--                <div class="col-xl-1 d-none d-xl-block">Messages</div>-->
<!--            </div>-->
<!--        </div>-->

<!--        <div class="list-group-item">-->
<!--            <div class="wd-left-panel-container">-->
<!--                <div class="wd-left-panel-icon">-->
<!--                    <i class="fa-solid fa-bookmark"></i>-->
<!--                </div>-->
<!--                <div class="col-xl-1 d-none d-xl-block">Bookmarks</div>-->
<!--            </div>-->
<!--        </div>-->

<!--        <div class="list-group-item">-->
<!--            <div class="wd-left-panel-container">-->
<!--                <div class="wd-left-panel-icon">-->
<!--                    <i class="fa-solid fa-list"></i>-->
<!--                </div>-->
<!--                <div class="col-xl-1 d-none d-xl-block">Lists</div>-->
<!--            </div>-->
<!--        </div>-->

<!--        <div class="list-group-item">-->
<!--            <div class="wd-left-panel-container">-->
<!--                <div class="wd-left-panel-icon">-->
<!--                    <i class="fa-solid fa-user"></i>-->
<!--                </div>-->
<!--                <div class="col-xl-1 d-none d-xl-block">Profile</div>-->
<!--            </div>-->
<!--        </div>-->

<!--        <div class="list-group-item">-->
<!--            <div class="wd-left-panel-container">-->
<!--                <div class="wd-left-panel-icon">-->
<!--                    <i class="fa-solid fa-ellipsis"></i>-->
<!--                </div>-->
<!--                <div class="col-xl-1 d-none d-xl-block">More</div>-->
<!--            </div>-->
<!--        </div>-->
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;