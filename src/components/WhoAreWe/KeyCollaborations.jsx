import React from 'react';
import { FadeIn, StaggeredList } from '../../utils/animations.jsx';
import { motion } from 'framer-motion';

const KeyCollaborations = () => {
  const collaborations = [
    { id: 1, name: "Collaboration 1", image: "/images/logo1.png", width: "150px" },
    { id: 2, name: "Collaboration 2", image: "/images/logo2.png", width: "200px" },
    { id: 3, name: "Collaboration 3", image: "/images/logo3.png", width: "219px" },
    { id: 4, name: "Collaboration 4", image: "/images/logo4.png", width: "150px" },
    { id: 5, name: "Collaboration 5", image: "/images/tvastalogo.png", width: "150px" }
  ];

  return (
    <div className="flex flex-col items-center gap-[64px] w-full max-w-[1441px] px-[80px]">
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
        className="flex flex-col items-center gap-[50px] w-[1239px]"
        delay={0.4}
        staggerDelay={0.1}
      >
        <div className="flex items-center gap-[50px] w-full justify-center flex-wrap">
          {collaborations.map((collab, index) => (
            <motion.div
              key={collab.id}
              className={`h-[80px] bg-gray-100 rounded-[10px] flex items-center justify-center overflow-hidden p-4`}
              style={{ width: collab.width }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#E5E7E5",
                transition: { duration: 0.3 }
              }}
            >
              {/* Special handling for the third collaboration with complex logo */}
              {index === 2 ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* This would be the complex SVG logo from the design */}
                  <div className="w-full h-full bg-gradient-to-r from-purple-400 to-orange-400 rounded opacity-60 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">LOGO</span>
                  </div>
                </div>
              ) : (
                <img 
                  src={collab.image} 
                  alt={collab.name}
                  className="max-w-full max-h-full object-contain"
                />
              )}
            </motion.div>
          ))}
        </div>
      </StaggeredList>
    </div>
  );
};

export default KeyCollaborations;
