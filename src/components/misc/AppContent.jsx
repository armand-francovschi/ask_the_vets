// src/AppContent.jsx
import React from 'react';
import { useAuth } from '../authentication/context/Context';
import {Routing,  Layout } from '../Dependencies'; // Adjust the relative path

function AppContent() {
  const { isLoggedIn, logout } = useAuth();  // Get the authentication state

  return (
    <Layout isLoggedIn={isLoggedIn}>
      <Routing /> {/* All routing is handled here */}
    </Layout>
  );
}

export default AppContent;
