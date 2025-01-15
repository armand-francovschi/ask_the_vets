// src/components/misc/Routing.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CardComponent, Consultatii, Ingrijire, Blog, Agenda, BlogArticle, Login, Logout } from '../Dependencies';
import { useAuth } from '../authentication/context/Context';

const Routing = () => {
  const { isLoggedIn, logout } = useAuth(); // Get the authentication state and the logout function

  return (
    <Routes>
      {/* Public route for index page */}
      <Route path="/" element={<CardComponent />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:articleId" element={<BlogArticle />} />

      {/* Protected routes, redirect to login if not logged in */}
      <Route path="/login" element={<Login />} />
      <Route path="/consultatii" element={isLoggedIn ? <Consultatii /> : <Navigate to="/login" />} />
      <Route path="/ingrijire" element={isLoggedIn ? <Ingrijire /> : <Navigate to="/login" />} />
      <Route path="/agenda" element={isLoggedIn ? <Agenda /> : <Navigate to="/login" />} />

      {/* Logout route that triggers logout functionality */}
      <Route path="/logout" element={<Logout logout={logout} />} />
    </Routes>
  );
};

export default Routing;
