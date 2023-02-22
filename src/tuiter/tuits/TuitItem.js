import React from "react";
import "../home/index.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const RetweetBody = ({item}) => {
    return <div className="wd-home-sub-container-b">


        <div className="wd-home-image-box">
            <img className="wd-home-small-image" alt="small"
                 src={item.icon}/>
        </div>


        <div className="wd-home-detail-tuit">


            <div className="wd-home-sub-box-b">
                <div>
                    <div>
                        <span className="wd-home-username-text">
                            {item.userName}
                        </span>
                        <span className="wd-home-check-mark">
                            <FontAwesomeIcon icon="fa-solid fa-circle-check"/>
                        </span>
                        <span className="wd-home-userhandle-text">
                            @{item.handle} · {item.time}
                        </span>
                    </div>


                    <div className="wd-home-message-body">
                        {item.tuitBody}
                    </div>
                </div>

            </div>


        </div>
    </div>
}
const TuitItem = ({item}) => {
    return <div className="wd-home-sub-container-a">
        {item.retweetUserName !== undefined &&
            <div className="wd-home-retweet-container">
                <span className="wd-home-retweet-icon-container">
                    <FontAwesomeIcon icon="fa-solid fa-retweet"/>
                </span>
                {item.retweetUserName} Retweeted
            </div>
        }

        <div className="wd-home-sub-container-b">

            <div className="wd-home-image-box">
                <img className="wd-home-small-image" alt="small"
                     src={item.icon}/>
            </div>


            <div className="wd-home-detail-tuit">


                <div className="wd-home-sub-box-b">
                    <div>
                        <div>
                        <span className="wd-home-username-text">
                            {item.userName}
                        </span>
                            <span className="wd-home-check-mark">
                            <FontAwesomeIcon icon="fa-solid fa-circle-check"/>
                        </span>
                            <span className="wd-home-userhandle-text">
                            @{item.handle} · {item.time}
                        </span>
                        </div>

                        <div className="wd-home-three-dots">
                            <svg fill="rgb(111, 120, 128)" height="12px" width="12px" version="1.1" id="Capa_1"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 32.055 32.055">
                                <g>
                                    <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
                                    C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
                                    s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
                                    c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"/>
                                </g>
                            </svg>
                        </div>

                        <div className="wd-home-message-body">
                            {item.tuit}
                        </div>
                    </div>

                </div>

                {item.largeImage !== undefined &&
                    <div className="wd-home-sub-container-b2">
                        <img className="wd-home-large-image" src={item.largeImage} alt="large"/>

                        {item.imageTitle !== undefined ?
                            <div className="wd-home-image-after-title-box">
                                <div className="wd-home-image-title-box">
                                    {item.imageTitle !== undefined ?
                                        <div className="wd-home-image-title-text">
                                            {item.imageTitle}
                                        </div>
                                        : <div></div>
                                    }


                                    {item.imageBody !== undefined ?
                                        <div
                                            className="wd-home-image-title-text-gray">
                                            {item.imageBody}
                                        </div> : <div></div>

                                    }


                                    {item.website !== undefined ?
                                        <div className="wd-home-image-title-text-gray">
                                            <span><i className="fa-solid fa-link"></i></span>
                                            {item.website}
                                        </div>
                                        : <div></div>

                                    }
                                </div>

                            </div>
                            : <div></div>
                        }
                    </div>
                }

                {item.retweetBody !== undefined &&
                    <div className="wd-home-retweet-body-container">
                        <RetweetBody item={item.retweetBody}/>
                    </div>
                }

                <div className="wd-home-counter-container">
                    <div className="wd-home-counter-box">
                        <svg fill="rgb(111, 120, 128)" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                             className="bi bi-chat" viewBox="0 0 16 16">
                            <path
                                d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                        </svg>
                        <div className="wd-home-counter-text">
                            {item.replies}
                        </div>
                    </div>

                    <div className="wd-home-counter-box">
                        <svg width="20px" height="20px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                             strokeWidth="3" stroke="rgb(111, 120, 128)" fill="none">
                            <path d="M52.94,42.93V18.3a5.54,5.54,0,0,0-5.54-5.54H11.83"/>
                            <path d="M11.83,20.14V44.77a5.54,5.54,0,0,0,5.54,5.54H52.94"/>
                            <polyline points="4.15 26.39 12.09 20.14 19.51 26.88"/>
                            <polyline points="60.36 36.12 52.91 42.94 45 36.76"/>
                        </svg>

                        <div className="wd-home-counter-text">
                            {item.retuits}
                        </div>
                    </div>

                    <div className="wd-home-counter-box">
                        <svg fill="#6f787f" height="16px" width="16px" version="1.1" id="Capa_1"
                             xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                             viewBox="0 0 471.701 471.701" xmlSpace="preserve">
                            <g>
                                <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
                                    c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
                                    l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
                                    C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
                                    s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
                                    c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
                                    C444.801,187.101,434.001,213.101,414.401,232.701z"/>
                            </g>
                        </svg>

                        <i className="fa-regular fa-heart"></i>
                        <div className="wd-home-counter-text">
                            {item.likes}
                        </div>
                    </div>

                    <div className="wd-home-counter-box">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 6L12 3M12 3L9 6M12 3V15M16 10H17C18.1046 10 19 10.8954 19 12V18C19 19.1046 18.1046 20 17 20H7C5.89543 20 5 19.1046 5 18V12C5 10.8954 5.89543 10 7 10H8"
                                stroke="#6f787f" strokeWidth="1" strokeLinecap="round"
                                strokeLinejoin="round"/>
                        </svg>
                    </div>

                </div>

                {item.showThisThread &&
                    <div>
                        <a href="#/" className="wd-home-show-this-thread">Show this thread</a>
                    </div>
                }
            </div>
        </div>
    </div>

}

export default TuitItem;
