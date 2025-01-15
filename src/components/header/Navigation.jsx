import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../services/authService';

const Navigation = ({ isLoggedIn }) => {
    const navigate = useNavigate();
    const currentUser = getCurrentUser();


    return (
        <div>
            {/* Ensure this does not show up on the /login page */}
            {window.location.pathname !== '/login' && (
                <div>
                    {isLoggedIn ? (
                        // If the user is logged in, show username and logout button
                        <div>
                            <h2 className="welcome-text">Welcome, {currentUser?.username}</h2> {/* Display the username */}
                            <button onClick={() => navigate('/logout')} className="logout-button">
                                Log Out
                            </button>
                        </div>
                    ) : (
                        // If the user is not logged in, show login button
                        <button onClick={() => navigate('/login')} className="logout-button">
                            Login
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navigation;
