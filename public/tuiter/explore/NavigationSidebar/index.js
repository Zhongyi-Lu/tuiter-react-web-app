const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
        <div class="list-group-item">
            <div class="wd-left-panel-container">
                <div class="wd-left-panel-icon">
                    <i class="fa-solid fa-house-chimney"></i>
                </div>
                <div class="d-none d-xl-block">Home</div>
            </div>
        </div>

        <div class="list-group-item active">
            <div class="wd-left-panel-container">
                <div class="wd-left-panel-icon">
                    <i class="fa-solid fa-hashtag"></i>
                </div>
                <div class="col-xl-1 d-none d-xl-block">Explore</div>
            </div>
        </div>

        <div class="list-group-item">
            <div class="wd-left-panel-container">
                <div class="wd-left-panel-icon">
                    <i class="fa-solid fa-bell"></i>
                </div>
                <div class="col-xl-1 d-none d-xl-block">Notifications</div>
            </div>
        </div>

        <div class="list-group-item">
            <div class="wd-left-panel-container">
                <div class="wd-left-panel-icon">
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <div class="col-xl-1 d-none d-xl-block">Messages</div>
            </div>
        </div>

        <div class="list-group-item">
            <div class="wd-left-panel-container">
                <div class="wd-left-panel-icon">
                    <i class="fa-solid fa-bookmark"></i>
                </div>
                <div class="col-xl-1 d-none d-xl-block">Bookmarks</div>
            </div>
        </div>

        <div class="list-group-item">
            <div class="wd-left-panel-container">
                <div class="wd-left-panel-icon">
                    <i class="fa-solid fa-list"></i>
                </div>
                <div class="col-xl-1 d-none d-xl-block">Lists</div>
            </div>
        </div>

        <div class="list-group-item">
            <div class="wd-left-panel-container">
                <div class="wd-left-panel-icon">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="col-xl-1 d-none d-xl-block">Profile</div>
            </div>
        </div>

        <div class="list-group-item">
            <div class="wd-left-panel-container">
                <div class="wd-left-panel-icon">
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
                <div class="col-xl-1 d-none d-xl-block">More</div>
            </div>
        </div>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;