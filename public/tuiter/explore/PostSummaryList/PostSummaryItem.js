const PostSummaryItem = (item) => {
    return (`
        <div class="wd-post-suggestion-box-d p-2">
            <div class="wd-post-text-box  m-2">
                <div class="wd-post-dark-text">
                    ${item.topic}
                </div>

                <div>
                    <span class="wd-post-white-text">${item.userName} <i class="fa-solid fa-circle-check"></i></span>
                    <span class="wd-post-dark-text">- ${item.time}
                        </span>
                </div>

                <div class="wd-post-white-text wd-post-text-box">
                    ${item.title}
                </div>

            </div>

            <div class="wd-post-flex-box-image px-2 py-2">
                <img class="wd-post-small-image" src="${item.image}">
            </div>
        </div>
 `);
}

export default PostSummaryItem;
