import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

export const StateContext = createContext();
export const reducer = (state, action) => {
  switch (action.type) {
    case "setToken":
      return { ...state, token: action.payload };
    case "deleteToken":
      delete state.token;
      return state;
    case "setTest":
      return { ...state, test: action.payload };
    case "clearContext":
      return { state: {} };

    default:
      return state;
  }
};

const persist = (reducer) => {
  return (state, action) => {
    const newState = reducer(state, action);
    localStorage.setItem("store", JSON.stringify(newState));
    return newState;
  };
};

export const Context = ({ children }) => {
  const cache = localStorage.getItem("store");
  const initialState = cache ? JSON.parse(cache) : {};
  return (
    <StateContext.Provider value={useReducer(persist(reducer), initialState)}>
      {children}
    </StateContext.Provider>
  );
};
Context.defaultProps = {
  children: null,
};

Context.propTypes = {
  children: PropTypes.element,
};
const useStore = () => useContext(StateContext);
// console.log(useStore);
// export const useStore = () => useContext(StateContext);
// export const useStore = useContext(StateContext);
// export default useStore;
