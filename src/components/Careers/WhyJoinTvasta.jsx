import React from 'react';
import { FadeIn, SlideInUp, AnimatedCard } from '../../utils/animations.jsx';

const WhyJoinTvasta = () => {
  const reasons = [
    {
      icon: '/images/careers/icon1.png',
      title: 'Work on cutting-edge 3D construction technology'
    },
    {
      icon: '/images/careers/icon2.png',
      title: 'Collaborate with top minds from engineering, design, and R&D'
    },
    {
      icon: '/images/careers/icon3.png',
      title: 'Contribute to projects that change lives and cities'
    },
    {
      icon: '/images/careers/icon4.png',
      title: 'Thrive in a culture of innovation, speed, and sustainability'
    }
  ];

  return (
    <div className="flex flex-col justify-center items-start gap-[60px] w-full max-w-[1280px] px-4 md:px-0">
      {/* Section Header */}
      <FadeIn delay={0.2} duration={0.8}>
        <div className="flex flex-col justify-center items-center gap-[20px] w-full px-0 md:px-[80px]">
          <h2 className="w-full font-outfit font-semibold text-[32px] md:text-[48px] leading-[125%] text-center text-[#0D192D]">
            Why Join Tvasta?
          </h2>
        </div>
      </FadeIn>

      {/* Cards Grid */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] w-full">
        {reasons.map((reason, index) => (
          <SlideInUp key={index} delay={0.4 + index * 0.1} duration={0.6}>
            <AnimatedCard 
              className="box-border w-full md:w-[305px] h-[400px] bg-white border border-black/10 backdrop-blur-[24px] rounded-[24px] flex flex-col items-center justify-center p-6"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Icon Container */}
              <div className="w-[125px] h-[125px] mb-8 flex items-center justify-center">
                <img 
                  src={reason.icon} 
                  alt={`Icon ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Title */}
              <div className="w-[271px] h-[58px] flex items-center justify-center">
                <p className="font-outfit font-semibold text-[18px] leading-[160%] text-center text-[#0D192D]">
                  {reason.title}
                </p>
              </div>
            </AnimatedCard>
          </SlideInUp>
        ))}
      </div>
    </div>
  );
};

export default WhyJoinTvasta;