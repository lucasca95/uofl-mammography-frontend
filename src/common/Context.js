import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from "prop-types";

const GlobalStorage = createContext();

const reducer = (state, action)=>{
    switch (action.type) {
        case "setSocket":
            return {...state, socket: action.payload};
        default:
            return state;
    }
}
const persist = (reducer) => {
    return (state, action) => {
      const newState = reducer(state, action);
      localStorage.setItem("store", JSON.stringify(newState));
      return newState;
    };
};

export const Context = ({children})=>{
    // get localStorage(store) as cache
    const cache = localStorage.getItem("store");
    // if it does not exist yet, create an empty object
    const initialState = cache ? JSON.parse(cache) : {};

    return <GlobalStorage.Provider value={useReducer(persist(reducer), initialState)}>
        {children}
    </GlobalStorage.Provider>
}

Context.propTypes = {
    children: PropTypes.element,
};

export const useStore = () =>{return useContext(GlobalStorage)};

export default useStore;