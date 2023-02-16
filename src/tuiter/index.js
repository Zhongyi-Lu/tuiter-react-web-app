import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";

function Tuiter() {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <Routes>
                    <Route path="tuiterHome" element={<NavigationSidebar active="home"/>}/>
                    <Route path="exploreScreen" element={<NavigationSidebar active="explore"/>}/>
                </Routes>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <Routes>
                    <Route path="tuiterHome" element={<HomeComponent/>}/>
                    <Route path="exploreScreen" element={<ExploreComponent/>}/>
                </Routes>
            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white">
                <WhoToFollowList/>
            </div>
        </div>
    )
}

export default Tuiter;
