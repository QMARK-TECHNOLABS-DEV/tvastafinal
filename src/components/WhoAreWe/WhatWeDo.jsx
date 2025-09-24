import React, { useState } from 'react';
import { FadeIn, SlideInUp } from '../../utils/animations.jsx';
import { motion } from 'framer-motion';

const WhatWeDo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center gap-[25px] w-full max-w-[1280px] px-4">
      {/* Title */}
      <FadeIn delay={0.2}>
        <h2 className="font-outfit font-semibold text-[40px] leading-[50px] text-[#0D192D]">
          What We Do
        </h2>
      </FadeIn>
      
      {/* Video Section */}
      <SlideInUp delay={0.4} className="relative w-full h-[500px]">
        <div className="relative w-full h-full bg-gray-900 rounded-[12px] overflow-hidden">
          {/* Video Background */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/videos/7.mp4')",
              backgroundSize: 'cover'
            }}
          />
          
          {/* Play Button */}
          <motion.button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] bg-white/89 rounded-full flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePlayClick}
          >
            <div 
              className="w-[44.71px] h-[44.71px] bg-black"
              style={{
                clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                transform: 'rotate(90deg)'
              }}
            />
          </motion.button>
        </div>
      </SlideInUp>
      
      {/* Description */}
      <FadeIn delay={0.6}>
        <p className="font-outfit font-normal text-[28px] leading-[35px] text-center text-[#1D3357] w-full">
          We deliver first-principles-based, end-to-end 3D construction solutions that redefine building. Every structure we create, from shelters to smart pods, is high-quality, low-waste, and future-ready.
        </p>
      </FadeIn>
    </div>
  );
};

export default WhatWeDo;
