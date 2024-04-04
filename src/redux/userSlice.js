import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../controllers/firebase-controller';

const initialState = {
  currentUser: auth.currentUser ? auth.currentUser.toJSON() : null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
