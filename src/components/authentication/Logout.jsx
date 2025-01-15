import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';
const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout actions
    onLogout(); // Notify the parent component to update state
    navigate('/login'); // Redirect to the login page
  }, [onLogout, navigate]);

  return null; // No UI needed for the logout action
};

export default Logout;
