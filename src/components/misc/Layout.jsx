// src/components/Layout.jsx
import React from 'react';
import { Footer, Header, ScrollToTopButton, Navigation } from '../Dependencies'; // Import other components here
const Layout = ({ isLoggedIn, children }) => {
  return (
    <div>
      <Header />
      <main>
        <ScrollToTopButton />
        {children}  {/* This will render the dynamic content passed to Layout */}
      </main>
      <Navigation isLoggedIn={isLoggedIn} />
      <Footer />
    </div>
  );
};

export default Layout;
