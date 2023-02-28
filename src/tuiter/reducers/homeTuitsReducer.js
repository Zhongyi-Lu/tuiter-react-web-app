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
    "retweeted": false,
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
        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },
        flipLiked(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);

            if (state[index].liked === true) {
                state[index].likes--;
            } else {
                state[index].likes++;
            }

            state[index].liked = !state[index].liked;
        },
        flipRetweeted(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);

            if (state[index].retweeted === true) {
                state[index].retuits--;
            } else {
                state[index].retuits++;
            }

            state[index].retweeted = !state[index].retweeted;
        }
    }

});

export const {addTuit, deleteTuit, flipLiked, flipRetweeted} = homeTuitSlice.actions;
export default homeTuitSlice.reducer;
