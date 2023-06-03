import React, { createContext, useContext, useState } from "react";
export const AppContext = createContext();
function AppContextProvider({ children }) {
  const [pair, setPair] = useState(true);
  return (
    <div>
      <AppContext.Provider value={{ pair, setPair }}>
        {children}
      </AppContext.Provider>
    </div>
  );
}

export default AppContextProvider;
export const AppState = () => {
  return useContext(AppContext);
};
