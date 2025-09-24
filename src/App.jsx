import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WhoAreWePage from './pages/WhoAreWePage';
import OurTechnologyPage from './pages/OurTechnologyPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/who-we-are" element={<WhoAreWePage />} />
        <Route path="/our-technology" element={<OurTechnologyPage />} />
      </Routes>
    </Router>
  );
}