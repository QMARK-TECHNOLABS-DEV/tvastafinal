import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatedButton } from '../utils/animations.jsx';
import { motion } from 'framer-motion';

const Navbar = () => {
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
        <img src="/images/tvastalogo.png" alt="Tvasta Logo" className="h-9" />
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
        <Link to="/">
          <motion.span 
            className="text-[#E63946] font-outfit font-semibold text-base cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Projects
          </motion.span>
        </Link>
        <Link to="/">
          <motion.span 
            className="text-[#0D192D] font-outfit font-medium text-base cursor-pointer"
            whileHover={{ scale: 1.05, color: "#E63946" }}
            transition={{ duration: 0.2 }}
          >
            Careers
          </motion.span>
        </Link>
        <Link to="/">
          <motion.span 
            className="text-[#0D192D] font-outfit font-medium text-base cursor-pointer"
            whileHover={{ scale: 1.05, color: "#E63946" }}
            transition={{ duration: 0.2 }}
          >
            Marketplace
          </motion.span>
        </Link>
        <Link to="/">
          <motion.span 
            className="text-[#0D192D] font-outfit font-medium text-base cursor-pointer"
            whileHover={{ scale: 1.05, color: "#E63946" }}
            transition={{ duration: 0.2 }}
          >
            Blog
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
          <span className="text-[#0D192D] font-outfit font-medium text-sm">Get Quote</span>
        </AnimatedButton>
        <AnimatedButton 
          className="flex justify-center items-center px-6 py-3 bg-[#0D192D] rounded-full"
          whileHover={{ scale: 1.05, backgroundColor: "#1D3357" }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-white font-outfit font-medium text-sm">Contact</span>
        </AnimatedButton>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <AnimatedButton 
          className="text-[#0D192D]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </AnimatedButton>
      </div>
    </motion.nav>
  );
};

export default Navbar;
