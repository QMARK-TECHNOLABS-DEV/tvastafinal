import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, SlideInUp } from '../../utils/animations.jsx';

const BuildWith3D = () => {
  return (
    <section className="relative w-full flex flex-col justify-center items-center py-[80px] md:py-[120px] bg-white">
      <div className="flex flex-col items-center gap-0 w-full max-w-[1441px] mx-auto px-4 md:px-8">
        <FadeIn delay={0.2} duration={0.8}>
          <div className="flex flex-col justify-center items-center gap-[20px] w-full text-center">
            {/* Main Heading */}
            <SlideInUp delay={0.3} duration={0.6}>
              <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-[125%] text-[#0D192D] max-w-[1281px]">
                Let's build with 3D.
              </h2>
            </SlideInUp>

            {/* Subheading */}
            <SlideInUp delay={0.4} duration={0.6}>
              <p className="text-[20px] md:text-[24px] lg:text-[28px] font-medium leading-[125%] capitalize text-[#1D3357] max-w-[1035px]">
                Printers, Projects, Or Partnerships - We're Ready When You Are
              </p>
            </SlideInUp>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default BuildWith3D;