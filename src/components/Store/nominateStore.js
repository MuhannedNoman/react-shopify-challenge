import React, { useReducer } from "react";
export const ACTIONS = {
  ADD_NOMINATE: "addNewNominate",
  REMOVE_NOMINATE: "removeNominate",
};

const initialState = [];

export const nominateStore = React.createContext(initialState);
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_NOMINATE:
      return [...state, action.data];
    case ACTIONS.REMOVE_NOMINATE:
      return state.filter((moive) => moive.imdbID !== action.payload);
    default:
      return state;
  }
}

function NominateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <nominateStore.Provider value={{ state, dispatch }}>
      {children}
    </nominateStore.Provider>
  );
}
export default NominateProvider;
