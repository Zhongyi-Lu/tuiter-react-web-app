/* eslint-env jquery */
import items from "./ExploreScreen/items.js";
import getExploreItem from "./ExploreScreen/getExploreItem.js";

function exploreComponent() {
    $('#wd-explore').append(`

    ${items.map(item =>
        getExploreItem(item)
    ).join('')}
        
   `);
}

$(exploreComponent);
