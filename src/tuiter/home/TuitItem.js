import React from "react";
import "./index.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useDispatch} from "react-redux";
import {deleteTuit, flipLiked, flipRetweeted} from "../reducers/homeTuitsReducer.js";
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";

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
                            {item.handle} · {item.time}
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
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }

  function onClickLikedIcon(tuit) {
    // dispatch(flipLiked(id));
    const changeLikes = tuit.liked ? -1 : 1;
    dispatch(updateTuitThunk({
      ...tuit,
      liked: !tuit.liked,
      likes: tuit.likes + changeLikes,
    }))
  }

  function onClickRetweetIcon(tuit) {
    // dispatch(flipRetweeted(id));
    const changeRetweets = tuit.retuited ? -1 : 1;
    dispatch(updateTuitThunk({
      ...tuit,
      retuited: !tuit.retuited,
      retuits: tuit.retuits === undefined ? 1 : tuit.retuits + changeRetweets,
    }))
  }

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
              <i className="bi bi-x-lg float-end" role="button"
                 onClick={() => deleteTuitHandler(item._id)}></i>
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
          <div className="wd-home-counter-box" role="button">
            <div className="wd-home-tweet-icon-button">
              <FontAwesomeIcon icon="fa-regular fa-comment"/>
            </div>
            <div className="wd-home-counter-text">
              {item.replies > 0 ? item.replies : ''}
            </div>
          </div>

          <div className="wd-home-counter-box" style={{color: item.retuited ? '#00b97f' : 'black'}}
               role="button" onClick={() => onClickRetweetIcon(item)}>
            <FontAwesomeIcon icon="fa-solid fa-retweet"/>

            <div className="wd-home-counter-text">
              {item.retuits > 0 ? item.retuits : ''}
            </div>
          </div>

          <div className="wd-home-counter-box" style={{color: item.liked ? '#fc217f' : "black"}}
               role="button" onClick={() => onClickLikedIcon(item)}>
            {item.liked ?
              <FontAwesomeIcon icon="fa-solid fa-heart"/>
              : <FontAwesomeIcon icon="fa-regular fa-heart"/>
            }
            <div className="wd-home-counter-text">
              {item.likes > 0 ? item.likes : ''}
            </div>
          </div>

          <div className="wd-home-counter-box" role="button">
            <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket"/>
          </div>

        </div>

        {item.showThisThread &&
          <div>
            <a href="src/tuiter/tuits#/" className="wd-home-show-this-thread">Show this thread</a>
          </div>
        }
      </div>
    </div>
  </div>

}

export default TuitItem;
