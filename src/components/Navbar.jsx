import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatedButton } from '../utils/animations.jsx';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Helper function to check if a path is active
  const isActive = (path) => location.pathname === path;

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
        >
          <img 
            src="/images/tvastanavlogo.png" 
            alt="Tvasta Logo"
            className="w-16 h-16 object-contain mix-blend-difference"
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
            <span className={`font-outfit text-[14px] ${
              isActive('/who-we-are') 
                ? 'text-[#E63946] font-semibold' 
                : 'text-[#0D192D] font-medium'
            }`}>
              Who We Are
            </span>
            <svg className={`w-6 h-6 ${isActive('/who-we-are') ? 'text-[#E63946]' : 'text-[#0D192D]'}`} fill="currentColor" viewBox="0 0 24 24">
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
            <span className={`font-outfit text-[14px] ${
              isActive('/our-technology') 
                ? 'text-[#E63946] font-semibold' 
                : 'text-[#0D192D] font-medium'
            }`}>
              Our Technology
            </span>
            <svg className={`w-6 h-6 ${isActive('/our-technology') ? 'text-[#E63946]' : 'text-[#0D192D]'}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </motion.div>
        </Link>
        <Link to="/projects">
          <motion.span 
            className={`font-outfit text-[14px] cursor-pointer ${
              isActive('/projects') 
                ? 'text-[#E63946] font-semibold' 
                : 'text-[#0D192D] font-medium'
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Projects
          </motion.span>
        </Link>
        <Link to="/products">
          <motion.span 
            className={`font-outfit text-[14px] cursor-pointer ${
              isActive('/products') 
                ? 'text-[#E63946] font-semibold' 
                : 'text-[#0D192D] font-medium'
            }`}
            whileHover={{ scale: 1.05, color: "#E63946" }}
            transition={{ duration: 0.2 }}
          >
            Products
          </motion.span>
        </Link>
        <Link to="/tvasta-stories">
          <motion.span 
            className={`font-outfit text-[14px] cursor-pointer ${
              isActive('/tvasta-stories') 
                ? 'text-[#E63946] font-semibold' 
                : 'text-[#0D192D] font-medium'
            }`}
            whileHover={{ scale: 1.05, color: "#E63946" }}
            transition={{ duration: 0.2 }}
          >
            TVASTA Stories
          </motion.span>
        </Link>
        <Link to="/faqs">
          <motion.span 
            className={`font-outfit text-[14px] cursor-pointer ${
              isActive('/faqs') 
                ? 'text-[#E63946] font-semibold' 
                : 'text-[#0D192D] font-medium'
            }`}
            whileHover={{ scale: 1.05, color: "#E63946" }}
            transition={{ duration: 0.2 }}
          >
            FAQ's
          </motion.span>
        </Link>
      </div>

      {/* Action Buttons */}
      <div className="hidden lg:flex items-center gap-3">
        <Link to="/contact-us">
          <AnimatedButton 
            className="flex justify-center items-center px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 border border-[rgba(145,149,146,0.15)] bg-[#F9FAF9] rounded-full whitespace-nowrap"
            whileHover={{ scale: 1.05, backgroundColor: "#E5E7E5" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-[#0D192D] font-outfit font-medium text-sm">Contact Us</span>
          </AnimatedButton>
        </Link>
        <Link to="/careers">
          <AnimatedButton 
            className="flex justify-center items-center px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 bg-[#0D192D] rounded-full whitespace-nowrap"
            whileHover={{ scale: 1.05, backgroundColor: "#1D3357" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white font-outfit font-medium text-sm">Careers</span>
          </AnimatedButton>
        </Link>
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
                  <span className={`font-outfit text-base ${
                    isActive('/who-we-are') 
                      ? 'text-[#E63946] font-semibold' 
                      : 'text-[#0D192D] font-medium'
                  }`}>
                    Who We Are
                  </span>
                  <svg className={`w-5 h-5 ${isActive('/who-we-are') ? 'text-[#E63946]' : 'text-[#0D192D]'}`} fill="currentColor" viewBox="0 0 24 24">
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
                  <span className={`font-outfit text-base ${
                    isActive('/our-technology') 
                      ? 'text-[#E63946] font-semibold' 
                      : 'text-[#0D192D] font-medium'
                  }`}>
                    Our Technology
                  </span>
                  <svg className={`w-5 h-5 ${isActive('/our-technology') ? 'text-[#E63946]' : 'text-[#0D192D]'}`} fill="currentColor" viewBox="0 0 24 24">
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
                  <span className={`font-outfit text-base ${
                    isActive('/projects') 
                      ? 'text-[#E63946] font-semibold' 
                      : 'text-[#0D192D] font-medium'
                  }`}>
                    Projects
                  </span>
                </motion.div>
              </Link>
              
              <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.div 
                  className="py-3 border-b border-gray-100"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className={`font-outfit text-base ${
                    isActive('/products') 
                      ? 'text-[#E63946] font-semibold' 
                      : 'text-[#0D192D] font-medium'
                  }`}>
                    Products
                  </span>
                </motion.div>
              </Link>
              
              <Link to="/tvasta-stories" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.div 
                  className="py-3 border-b border-gray-100"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className={`font-outfit text-base ${
                    isActive('/tvasta-stories') 
                      ? 'text-[#E63946] font-semibold' 
                      : 'text-[#0D192D] font-medium'
                  }`}>
                    TVASTA Stories
                  </span>
                </motion.div>
              </Link>
              
              <Link to="/faqs" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.div 
                  className="py-3 border-b border-gray-100"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className={`font-outfit text-base ${
                    isActive('/faqs') 
                      ? 'text-[#E63946] font-semibold' 
                      : 'text-[#0D192D] font-medium'
                  }`}>
                    FAQ's
                  </span>
                </motion.div>
              </Link>

              {/* Mobile Action Buttons */}
              <div className="flex flex-col gap-3 pt-4">
                <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
                  <AnimatedButton 
                    className="flex justify-center items-center px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 border border-[rgba(145,149,146,0.15)] bg-[#F9FAF9] rounded-full w-full whitespace-nowrap"
                    whileHover={{ scale: 1.02, backgroundColor: "#E5E7E5" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-[#0D192D] font-outfit font-medium text-sm">Contact Us</span>
                  </AnimatedButton>
                </Link>
                <Link to="/careers" onClick={() => setIsMobileMenuOpen(false)}>
                  <AnimatedButton 
                    className="flex justify-center items-center px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 bg-[#0D192D] rounded-full w-full whitespace-nowrap"
                    whileHover={{ scale: 1.02, backgroundColor: "#1D3357" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-white font-outfit font-medium text-sm">Careers</span>
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
