import React, { createContext, useContext, useState } from "react";

// Create auth context
const AuthContext = createContext(undefined);

// Provider wrapper pattern
export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  // pull in all states and setStates in the ctx, to be passed down
  const ctx = {
    isAuth,
    setIsAuth,
  };

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  // wee shared context
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("Auth Context isn't available, you messed up");
  }

  return ctx;
};
