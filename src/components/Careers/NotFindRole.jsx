import React from 'react';
import { FadeIn, SlideInUp, AnimatedButton } from '../../utils/animations.jsx';

const NotFindRole = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-[60px] w-full max-w-[1280px] px-4 md:px-0">
      {/* Text Content */}
      <SlideInUp delay={0.2} duration={0.8}>
        <div className="flex flex-col justify-center items-start gap-[10px] w-full md:w-[712px]">
          <div className="flex flex-col items-start gap-[28px] w-full">
            {/* Title */}
            <FadeIn delay={0.4} duration={0.6}>
              <h2 className="font-outfit font-semibold text-[32px] md:text-[44px] leading-[130%] tracking-[-0.03em] text-[#0D192D]">
                Didn't Find a Role That Fits?
              </h2>
            </FadeIn>

            {/* Subtitle */}
            <FadeIn delay={0.6} duration={0.6}>
              <p className="w-full font-outfit font-medium text-[18px] md:text-[20px] leading-[22px] tracking-[-0.01em] text-[#1D3357]">
                We're always on the lookout for exceptional talent.
              </p>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={0.8} duration={0.6}>
              <p className="w-full font-outfit font-medium text-[18px] md:text-[20px] leading-[22px] tracking-[-0.01em] text-[#1D3357]">
                Drop us a message or send your resume - we'd love to hear from you.
              </p>
            </FadeIn>
          </div>

          {/* Contact Button */}
          <SlideInUp delay={1.0} duration={0.6}>
            <AnimatedButton 
              className="flex flex-row justify-center items-center py-[16px] px-[28px] gap-[10px] bg-[#1D3357] rounded-[20px] mt-6"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-outfit font-semibold text-[16px] leading-[20px] text-white">
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
        <div className="w-full md:w-[508px] h-[300px] md:h-[400px] rounded-[24px] overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://tvasta.blr1.cdn.digitaloceanspaces.com/media/careers/contactimg.jpg')`,
              backgroundColor: '#D9D9D9'
            }}
          />
        </div>
      </SlideInUp>
    </div>
  );
};

export default NotFindRole;