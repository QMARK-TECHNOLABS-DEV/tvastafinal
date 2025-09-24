import React from 'react';
import { FadeIn, SlideInLeft, SlideInRight } from '../../utils/animations.jsx';

const OurMission = () => {
  return (
    <div className="flex items-center gap-[80px] w-full max-w-[1280px] px-4">
      {/* Left Image */}
      <SlideInLeft delay={0.2} className="w-[445px] h-[536px] flex-shrink-0">
        <div className="w-full h-full bg-gray-200 rounded-[16px] overflow-hidden">
          <img 
            src="/images/Who Are We/missionvision.png" 
            alt="Our Mission and Vision" 
            className="w-full h-full object-cover"
          />
        </div>
      </SlideInLeft>
      
      {/* Right Content */}
      <div className="flex flex-col justify-center items-start gap-[48px] w-full flex-grow">
        {/* Our Mission Section */}
        <SlideInRight delay={0.3}>
          <div className="flex flex-col items-start gap-[16px] w-full">
            <h2 className="font-outfit font-semibold text-[48px] leading-[58px] text-[#0D192D]">
              Our Mission
            </h2>
            <p className="font-outfit font-normal text-[20px] leading-[140%] text-[#1D3357] w-full">
              Tvasta, a first principles-based technology builder, leverages automation and robotics to create 3D printing platforms that will revolutionize construction by automating 80% of the process for distributed infrastructure and mass customization, while also enabling high-precision, mass-customized component production across the manufacturing sector.
            </p>
          </div>
        </SlideInRight>
        
        {/* Our Vision Section */}
        <SlideInRight delay={0.5}>
          <div className="flex flex-col items-start gap-[16px] w-full">
            <h2 className="font-outfit font-semibold text-[48px] leading-[58px] text-[#0D192D]">
              Our Vision
            </h2>
            <p className="font-outfit font-normal text-[20px] leading-[140%] text-[#1D3357] w-full">
              To revolutionize global construction with modular, intelligent, and environmentally responsible solutions.
            </p>
          </div>
        </SlideInRight>
      </div>
    </div>
  );
};

export default OurMission;
