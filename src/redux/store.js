import React from 'react';
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import groupsReducer from "./groupsSlice";
import { Provider } from 'react-redux';


export const store = configureStore({
    reducer: {
        user: userReducer,
        groups: groupsReducer,
    },
});

const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
    return (
        <StoreContext.Provider value={store}>
            <Provider store={store}>
                {children}
            </Provider>
        </StoreContext.Provider>
    );
}

