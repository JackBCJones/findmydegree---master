import React, {createContext, useReducer, useContext} from 'react'

// preparing the dataLayer
export const StateContext = createContext();

// wrapping our app and providing dataLayer to all componets
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// pull the information from the data layer
export const useStateValue = () => useContext(StateContext);
