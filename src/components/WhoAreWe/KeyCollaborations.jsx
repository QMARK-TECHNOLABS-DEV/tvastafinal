import React from 'react';
import { FadeIn, StaggeredList } from '../../utils/animations.jsx';
import { motion } from 'framer-motion';

const KeyCollaborations = () => {
  const collaborations = [
    { id: 1, name: "Saint-Gobain", image: "/images/logo1.png", width: "150px" },
    { id: 2, name: "Venture Catalyst", image: "/images/logo2.png", width: "150px" },
    { id: 3, name: "Navam Capital", image: "/images/logo3.png", width: "160px" },
    { id: 4, name: "Habitat for Humanity", image: "/images/logo4.png", width: "150px" },
    { id: 5, name: "ADB Ventures", image: "/images/logo1.png", width: "140px" },
    { id: 6, name: "Third Derivative", image: "/images/logo2.png", width: "180px" }
  ];

  return (
    <div className="flex flex-col items-center gap-[40px] w-full max-w-[1441px] px-[80px]">
      {/* Title */}
      <FadeIn delay={0.2}>
        <div className="flex flex-col items-center gap-[10px] w-full max-w-[1281px]">
          <h2 className="font-outfit font-semibold text-[48px] leading-[140%] text-center text-[#0D192D] w-full">
            Key Collaborations
          </h2>
        </div>
      </FadeIn>
      
      {/* Collaborations Grid */}
      <StaggeredList 
        className="flex items-center justify-center gap-[40px] w-full max-w-[1200px] flex-wrap"
        delay={0.4}
        staggerDelay={0.1}
      >
        {collaborations.map((collab, index) => (
          <motion.div
            key={collab.id}
            className={`h-[60px] bg-white border border-gray-200 rounded-[8px] flex items-center justify-center overflow-hidden p-3 shadow-sm`}
            style={{ width: collab.width }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3 }
            }}
          >
            <img 
              src={collab.image} 
              alt={collab.name}
              className="max-w-full max-h-full object-contain filter brightness-90"
            />
          </motion.div>
        ))}
      </StaggeredList>
    </div>
  );
};

export default KeyCollaborations;
