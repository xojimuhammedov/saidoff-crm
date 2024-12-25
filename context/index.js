import React, { useState, createContext } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [state, setState] = useState({
    sidebarOpen: true,
  });

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
