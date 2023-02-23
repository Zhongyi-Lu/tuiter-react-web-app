import { createSlice } from "@reduxjs/toolkit";
import initUser from "../user/user.js";

const userSlice = createSlice({
    name: 'user',
    initialState: initUser
});

export default userSlice.reducer;
