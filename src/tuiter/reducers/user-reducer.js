import { createSlice } from "@reduxjs/toolkit";
import initUser from "../user/user.js";

const userSlice = createSlice({
    name: 'user',
    initialState: initUser,
    reducers: {
        editUser(state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.bio = action.payload.bio;
            state.location = action.payload.location;
            state.website = action.payload.website;
            state.dateOfBirth = action.payload.dateOfBirth;
            state.dateJoined = action.payload.dateJoined;
        }
    }
});

export const {editUser} = userSlice.actions;
export default userSlice.reducer;
