/* eslint-env jquery */
import items from "./items.js";
import exploreItem from "./exploreItem.js";

function exploreComponent() {
    $('#wd-explore').append(`

    ${items.map(item =>
        exploreItem(item)
    ).join('')}
        
   `);
}

$(exploreComponent);
