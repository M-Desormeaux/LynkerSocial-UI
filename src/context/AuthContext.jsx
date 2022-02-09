import React, { createContext, useState } from "react";

// check context
const AuthContext = createContext(undefined);

// update context
const AuthDispach = createContext(undefined);

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState({ isLoggedIn: false });
  return (
    <AuthContext.Provider value={isAuth}>
      <AuthDispach.Provider value={setIsAuth}>{children}</AuthDispach.Provider>
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthDispach, AuthProvider };
