import React from 'react';
import { FadeIn, SlideInLeft, SlideInRight } from '../../utils/animations.jsx';
import { motion } from 'framer-motion';

const OurStory = () => {
  const storyText1 = "Founded in 2016 at IIT-Madras, Tvasta emerged with a vision to redefine civil construction through deep-tech innovation. In 2020, we unveiled India's first 3D-printed house, turning a research milestone into an industry-defining moment.";
  
  const storyText2 = "Today, we are a vertically integrated construction-tech company that develops 3D printing platforms, smart materials, and proprietary software, powering real-world builds from flood-resilient homes to smart city infrastructure. We're transforming concrete into a tool for innovation, not limitation.";

  const words1 = storyText1.split(' ');
  const words2 = storyText2.split(' ');

  return (
    <div className="flex flex-col items-center gap-[60px] w-full max-w-[1441px] h-auto px-4">
      {/* Our Story Section */}
      <div className="flex flex-col items-start gap-[40px] w-full max-w-[1280px]">
        <FadeIn delay={0.2}>
          <h2 className="font-outfit font-semibold text-[48px] leading-[60px] text-[#0D192D] w-full">
            Our Story
          </h2>
        </FadeIn>
        
        <div className="flex flex-col gap-[20px] w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-outfit font-normal text-[32px] leading-[150%] tracking-[-0.5px] text-[#1D3357] w-full"
          >
            {words1.map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
                transition={{ 
                  duration: 0.1,
                  delay: index * 0.05
                }}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-outfit font-normal text-[32px] leading-[150%] tracking-[-0.5px] text-[#1D3357] w-full"
          >
            {words2.map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
                transition={{ 
                  duration: 0.1,
                  delay: (words1.length * 0.05) + (index * 0.05) + 0.5
                }}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Images Layout - 3/4 and 1/4 split */}
      <div className="w-full max-w-[1441px] flex flex-col lg:flex-row items-stretch gap-[40px] px-4 lg:px-[80px]">
        <motion.div 
          className="w-full lg:w-3/4 h-[400px] lg:h-[468px] rounded-[12px] overflow-hidden"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img 
            src="/images/Who Are We/ourstory1.png" 
            alt="Our Story 1" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.div 
          className="w-full lg:w-1/4 h-[400px] lg:h-[468px] rounded-[12px] overflow-hidden"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img 
            src="/images/Who Are We/ourstory2.png" 
            alt="Our Story 2" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default OurStory;
