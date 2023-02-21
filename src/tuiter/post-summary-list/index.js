import summaryItems from "./summary-items.json"
import PostSummaryItem from "./post-summary-item";
import {useSelector} from "react-redux";

export function PostSummaryList() {
    const postsArray = useSelector(state => state.tuits)
    return (
        <div className="wd-post-summary-box">
            {postsArray.map((item) => PostSummaryItem(item))}
        </div>
    );
}

export default PostSummaryList;
