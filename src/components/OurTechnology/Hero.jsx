import React from 'react';
import { FadeIn, SlideInUp, AnimatedButton } from '../../utils/animations.jsx';

const Hero = () => {
  const heroBg = '/images/Who%20Are%20We/herobg.png';

  return (
    <section 
      className="relative w-full h-[660px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="w-full max-w-[1256px] mx-auto text-center pt-[120px] px-4">
        <FadeIn delay={0.2} duration={0.8}>
          <h1 className="font-outfit font-semibold text-[54px] leading-[106.2%] text-[#0D192D] mb-[30px] tracking-[-0.02em] capitalize">
            Our Technology
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.4} duration={0.8}>
          <h2 className="font-outfit font-semibold text-[24px] leading-[170%] text-[#1D3357] mb-[30px] tracking-[-0.02em]">
            Every layer is backed by in-house innovation and precision engineering
          </h2>
        </FadeIn>
        
        <SlideInUp delay={0.6} duration={0.6}>
          <AnimatedButton 
            className="flex items-center justify-center bg-[#E63946] text-white font-outfit font-semibold text-[18px] rounded-[20px] px-7 py-4 border-none gap-[10px] cursor-pointer mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-[#E63946]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </div>
          </AnimatedButton>
        </SlideInUp>
      </div>
    </section>
  );
};

export default Hero;
