import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WhoAreWePage from './pages/WhoAreWePage';
import OurTechnologyPage from './pages/OurTechnologyPage';
import ProjectsPage from './pages/ProjectsPage';
import ProductsPage from './pages/ProductsPage';
import TvastaStoriesPage from './pages/TvastaStoriesPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/who-we-are" element={<WhoAreWePage />} />
        <Route path="/our-technology" element={<OurTechnologyPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/tvasta-stories" element={<TvastaStoriesPage />} />
      </Routes>
    </Router>
  );
}