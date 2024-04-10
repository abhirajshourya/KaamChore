import { createSlice } from '@reduxjs/toolkit';

export const choresSlice = createSlice({
  name: 'chores',
  initialState: {
    value: {},
  },
  reducers: {
    setChores: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setChores } = choresSlice.actions;
export default choresSlice.reducer;
