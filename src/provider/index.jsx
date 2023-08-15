import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );

  const generateRandomToken = () => {
    const token = Math.floor(100000 + Math.random() * 900000);
    return token;
  };

  const login = () => {
    const randomToken = generateRandomToken();
    setAccessToken(randomToken);
    localStorage.setItem("accessToken", randomToken);
  };

  const logout = () => {
    setAccessToken(null);
    localStorage.removeItem("accessToken");
  };

  const contextValue = {
    accessToken,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
