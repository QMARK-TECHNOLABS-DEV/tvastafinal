import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatedButton } from '../utils/animations.jsx';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center px-20 py-10 w-full h-[100px] bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.05)] absolute top-0 left-0 z-50"
    >
      {/* Logo */}
      <Link to="/">
      <motion.div 
        className="flex items-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {/* Replaced PNG logo with inline SVG to ensure visibility */}
        <span className="block h-9 w-auto" aria-label="Tvasta Logo">
          <svg className="h-9 w-auto" viewBox="0 0 91 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" role="img">
            <g>
              <rect width="43.3929" height="36" fill="url(#pattern0_680_10785)"/>
              <rect x="29.8929" y="19.6071" width="60.75" height="16.3929" fill="url(#pattern1_680_10785)"/>
            </g>
            <defs>
              <pattern id="pattern0_680_10785" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_680_10785" transform="matrix(0.00432099 0 0 0.00520833 -0.148148 -0.125)"/>
              </pattern>
              <pattern id="pattern1_680_10785" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_680_10785" transform="matrix(0.00438596 0 0 0.0162037 -0.157895 -3.5)"/>
              </pattern>
              <image id="image0_680_10785" width="300" height="300" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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"/>
            </defs>
          </svg>
        </span>
        {/* ...existing code... */}
      </motion.div>
      </Link>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-10 bg-white rounded-full px-8 py-2">
        <Link to="/who-we-are">
          <motion.div 
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-[#0D192D] font-outfit font-medium text-base">Who We Are</span>
            <svg className="w-6 h-6 text-[#0D192D]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </motion.div>
        </Link>
        <Link to="/our-technology">
          <motion.div 
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-[#0D192D] font-outfit font-medium text-base">Our Technology</span>
            <svg className="w-6 h-6 text-[#0D192D]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </motion.div>
        </Link>
        <Link to="/projects">
          <motion.span 
            className="text-[#E63946] font-outfit font-semibold text-base cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Projects
          </motion.span>
        </Link>
        <Link to="/products">
          <motion.span 
            className="text-[#0D192D] font-outfit font-medium text-base cursor-pointer"
            whileHover={{ scale: 1.05, color: "#E63946" }}
            transition={{ duration: 0.2 }}
          >
            Products
          </motion.span>
        </Link>
        <Link to="/tvasta-stories">
          <motion.span 
            className="text-[#0D192D] font-outfit font-medium text-base cursor-pointer"
            whileHover={{ scale: 1.05, color: "#E63946" }}
            transition={{ duration: 0.2 }}
          >
            TVASTA Stories
          </motion.span>
        </Link>
        <Link to="/">
          <motion.span 
            className="text-[#0D192D] font-outfit font-medium text-base cursor-pointer"
            whileHover={{ scale: 1.05, color: "#E63946" }}
            transition={{ duration: 0.2 }}
          >
            FAQ's
          </motion.span>
        </Link>
      </div>

      {/* Action Buttons */}
      <div className="hidden lg:flex items-center gap-3">
        <AnimatedButton 
          className="flex justify-center items-center px-6 py-3 border border-[rgba(145,149,146,0.15)] bg-[#F9FAF9] rounded-full"
          whileHover={{ scale: 1.05, backgroundColor: "#E5E7E5" }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-[#0D192D] font-outfit font-medium text-sm">Contact Us</span>
        </AnimatedButton>
        <AnimatedButton 
          className="flex justify-center items-center px-6 py-3 bg-[#0D192D] rounded-full"
          whileHover={{ scale: 1.05, backgroundColor: "#1D3357" }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-white font-outfit font-medium text-sm">Careers</span>
        </AnimatedButton>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <AnimatedButton 
          className="text-[#0D192D]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMobileMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </AnimatedButton>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.15)] z-40"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {/* Mobile Navigation Links */}
              <Link to="/who-we-are" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.div 
                  className="flex items-center justify-between py-3 border-b border-gray-100"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-[#0D192D] font-outfit font-medium text-base">Who We Are</span>
                  <svg className="w-5 h-5 text-[#0D192D]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </motion.div>
              </Link>
              
              <Link to="/our-technology" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.div 
                  className="flex items-center justify-between py-3 border-b border-gray-100"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-[#0D192D] font-outfit font-medium text-base">Our Technology</span>
                  <svg className="w-5 h-5 text-[#0D192D]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </motion.div>
              </Link>
              
              <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.div 
                  className="py-3 border-b border-gray-100"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-[#E63946] font-outfit font-semibold text-base">Projects</span>
                </motion.div>
              </Link>
              
              <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.div 
                  className="py-3 border-b border-gray-100"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-[#0D192D] font-outfit font-medium text-base">Products</span>
                </motion.div>
              </Link>
              
              <Link to="/tvasta-stories" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.div 
                  className="py-3 border-b border-gray-100"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-[#0D192D] font-outfit font-medium text-base">TVASTA Stories</span>
                </motion.div>
              </Link>
              
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.div 
                  className="py-3 border-b border-gray-100"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-[#0D192D] font-outfit font-medium text-base">FAQ's</span>
                </motion.div>
              </Link>

              {/* Mobile Action Buttons */}
              <div className="flex flex-col gap-3 pt-4">
                <AnimatedButton 
                  className="flex justify-center items-center px-6 py-3 border border-[rgba(145,149,146,0.15)] bg-[#F9FAF9] rounded-full"
                  whileHover={{ scale: 1.02, backgroundColor: "#E5E7E5" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-[#0D192D] font-outfit font-medium text-sm">Contact Us</span>
                </AnimatedButton>
                <AnimatedButton 
                  className="flex justify-center items-center px-6 py-3 bg-[#0D192D] rounded-full"
                  whileHover={{ scale: 1.02, backgroundColor: "#1D3357" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-white font-outfit font-medium text-sm">Careers</span>
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
