// src/components/Dashboard.js

import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      history.push('/login');  // Redirect to login if not authenticated
    } else {
      setUser(currentUser);
    }
  }, [history]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.username}!</p>
    </div>
  );
};

export default Dashboard;
