import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import groupsReducer from './groupsSlice';
import userReducer from './userSlice';
import choresReducer from './choresSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    groups: groupsReducer,
    chores: choresReducer,
  },
});

const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={store}>
      <Provider store={store}>{children}</Provider>
    </StoreContext.Provider>
  );
};
