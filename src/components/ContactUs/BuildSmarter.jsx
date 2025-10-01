import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, SlideInLeft, SlideInRight } from '../../utils/animations.jsx';

const BuildSmarter = () => {
  return (
    <section className="relative w-full bg-white py-[80px] md:py-[120px]">
      <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[60px] w-full max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Text Content */}
        <SlideInLeft delay={0.5} duration={0.8}>
          <div className="flex flex-col justify-center items-start w-full lg:w-[712px]">
            <div className="flex flex-col items-start gap-[20px] lg:gap-[28px] w-full">
              {/* Main Heading */}
              <h3 className="text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-[130%] tracking-[-0.03em] text-[#0D192D] w-full">
                Let's Build Smarter, Together
              </h3>

              {/* Description */}
              <p className="text-[18px] md:text-[19px] lg:text-[20px] font-medium leading-[22px] tracking-[-0.01em] text-[#1D3357] w-full">
                We're redefining construction - bringing precision, sustainability, and innovation to every project.
              </p>
            </div>
          </div>
        </SlideInLeft>

        {/* Image */}
        <SlideInRight delay={0.6} duration={0.8}>
          <div className="w-full lg:w-[508px] h-[300px] lg:h-[400px] rounded-[24px] overflow-hidden flex-none bg-[#D9D9D9]">
            <img 
              src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/ContactUs/contactus.jpg"
              alt="Let's Build Smarter, Together - Tvasta construction innovation"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </SlideInRight>
      </div>
    </section>
  );
};

export default BuildSmarter;