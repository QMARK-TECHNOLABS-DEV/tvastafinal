import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, SlideInUp, SlideInLeft, SlideInRight, AnimatedButton } from '../../utils/animations.jsx';

const MediaOrPressEnquiry = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-[60px] w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-20">
      {/* Content Section */}
      <SlideInLeft delay={0.3} className="flex flex-col justify-center items-start gap-2.5 flex-1 w-full lg:w-[712px] h-full">
        <FadeIn delay={0.5} className="flex flex-col items-start gap-7 w-full">
          {/* Title */}
          <h2 className="font-outfit font-semibold text-[28px] md:text-[36px] lg:text-[44px] leading-[130%] tracking-[-0.03em] text-[#0D192D]">
            Media or Press Inquiry?
          </h2>

          {/* Description */}
          <p className="font-outfit font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] tracking-[-0.01em] text-[#1D3357] w-full">
            For media features or press info, get in touch with our communications team.
          </p>

          {/* Contact Us Button */}
          <SlideInUp delay={0.7}>
            <AnimatedButton
              className="flex justify-center items-center px-7 py-4 gap-2.5 bg-[#1D3357] rounded-[20px] hover:bg-[#2D4367] transition-colors duration-300"
              whileHover={{ scale: 1.05, backgroundColor: "#2D4367" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Add contact functionality here
                window.location.href = 'mailto:press@tvastaconstruction.com';
              }}
            >
              <span className="font-outfit font-semibold text-[14px] md:text-[15px] lg:text-[16px] leading-[20px] text-white">
                Contact Us
              </span>
              
              <motion.div 
                className="w-5 h-5 bg-white rounded-full flex items-center justify-center"
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-3 h-3 text-[#1D3357]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.div>
            </AnimatedButton>
          </SlideInUp>
        </FadeIn>
      </SlideInLeft>

      {/* Image Section */}
      <SlideInRight delay={0.5} className="w-full lg:w-[508px] h-[300px] md:h-[350px] lg:h-[400px] flex-shrink-0">
        <motion.div 
          className="w-full h-full bg-[#D9D9D9] rounded-[24px] bg-cover bg-center overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundImage: `url('/images/tvastastories/mediaorpressenquiry.jpg')`
          }}
        />
      </SlideInRight>
    </div>
  );
};

export default MediaOrPressEnquiry;