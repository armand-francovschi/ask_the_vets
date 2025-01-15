import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from './context/Context';  // Import the useAuth hook for context
import './Login.css';

const Login = () => {
  const { login } = useAuth(); // Use login function from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // useNavigate for redirecting after login

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate validation of credentials (You could use the context or local storage)
    if (email === "test@example.com" && password === "password123") {
      login(); // Use context's login method to handle login
      navigate('/'); // Redirect to the homepage after successful login
    } else {
      setError('Invalid email or password'); // Set error message if login fails
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
