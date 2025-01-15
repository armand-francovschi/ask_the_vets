import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CardComponent from './components/card/CardComponent'; // Your main card component
import Consultatii from './components/consultatii/Consultatii';  // The Consultatii component
import Ingrijire from './components/ingrijire/Ingrijire'; // The Ingrijire component
import Blog from './components/blog/Blog'; // The Blog component
import Agenda from './components/agenda/Agenda'; // The Agenda component
import ScrollToTopButton from './components/misc/ScrollToTopButton';
import BlogArticle from './components/blog/BlogArticle';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on location change
  }, [location]); // Dependency on location ensures that scroll happens on route change

  return null; // This component does not render anything, just triggers the effect
}

function App() {
  return (
    <Router>
      <div>
        <div className="text-container">
          <header>
            <a href='/'>
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
            <Route path="/" element={<CardComponent />} />
            <Route path="/consultatii" element={<Consultatii />} />
            <Route path="/ingrijire" element={<Ingrijire />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/blog/:articleId" element={<BlogArticle />} />
          </Routes>
        </main>
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
