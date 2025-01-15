import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService'; // Import loginUser from authService
import { useAuth } from './context/Context';  // Import the useAuth hook for context
import './Login.css';

const Login = () => {
  const { login } = useAuth(); // Use the login function from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // useNavigate for redirecting after login

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Use the loginUser function from authService
      const { token } = loginUser(email, password);
      login(token); // Pass the token to the context's login method to handle login
      navigate('/'); // Redirect to the homepage after successful login
    } catch (error) {
      setError(error.message); // Set error message if login fails
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}  {/* Styled error message */}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
