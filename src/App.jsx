import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Ensure BrowserRouter is imported
import { AuthProvider } from './components/authentication/context/Context';
import AppContent from './components/misc/AppContent';

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
