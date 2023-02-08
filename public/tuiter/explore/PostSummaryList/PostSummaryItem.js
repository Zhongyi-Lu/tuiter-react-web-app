const PostSummaryItem = (item) => {
    return (`
        <div class="wd-suggestion-box-d p-2">
            <div class="wd-text-box  m-2">
                <div class="wd-dark-text">
                    ${item.topic}
                </div>

                <div>
                    <span class="wd-black-text">${item.userName} <i class="fa-solid fa-circle-check"></i></span>
                    <span class="wd-dark-text">- ${item.time}
                        </span>
                </div>

                <div class="wd-black-text wd-text-box">
                    ${item.title}
                </div>

            </div>

            <div class="wd-flex-box-image px-2 py-2">
                <img class="wd-small-image" src="${item.image}">
            </div>
        </div>
 `);
}

export default PostSummaryItem;
