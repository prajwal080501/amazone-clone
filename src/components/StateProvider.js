import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); // Context for the state

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
