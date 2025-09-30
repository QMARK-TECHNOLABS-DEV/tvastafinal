import React from 'react';
import { FadeIn, SlideInLeft, SlideInRight, AnimatedButton } from '../../utils/animations.jsx';

const CallToAction = () => {
  // Using the attached workspace collaboration image
  const letsTalkImage = 'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/OurTechnology/Letstalk.jpg';

  return (
    <section className="w-full bg-white py-[120px]">
      <div className="w-full max-w-[1280px] mx-auto flex gap-[60px] items-center">
        <SlideInLeft delay={0.3}>
          <div className="w-[712px] flex flex-col gap-7 items-start">
            <FadeIn delay={0.5}>
              <div className="font-outfit font-semibold text-[44px] leading-[130%] text-[#0D192D] tracking-[-0.03em]">
                Ready to bring your next project to life with 3D Construction?
              </div>
            </FadeIn>
            
            <FadeIn delay={0.7}>
              <div className="font-outfit font-medium text-[20px] leading-[22px] text-[#1D3357] tracking-[-0.01em]">
                Whether you're building a home, a shelter, or a smart city facade, we have the tools to make it possible.
              </div>
            </FadeIn>
            
            <div className="flex gap-7 mt-4">
              <AnimatedButton 
                className="flex items-center bg-[#1D3357] text-white font-outfit font-semibold text-[18px] rounded-[20px] px-7 py-4 border-none gap-[10px] cursor-pointer transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#1D3357]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
              </AnimatedButton>
              
              <AnimatedButton 
                className="flex items-center border-2 border-[#1D3357] text-[#1D3357] font-outfit font-semibold text-[18px] rounded-[20px] px-7 py-4 bg-transparent gap-[10px] cursor-pointer transition-all duration-300 hover:bg-[#1D3357] hover:text-white"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Tech Brochure
                <div className="w-6 h-6 bg-[#1D3357] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                  </svg>
                </div>
              </AnimatedButton>
            </div>
          </div>
        </SlideInLeft>
        
        <SlideInRight delay={0.5}>
          <div 
            className="w-[508px] h-[400px] rounded-[24px] bg-cover bg-center bg-no-repeat shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{ 
              background: `url(${letsTalkImage}) center/cover no-repeat, #D9D9D9`
            }}
          />
        </SlideInRight>
      </div>
    </section>
  );
};

export default CallToAction;
