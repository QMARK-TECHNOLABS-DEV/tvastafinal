import React from 'react';
import { FadeIn, SlideInUp } from '../../utils/animations.jsx';
import { motion } from 'framer-motion';

const PageHeader = () => {
  const heroBg = '/images/Who%20Are%20We/herobg.png';

  return (
    <section className="relative w-full h-[800px] bg-white overflow-hidden">
      {/* Background with reduced opacity */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="w-full max-w-[1256px] mx-auto text-center px-4">
          <FadeIn delay={0.2} duration={0.8}>
            <h1 className="font-outfit font-semibold text-[54px] leading-[106.2%] text-[#0D192D] mb-[30px] tracking-[-0.02em] capitalize">
              Who We Are
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.4} duration={0.8}>
            <h2 className="font-outfit font-semibold text-[24px] leading-[170%] text-[#1D3357] mb-[30px] tracking-[-0.02em]">
              Automation-led 3D printing for the future of sustainable construction
            </h2>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
