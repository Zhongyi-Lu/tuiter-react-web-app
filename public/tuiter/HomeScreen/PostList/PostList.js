import posts from "../ExploreScreen/items.js";
import PostItem from "../ExploreScreen/getExploreItem.js";

const PostList = () => {
    return (`
        ${posts.map(item =>
            PostItem(item)
        ).join('')}
        
    `)
}

export default PostList;
