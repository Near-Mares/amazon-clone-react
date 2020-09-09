import React, { createContext, useContext, useReducer } from 'react';

//Data layer
export const StateContext = createContext();

//build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//how we use it inside a component
export const useStateValue = () => useContext(StateContext);