// src/services/authService.js

export const LOCAL_USER = {
  username: 'Miruna',
  email: 'miry@mail.com',
  password: 'pass', // Hardcoded password for testing
};

// Function to simulate login
export const loginUser = (email, password) => {
  // Check if the provided credentials match the local hardcoded credentials
  if (email === LOCAL_USER.email && password === LOCAL_USER.password) {
    const token = 'fake-jwt-token'; // Simulated token for testing
    localStorage.setItem("authToken", token);
    return { token }; // Return token like it's coming from an API
  }
  throw new Error('Invalid credentials'); // Throw an error if credentials do not match
};

// Get the current authenticated user
export const getCurrentUser = () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    return LOCAL_USER; // Return the hardcoded user if authenticated
  }
  return null;
};

// Function to logout
export const logout = () => {
  localStorage.removeItem("authToken");
};
