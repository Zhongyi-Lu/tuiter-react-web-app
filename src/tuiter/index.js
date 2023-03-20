import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import whoReducer from "./reducers/who-reducer";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import tuitsReducer from "./reducers/tuits-reducer.js";
import homeTuitsReducer from "./reducers/homeTuitsReducer.js";
import ProfileComponent from "./profile/ProfileComponent.js";
import userReducer from "./reducers/user-reducer.js";
import EditProfileComponent from "./editProfile/EditProfileComponent.js";

const store = configureStore({
  reducer: {
    who: whoReducer,
    // tuits: tuitsReducer,
    homeTuits: homeTuitsReducer,
    user: userReducer,
    tuitsData: tuitsReducer
  }
});

function Tuiter() {
  return (<Provider store={store}>
    <div className="row mt-2">
      <div className="col-2 col-md-2 col-lg-1 col-xl-2">
        <NavigationSidebar/>
      </div>
      <div className="col-10 col-md-10 col-lg-7 col-xl-6"
           style={{"position": "relative"}}>
        <Routes>
          <Route path="tuiterHome" element={<HomeComponent/>}/>
          <Route path="exploreScreen" element={<ExploreComponent/>}/>
          <Route path="profile" element={<ProfileComponent/>}/>
          <Route path="edit-profile" element={<EditProfileComponent/>}/>
        </Routes>
      </div>
      <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white">
        <WhoToFollowList/>
      </div>
    </div>
  </Provider>)
}

export default Tuiter;
