import React from 'react';
import { FadeIn, SlideInUp, AnimatedButton } from '../../utils/animations.jsx';

const NotFindRole = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-[40px] sm:gap-[50px] lg:gap-[60px] w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-0">
      {/* Text Content */}
      <SlideInUp delay={0.2} duration={0.8}>
        <div className="flex flex-col justify-center items-start gap-[10px] w-full lg:w-[712px]">
          <div className="flex flex-col items-start gap-[28px] w-full">
            {/* Title */}
            <FadeIn delay={0.4} duration={0.6}>
              <h2 className="font-outfit font-semibold text-[28px] sm:text-[32px] lg:text-[38px] xl:text-[44px] leading-[130%] tracking-[-0.03em] text-[#0D192D]">
                Didn't Find a Role That Fits?
              </h2>
            </FadeIn>

            {/* Subtitle */}
            <FadeIn delay={0.6} duration={0.6}>
              <p className="w-full font-outfit font-medium text-[16px] sm:text-[18px] lg:text-[19px] xl:text-[20px] leading-[140%] sm:leading-[130%] lg:leading-[22px] tracking-[-0.01em] text-[#1D3357]">
                We're always on the lookout for exceptional talent.
              </p>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={0.8} duration={0.6}>
              <p className="w-full font-outfit font-medium text-[16px] sm:text-[18px] lg:text-[19px] xl:text-[20px] leading-[140%] sm:leading-[130%] lg:leading-[22px] tracking-[-0.01em] text-[#1D3357]">
                Drop us a message or send your resume - we'd love to hear from you.
              </p>
            </FadeIn>
          </div>

          {/* Contact Button */}
          <SlideInUp delay={1.0} duration={0.6}>
            <AnimatedButton 
              className="flex flex-row justify-center items-center py-[14px] px-[24px] sm:py-[15px] sm:px-[26px] lg:py-[16px] lg:px-[28px] gap-[10px] bg-[#1D3357] rounded-[20px] mt-4 sm:mt-5 lg:mt-6"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-outfit font-semibold text-[14px] sm:text-[15px] lg:text-[16px] leading-[20px] text-white">
                Contact Us
              </span>
              
              {/* Small white circle indicator */}
              <div className="w-[20px] h-[20px] bg-white rounded-[63px]"></div>
            </AnimatedButton>
          </SlideInUp>
        </div>
      </SlideInUp>

      {/* Image */}
      <SlideInUp delay={0.4} duration={0.8}>
        <div className="w-full sm:w-[400px] lg:w-[450px] xl:w-[508px] h-[250px] sm:h-[300px] lg:h-[350px] xl:h-[400px] rounded-[20px] sm:rounded-[22px] lg:rounded-[24px] overflow-hidden">
          <img 
            src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/careers/contactimg.jpg"
            alt="Contact us - Join Tvasta team"
            className="w-full h-full object-cover object-center"
            style={{
              backgroundColor: '#D9D9D9'
            }}
          />
        </div>
      </SlideInUp>
    </div>
  );
};

export default NotFindRole;