import React, { createContext, useContext, useState } from 'react';
import { getCurrentUser, logout as logoutService } from '../../services/authService';

// Create context
const AuthContext = createContext();

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getCurrentUser()); // Initialize user state from localStorage
  const isLoggedIn = user !== null;  // Determine if the user is logged in

  const login = (token) => {
    setUser({ email: 'testuser@example.com' }); // Set user based on the token
    localStorage.setItem("authToken", token);
  };

  const logout = () => {
    setUser(null);
    logoutService(); // Call the service to remove the token from localStorage
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  return useContext(AuthContext); // Make sure this is exported correctly
};
