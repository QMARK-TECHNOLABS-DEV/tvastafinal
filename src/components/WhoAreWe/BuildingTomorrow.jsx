import React from 'react';
import { FadeIn, SlideInLeft, SlideInRight, AnimatedButton } from '../../utils/animations.jsx';
import { motion } from 'framer-motion';

const BuildingTomorrow = () => {
  return (
    <div className="flex items-center gap-[60px] w-full max-w-[1280px] px-4">
      {/* Left Content */}
      <div className="flex flex-col justify-center items-start gap-[28px] w-[712px] h-[400px] flex-grow">
        <SlideInLeft delay={0.2}>
          <div className="flex flex-col items-start gap-[28px] w-full">
            <h2 className="font-outfit font-semibold text-[44px] leading-[130%] tracking-[-0.03em] text-[#0D192D] w-[711px]">
              Building tomorrow's infrastructure takes more than concrete.
            </h2>
            <p className="font-outfit font-medium text-[20px] leading-[22px] tracking-[-0.01em] text-[#1D3357] w-full">
              It takes conviction, code, and collaboration.
            </p>
          </div>
        </SlideInLeft>
        
        <SlideInLeft delay={0.4}>
          <AnimatedButton 
            className="flex justify-center items-center px-[28px] py-[16px] gap-[10px] w-[201px] h-[56px] bg-[#1D3357] rounded-[20px]"
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "#0D192D",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-outfit font-semibold text-[18px] leading-[23px] text-white">
              Work With Us
            </span>
            <motion.div 
              className="w-[24px] h-[24px] flex items-center justify-center"
              whileHover={{ rotate: 15 }}
              transition={{ duration: 0.2 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6Z"
                  fill="white"
                  fillOpacity="0.1"
                />
                <path
                  d="M4 8L12 12L20 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </AnimatedButton>
        </SlideInLeft>
      </div>
      
      {/* Right Image */}
      <SlideInRight delay={0.3} className="flex-shrink-0">
        <img 
          src="/images/Who Are We/workwithus.png" 
          alt="Building Tomorrow" 
          className="w-[508px] h-[400px] object-cover rounded-[24px] opacity-100"
          style={{ 
            width: '508px', 
            height: '400px', 
            borderRadius: '24px',
            opacity: 1 
          }}
        />
      </SlideInRight>
    </div>
  );
};

export default BuildingTomorrow;
