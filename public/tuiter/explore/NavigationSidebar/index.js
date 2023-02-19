import getNavigationItem from "./getNavigationItem.js";

const NavigationSidebar = (items) => {
    return (`
   <div class="list-group">
     <a class="list-group-item wd-nav-gray-background" href="../../index.html">
       <i class="fab fa-twitter"></i>
     </a>       
       ${items.map((item) => getNavigationItem(item)).join("")}
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill wd-nav-tweet-button">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;
