import React from 'react';
import { FadeIn, StaggeredList, ScaleUp } from '../utils/animations.jsx';

const Partners = () => {
  const logos = [
    { src: "/images/logo1.png", alt: "Partner 1", width: "150px", height: "80px" },
    { src: "/images/logo2.png", alt: "Partner 2", width: "200px", height: "80px" },
    { src: "/images/logo3.png", alt: "Partner 3", width: "219px", height: "56px" },
    { src: "/images/logo4.png", alt: "Partner 4", width: "120px", height: "40px" },
    { src: "/images/logo1.png", alt: "Partner 5", width: "150px", height: "80px" },
    { src: "/images/logo2.png", alt: "Partner 6", width: "150px", height: "80px" }
  ];

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-[1440px] px-4">
      {/* Section Title */}
      <FadeIn delay={0.2}>
        <h2 className="font-outfit font-medium text-[24px] leading-[30px] text-center text-[#0D192D]">
          Pioneers since 2016
        </h2>
      </FadeIn>

      {/* Partners Logos */}
      <div className="flex flex-col items-center gap-[50px] w-full max-w-[1239px]">
        <StaggeredList staggerDelay={0.15} className="flex flex-wrap justify-center items-center gap-[50px] w-full">
          {logos.map((logo, index) => (
            <ScaleUp
              key={index}
              delay={index * 0.1}
              className={`bg-gray-100 rounded-[10px] overflow-hidden hover-lift hover-scale transition-all duration-300`}
              style={{ width: logo.width, height: logo.height }}
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="w-full h-full object-contain p-2" 
              />
            </ScaleUp>
          ))}
        </StaggeredList>
      </div>
    </div>
  );
};

export default Partners;
