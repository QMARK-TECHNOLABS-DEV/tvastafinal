import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, SlideInUp, SlideInLeft, SlideInRight } from '../../utils/animations.jsx';

const BuildTogether = () => {
  return (
    <>
      {/* Let's build with 3D Section */}
      <section className="relative w-full flex flex-col justify-center items-center py-[80px] md:py-[120px] bg-white">
        <div className="flex flex-col items-center gap-0 w-full max-w-[1441px] mx-auto px-4 md:px-8">
          <FadeIn delay={0.2} duration={0.8}>
            <div className="flex flex-col justify-center items-center gap-[20px] w-full text-center">
              {/* Main Heading */}
              <SlideInUp delay={0.3} duration={0.6}>
                <h2 className="text-subtitle-mobile md:text-title font-semibold leading-[125%] text-[#0D192D] max-w-[1281px]">
                  Let's build with 3D.
                </h2>
              </SlideInUp>

              {/* Subheading */}
              <SlideInUp delay={0.4} duration={0.6}>
                <p className="text-card-mobile md:text-description font-medium leading-[125%] capitalize text-[#1D3357] max-w-[1035px]">
                  Printers, Projects, Or Partnerships - We're Ready When You Are
                </p>
              </SlideInUp>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Let's Build Smarter, Together Section */}
      <section className="relative w-full bg-white py-[80px] md:py-[120px]">
        <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[60px] w-full max-w-[1280px] mx-auto px-4 md:px-8">
          {/* Text Content */}
          <SlideInLeft delay={0.5} duration={0.8}>
            <div className="flex flex-col justify-center items-start w-full lg:w-[712px]">
              <div className="flex flex-col items-start gap-[20px] lg:gap-[28px] w-full">
                {/* Main Heading */}
                <h3 className="text-subtitle-mobile md:text-subtitle font-semibold leading-[130%] tracking-[-0.03em] text-[#0D192D] w-full">
                  Let's Build Smarter, Together
                </h3>

                {/* Description */}
                <p className="text-card-mobile md:text-card font-medium leading-[22px] tracking-[-0.01em] text-[#1D3357] w-full">
                  We're redefining construction - bringing precision, sustainability, and innovation to every project.
                </p>
              </div>
            </div>
          </SlideInLeft>

          {/* Image */}
          <SlideInRight delay={0.6} duration={0.8}>
            <div 
              className="w-full lg:w-[508px] h-[300px] lg:h-[400px] bg-cover bg-center bg-no-repeat rounded-[24px] flex-none bg-[#D9D9D9]"
              style={{
                backgroundImage: `url('https://tvasta.blr1.cdn.digitaloceanspaces.com/media/ContactUs/contactus.jpg')`
              }}
            />
          </SlideInRight>
        </div>
      </section>
    </>
  );
};

export default BuildTogether;