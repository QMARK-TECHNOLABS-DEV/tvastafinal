import React from 'react';
import { FadeIn } from '../../utils/animations.jsx';

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
            Who Are We
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.4} duration={0.8}>
          <h2 className="font-outfit font-semibold text-[24px] leading-[170%] text-[#1D3357] mb-[30px] tracking-[-0.02em]">
            India's pioneering 3D construction company, building the future layer by layer.
          </h2>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
