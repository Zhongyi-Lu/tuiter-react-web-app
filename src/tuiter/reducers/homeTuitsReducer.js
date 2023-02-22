import {createSlice} from "@reduxjs/toolkit";
import homeTuitArray from "../tuits/homeTuits.json";

const homeTuitSlice = createSlice({
    name: "homeTuit",
    initialState: homeTuitArray,
});

export default homeTuitSlice.reducer;
