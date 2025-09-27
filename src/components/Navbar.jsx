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
          <img 
            src="/images/tvastanavlogo.png" 
            alt="Tvasta Logo"
            className="w-[90.64px] h-9 object-contain mix-blend-difference"
            onError={(e) => {
              console.error('Logo failed to load:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
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
        <Link to="/faqs">
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
              
              <Link to="/faqs" onClick={() => setIsMobileMenuOpen(false)}>
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
