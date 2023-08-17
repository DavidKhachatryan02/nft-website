import { useState } from 'react';
import { AuthContext } from '../contexts';
import { generateRandomToken } from '../utils/index.js';

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));

  const login = () => {
    const randomToken = generateRandomToken();
    setAccessToken(randomToken);
    localStorage.setItem('accessToken', randomToken);
  };

  const logout = () => {
    setAccessToken(null);
    localStorage.removeItem('accessToken');
  };

  const contextValue = {
    login,
    logout,
    accessToken,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};


export { AuthProvider };
