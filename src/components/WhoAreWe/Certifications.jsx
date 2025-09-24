import React from 'react';
import { FadeIn, StaggeredList } from '../../utils/animations.jsx';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    { id: 1, image: "/images/logo1.png" },
    { id: 2, image: "/images/logo2.png" },
    { id: 3, image: "/images/logo3.png" },
    { id: 4, image: "/images/logo4.png" },
    { id: 5, image: "/images/tvastalogo.png" }
  ];

  return (
    <div className="flex flex-col items-center gap-[64px] w-full max-w-[1441px] px-[80px]">
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
        className="flex flex-col items-center gap-[50px] w-[950px]"
        delay={0.4}
        staggerDelay={0.1}
      >
        <div className="flex items-center gap-[50px] w-full">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="w-[150px] h-[80px] bg-[#D9D9D9] rounded-[10px] flex items-center justify-center overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#C0C0C0",
                transition: { duration: 0.3 }
              }}
            >
              <img 
                src={cert.image} 
                alt={`Certification ${cert.id}`}
                className="w-full h-full object-contain p-2"
              />
            </motion.div>
          ))}
        </div>
      </StaggeredList>
    </div>
  );
};

export default Certifications;
