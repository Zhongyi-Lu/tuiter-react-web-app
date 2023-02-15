import exploreItems from "../PostSummaryList/exploreItems.js";
import postSummaryItem from "../PostSummaryList/PostSummaryItem.js";

export function exploreScreen() {
    return (`<div class="col-10 col-lg-7 col-xl-6 text-white">
        <div class="wd-exp-search-and-navigation-bar-box">
            <div class="wd-exp-search-bar">
                <div class="wd-exp-search-box">
                    <!--search icon-->
                    <label for="search-text">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24px" height="24px"
                             fill="rgb(76,82,89)" class="wd-exp-search-icon">
                            <path
                                d="M 27 9 C 17.075 9 9 17.075 9 27 C 9 36.925 17.075 45 27 45 C 31.129213 45 34.9263 43.587367 37.966797 41.240234 L 51.048828 54.322266 C 51.952828 55.226266 53.418266 55.226266 54.322266 54.322266 C 55.226266 53.418266 55.226266 51.952828 54.322266 51.048828 L 41.240234 37.966797 C 43.587367 34.9263 45 31.129213 45 27 C 45 17.075 36.925 9 27 9 z M 27 13 C 34.719 13 41 19.281 41 27 C 41 34.719 34.719 41 27 41 C 19.281 41 13 34.719 13 27 C 13 19.281 19.281 13 27 13 z"/>
                        </svg>
                    </label>

                    <input type="text" id="search-text" name="search-text"
                           placeholder="Search Tuiter" class="me-2 wd-exp-search-input">
                </div>
                <div class="ms-2 align-self-center">
                    <a href="explore-settings.html">
                        <svg fill="rgb(28,142,211)" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                             width="28px" height="28px" viewBox="0 0 45.973 45.973"
                             xml:space="preserve" class="m-3">
                        <g>
                            <g>
                                <path d="M43.454,18.443h-2.437c-0.453-1.766-1.16-3.42-2.082-4.933l1.752-1.756c0.473-0.473,0.733-1.104,0.733-1.774
                                    c0-0.669-0.262-1.301-0.733-1.773l-2.92-2.917c-0.947-0.948-2.602-0.947-3.545-0.001l-1.826,1.815
                                    C30.9,6.232,29.296,5.56,27.529,5.128V2.52c0-1.383-1.105-2.52-2.488-2.52h-4.128c-1.383,0-2.471,1.137-2.471,2.52v2.607
                                    c-1.766,0.431-3.38,1.104-4.878,1.977l-1.825-1.815c-0.946-0.948-2.602-0.947-3.551-0.001L5.27,8.205
                                    C4.802,8.672,4.535,9.318,4.535,9.978c0,0.669,0.259,1.299,0.733,1.772l1.752,1.76c-0.921,1.513-1.629,3.167-2.081,4.933H2.501
                                    C1.117,18.443,0,19.555,0,20.935v4.125c0,1.384,1.117,2.471,2.501,2.471h2.438c0.452,1.766,1.159,3.43,2.079,4.943l-1.752,1.763
                                    c-0.474,0.473-0.734,1.106-0.734,1.776s0.261,1.303,0.734,1.776l2.92,2.919c0.474,0.473,1.103,0.733,1.772,0.733
                                    s1.299-0.261,1.773-0.733l1.833-1.816c1.498,0.873,3.112,1.545,4.878,1.978v2.604c0,1.383,1.088,2.498,2.471,2.498h4.128
                                    c1.383,0,2.488-1.115,2.488-2.498v-2.605c1.767-0.432,3.371-1.104,4.869-1.977l1.817,1.812c0.474,0.475,1.104,0.735,1.775,0.735
                                    c0.67,0,1.301-0.261,1.774-0.733l2.92-2.917c0.473-0.472,0.732-1.103,0.734-1.772c0-0.67-0.262-1.299-0.734-1.773l-1.75-1.77
                                    c0.92-1.514,1.627-3.179,2.08-4.943h2.438c1.383,0,2.52-1.087,2.52-2.471v-4.125C45.973,19.555,44.837,18.443,43.454,18.443z
                                     M22.976,30.85c-4.378,0-7.928-3.517-7.928-7.852c0-4.338,3.55-7.85,7.928-7.85c4.379,0,7.931,3.512,7.931,7.85
                                    C30.906,27.334,27.355,30.85,22.976,30.85z"/>
                            </g>
                        </g>
                    </svg>
                    </a>
                </div>
            </div>

            <div class="wd-exp-tabs-container">
                <ul class="nav nav-tabs ">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="for-you.html">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
            </div>
        </div>


        <div class="wd-exp-large-picture-container">
            <img src="images/Starship-Mk1-Day.webp" width="100%">
                <div class="wd-exp-large-picture-title">
                    SpaceX's Starship
                </div>
        </div>
        ${exploreItems.map((item) => postSummaryItem(item)).join('')}
    </div>
`);
}