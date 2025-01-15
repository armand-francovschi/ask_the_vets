import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate
import { LOCAL_USER } from '../services/authService';
import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate credentials against LOCAL_USER
    if (email === LOCAL_USER.email && password === LOCAL_USER.password) {
      onLogin(); // Update parent state to mark user as logged in
      navigate('/'); // Redirect to the homepage after successful login
    } else {
      setError('Invalid email or password'); // Show error message for invalid credentials
    }
  };
  
  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
  
};

export default Login;
``
