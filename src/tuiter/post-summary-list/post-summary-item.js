import React from "react";
import "../../App.css"

const PostSummaryItem = (item) => {
    return (
        <div className="wd-suggestion-box-d p-2">
            <div className="wd-text-box  m-2">
                <div>
                    <span className="wd-dark-text">{item.userName} <i className="fa-solid fa-circle-check"></i></span>
                    <span className="wd-dark-text"> . {item.time}
                        </span>
                </div>

                <div className="wd-black-text">
                    {item.topic}
                </div>



                <div className="wd-dark-text wd-text-box">
                    {item.title}
                </div>

            </div>

            <div className="wd-flex-box-image px-2 py-2">
                <img className="wd-small-image" src={`/images/${item.image}`}/>
            </div>
        </div>
    );
}

export default PostSummaryItem;

