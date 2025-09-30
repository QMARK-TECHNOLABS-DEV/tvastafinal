import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ hideContactForm = false }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className="flex flex-col w-full bg-[#1D3357]">
      {/* Contact Section - conditionally rendered */}
      {!hideContactForm && (
        <div className="flex flex-col gap-[75px] px-8 md:px-16 py-[75px]">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 w-full">
            <span className="font-outfit font-medium text-[24px] leading-[130%] text-white">
              CONTACT
            </span>
            <span className="font-outfit font-medium text-[24px] leading-[130%] text-white">
              Start Your 3D Construction Journey
            </span>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col items-end gap-9 w-full">
            {/* Form Fields */}
            <div className="flex flex-col lg:flex-row items-center gap-9 w-full">
              {/* Name Field */}
              <div className="flex flex-col gap-4 w-full lg:flex-1">
                <label className="font-outfit font-medium text-[24px] leading-[130%] text-white">
                  Name
                </label>
                <div className="flex justify-center items-center px-4 py-6 border-b border-white w-full">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="font-outfit font-normal text-lg leading-[140%] text-white bg-transparent w-full outline-none placeholder-white"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-4 w-full lg:flex-1">
                <label className="font-outfit font-medium text-[24px] leading-[130%] text-white">
                  Email
                </label>
                <div className="flex justify-center items-center px-4 py-6 border-b border-white w-full">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="font-outfit font-normal text-lg leading-[140%] text-white bg-transparent w-full outline-none placeholder-white"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-4 w-full lg:flex-1">
                <label className="font-outfit font-medium text-[24px] leading-[130%] text-white">
                  Message
                </label>
                <div className="flex justify-center items-center px-4 py-6 border-b border-white w-full">
                  <input 
                    type="text" 
                    placeholder="Your Message" 
                    className="font-outfit font-normal text-lg leading-[140%] text-white bg-transparent w-full outline-none placeholder-white"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button className="flex justify-center items-center px-6 py-5 bg-white rounded-[35px]">
              <span className="font-outfit font-medium text-[24px] leading-[130%] text-[#1D3357]">
                Send Message
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="w-full h-px border-t border-white"></div>
        </div>
      )}

      {/* Footer Links */}
      <div className="flex flex-col gap-16 px-8 md:px-16 py-[75px]">
        {/* Top Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 w-full">
          {/* Site Links */}
          <div className="flex flex-col gap-6 w-full lg:w-[313px]">
            <Link to="/who-we-are" className="font-outfit font-medium text-[20px] leading-[130%] uppercase text-white hover:text-gray-300 transition-colors duration-200">
              who we are
            </Link>
            <Link to="/" className="font-outfit font-medium text-[20px] leading-[130%] uppercase text-white hover:text-gray-300 transition-colors duration-200">
              Our Technology
            </Link>
            <Link to="/" className="font-outfit font-medium text-[20px] leading-[130%] uppercase text-white hover:text-gray-300 transition-colors duration-200">
              FAQs
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6 w-full lg:w-[313px]">
            <span className="font-outfit font-medium text-[20px] leading-[130%] text-white">
              hello@tvastaconstruction.com
            </span>
            <span className="font-outfit font-medium text-[20px] leading-[130%] text-white">
              +91 8877 9900
            </span>
            <span className="font-outfit font-medium text-[20px] leading-[130%] text-white">
              Chennai, India
            </span>
          </div>

          {/* Company Description */}
          <div className="flex flex-col items-end gap-6 w-full lg:w-[313px]">
            <span className="font-outfit font-semibold text-[20px] leading-[130%] text-right text-white">
              India's 3D Construction Pioneers.
            </span>
            <p className="font-outfit font-normal text-lg leading-[130%] text-right text-white">
              Pushing the boundaries of how the world builds - with speed, precision, and sustainability.
            </p>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full">
          {/* Social Links */}
          <div className="flex items-center gap-8">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.001z"/>
            </svg>
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.76-.61.16-1.25.24-1.92.24H0V4.51h6.938v-.007zM3.495 7.6v2.42h2.945c.33 0 .61-.062.84-.18.23-.126.34-.35.34-.67 0-.32-.11-.545-.34-.67-.23-.118-.51-.18-.84-.18H3.495zm0 4.97v2.42h3.405c.4 0 .72-.062.96-.188.24-.125.36-.35.36-.67 0-.32-.12-.545-.36-.67-.24-.126-.56-.188-.96-.188H3.495zm11.24-1.24c.34 0 .64.05.91.16.27.1.5.24.69.42.19.18.33.39.43.64.1.25.15.52.15.82 0 .3-.05.57-.15.82-.1.25-.24.46-.43.64-.19.18-.42.32-.69.42-.27.1-.57.16-.91.16-.34 0-.64-.06-.91-.16-.27-.1-.5-.24-.69-.42-.19-.18-.33-.39-.43-.64-.1-.25-.15-.52-.15-.82 0-.3.05-.57.15-.82.1-.25.24-.46.43-.64.19-.18.42-.32.69-.42.27-.11.57-.16.91-.16zm2.19-2.86v8.63h-4.38V8.47h4.38z"/>
            </svg>
          </div>

          {/* Copyright */}
          <span className="font-outfit font-normal text-[24px] leading-[130%] text-right text-white">
            © 2024 Tvasta. All Rights Reserved.
          </span>

          {/* Back to Top */}
          <span 
            className="font-outfit font-medium text-[24px] leading-[130%] text-right text-white cursor-pointer hover:underline transition-colors duration-200 hover:text-gray-300"
            onClick={scrollToTop}
          >
            BACK TO TOP
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
