import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

const Logout = ({ logout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    {
      logout(); // Call the logout function passed as a prop
      navigate('/'); // Redirect to the homepage or index page
    }
  }, [logout, navigate]);

  return (
    <div>
      <p>You have been logged out successfully!</p>
    </div>
  );
};

export default Logout;
