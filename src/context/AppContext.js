import React, { createContext, useContext } from 'react';

const AppContext = createContext();

export function useAppRoutes() {
  const routes = useContext(AppContext);
  return routes;
}

export function AppProvider({ children, allRoutes }) {
  return <AppContext.Provider value={allRoutes}>{children}</AppContext.Provider>;
}