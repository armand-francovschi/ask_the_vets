import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the AuthContext
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext); // Hook to access auth context
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default state

  // Effect to check if a user is already logged in (from localStorage)
  useEffect(() => {
    const token = localStorage.getItem('authToken'); // Check if there's a token in localStorage
    if (token) {
      setIsLoggedIn(true); // If the token exists, the user is logged in
    }
  }, []);

  const login = () => {
    setIsLoggedIn(true); // Set logged in to true
    console.log('Logged in'); // For debugging
    // Store user data or tokens in localStorage
    localStorage.setItem('authToken', 'some-auth-token'); // Example token
  };

  const logout = () => {
    setIsLoggedIn(false); // Set logged in to false
    console.log('Logged out'); // For debugging
    // Clear user data or tokens
    localStorage.removeItem('authToken'); // Remove token from localStorage
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
