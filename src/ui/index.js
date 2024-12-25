import React, { createContext, useEffect, useReducer } from "react";

export { default as DatePicker } from "./DatePicker";

export const UiProviderContext = createContext();

const initialState = {
  activeComponent: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_ACTIVE_COMPONENT_ID":
      return { ...state, activeComponent: action.id };
    case "SET_ACTIVE_COMPONENT_NULL":
      return { ...state, activeComponent: null };
  }
}

export default function UiProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function clearActiveComponents() {
    dispatch({ type: "SET_ACTIVE_COMPONENT_NULL" });
  }

  useEffect(() => {
    document.addEventListener("click", clearActiveComponents);

    return () => document.removeEventListener("click", clearActiveComponents);
  }, []);

  return (
    <UiProviderContext.Provider value={[state, dispatch]}>
      {children}
    </UiProviderContext.Provider>
  );
}
