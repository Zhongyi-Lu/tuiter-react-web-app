import {createSlice} from "@reduxjs/toolkit";
import homeTuitArray from "../tuits/homeTuits.json";

const currentUser = {
    "userName": "NASA",
    "handle": "nasa",
    "icon": "/images/nasa.jpg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "0h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const homeTuitSlice = createSlice({
    name: "homeTuit",
    initialState: homeTuitArray,
    reducers: {
        addTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        }
    }

});

export const {addTuit} = homeTuitSlice.actions;
export default homeTuitSlice.reducer;
