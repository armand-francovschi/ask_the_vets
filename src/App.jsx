import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import CardComponent from './components/card/CardComponent';
import Consultatii from './components/consultatii/Consultatii';
import Ingrijire from './components/ingrijire/Ingrijire';
import Blog from './components/blog/Blog';
import Agenda from './components/agenda/Agenda';
import ScrollToTopButton from './components/misc/ScrollToTopButton';
import BlogArticle from './components/blog/BlogArticle';
import Footer from './components/footer/FixedBottom';
import Login from './components/authentication/Login';
import Logout from './components/authentication/Logout';
import { useAuth } from './components/authentication/context/Context';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function AppContent() {
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    // Confirmation dialog for logout
    if (window.confirm("Are you sure you want to log out?")) {
      logout(); // Proceed with logout if confirmed
    }
  };

  return (
    <div>
      <div className="text-container">
        <header>
          <a href="/">
            <img src="assets/images/logo_main.png" className="logo" alt="Logo" />
          </a>
          <h1 className="main-title">
            ASK<span className="black">the</span>VETS
          </h1>
          <p className="subtitle">CARE FOR YOUR BELOVED PET</p>
        </header>
      </div>
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={isLoggedIn ? <CardComponent /> : <Navigate to="/login" />} />
          <Route path="/consultatii" element={isLoggedIn ? <Consultatii /> : <Navigate to="/login" />} />
          <Route path="/ingrijire" element={isLoggedIn ? <Ingrijire /> : <Navigate to="/login" />} />
          <Route path="/blog" element={isLoggedIn ? <Blog /> : <Navigate to="/login" />} />
          <Route path="/agenda" element={isLoggedIn ? <Agenda /> : <Navigate to="/login" />} />
          <Route path="/blog/:articleId" element={isLoggedIn ? <BlogArticle /> : <Navigate to="/login" />} />
          <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
        </Routes>
      </main>
      {isLoggedIn && (
        <button onClick={handleLogout} className="logout-button">
          Log Out
        </button>
      )}
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default AppContent;
