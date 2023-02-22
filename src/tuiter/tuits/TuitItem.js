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
                        <button className="wd-home-tweet-icon-button">
                            <FontAwesomeIcon icon="fa-regular fa-comment"/>
                        </button>
                        <div className="wd-home-counter-text">
                            {item.replies}
                        </div>
                    </div>

                    <div className="wd-home-counter-box" style={{color: item.retuited ? '#00b97f' : 'inherent'}}>
                        <FontAwesomeIcon icon="fa-solid fa-retweet"/>
                        <div className="wd-home-counter-text">
                            {item.retuits}
                        </div>
                    </div>

                    <div className="wd-home-counter-box" style={{color: item.liked ? '#fc217f' : 'inherent'}}>
                        {item.liked ?
                            <FontAwesomeIcon icon="fa-solid fa-heart"/>
                            : <FontAwesomeIcon icon="fa-regular fa-heart"/>
                        }
                        <div className="wd-home-counter-text">
                            {item.likes}
                        </div>
                    </div>

                    <div className="wd-home-counter-box">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket" />
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
