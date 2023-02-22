import {createSlice} from "@reduxjs/toolkit";
import homeTuitArray from "../tuits/homeTuits.json";

const homeTuitSlice = createSlice({
    name: "homeTuit",
    initialState: homeTuitArray,
    reducers: {
        addTuit(state, action) {
            console.log(action.payload);
            state.push({
                _id: (new Date()).getTime(),
                tuit: action.payload,
                "topic": "Space",
                "userName": "SpaceX",
                "time": "2h",
                "image": "spacex.png",
                "liked": false,
                "replies": 0,
                "retuits": 0,
                "likes": 0,
                "handle": "spacex",
                "icon": "/images/spacex.jpg",
                "retuited": false
            });
        },
    }
});

export const {addTuit} = homeTuitSlice.actions;
export default homeTuitSlice.reducer;
