import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";

const ExploreComponent = () => {
    return (
        <div>
            <div className="row">
                <div className="col-11 position-relative wd-search-bar-container">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                    {/*<div className="wd-floating">*/}
                        <i className="bi bi-search wd-search-icon"/>
                    {/*</div>*/}
                </div>
                <a href="#/" className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-2 position-relative"/>
                </a>
            </div>
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <a className="nav-link active" href="#/">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/">News</a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img src="/images/spaceship.jpeg" className="w-100" alt="spaceship"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship
                </h1>
            </div>
            <PostSummaryList/>
        </div>
    );
};
export default ExploreComponent;

