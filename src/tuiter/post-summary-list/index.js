import summaryItems from "./summary-items.json"
import PostSummaryItem from "./post-summary-item";

export function PostSummaryList() {
    return (
        <div className="wd-post-summary-box">
            {summaryItems.map((item) => PostSummaryItem(item))}
        </div>
    );
}

export default PostSummaryList;
