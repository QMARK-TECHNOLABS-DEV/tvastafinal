import React from 'react';
import { FadeIn, StaggeredList } from '../../utils/animations.jsx';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 }
  ];

  return (
    <div className="flex flex-col items-center gap-[40px] w-full max-w-[1441px] px-[80px]">
      {/* Title */}
      <FadeIn delay={0.2}>
        <div className="flex flex-col items-center gap-[10px] w-full max-w-[1281px]">
          <h2 className="font-outfit font-semibold text-[48px] leading-[140%] text-center text-[#0D192D] w-full">
            Certifications
          </h2>
        </div>
      </FadeIn>
      
      {/* Certifications Grid */}
      <StaggeredList 
        className="flex items-center justify-center gap-[30px] w-full max-w-[800px]"
        delay={0.4}
        staggerDelay={0.1}
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            className="w-[120px] h-[60px] bg-[#D1D5DB] rounded-[8px] flex items-center justify-center"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#C0C0C0",
              transition: { duration: 0.3 }
            }}
          >
            {/* Empty gray placeholder */}
          </motion.div>
        ))}
      </StaggeredList>
    </div>
  );
};

export default Certifications;
