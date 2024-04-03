import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../controllers/firebase-controller";

const initialState = {
    user: auth.currentUser ? auth.currentUser.toJSON() : null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        sliceSignin: (state, action) => {
            state.user = action.payload;
        },
        sliceSignout: (state) => {
            state.user = null;
        },
    },
});

export const { sliceSignin, sliceSignout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

