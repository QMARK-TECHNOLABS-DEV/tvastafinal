import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, AnimatedButton } from '../../utils/animations.jsx';

const ContactCTA = () => {
  return (
    <section className="flex flex-row items-center gap-[60px] w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col justify-center items-start gap-[10px] flex-1 max-w-[712px]">
        {/* Text Content */}
        <div className="flex flex-col items-start gap-[28px] w-full">
          <FadeIn delay={0.2}>
            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-semibold leading-[130%] tracking-[-0.03em] text-[#0D192D] font-['Outfit']">
              Got more questions?
            </h2>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-medium leading-[22px] tracking-[-0.01em] text-[#1D3357] font-['Outfit']">
              We're just a call away.
            </p>
          </FadeIn>

          {/* Contact Button */}
          <FadeIn delay={0.6}>
            <AnimatedButton className="flex flex-row justify-center items-center py-4 px-7 gap-[10px] w-[166px] h-[52px] bg-[#1D3357] rounded-[20px] hover:bg-[#2a4a73] transition-all duration-300 group">
              <span className="text-white font-semibold text-[16px] leading-[20px] font-['Outfit']">
                Contact Us
              </span>
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-[#1D3357]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </AnimatedButton>
          </FadeIn>
        </div>
      </div>

      {/* Image Container */}
      <FadeIn delay={0.8} className="flex-none w-[508px] h-[400px] hidden lg:block">
        <div 
          className="w-full h-full bg-gray-200 rounded-[24px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://tvasta.blr1.cdn.digitaloceanspaces.com/media/FAQs/contactimg.jpg'), linear-gradient(135deg, #f5f5f5, #e0e0e0)`
          }}
        >
          {/* Fallback content if image is not available */}
          {/* <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 rounded-[24px]">
            <div className="text-center p-8">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <p className="text-gray-500 font-['Outfit']">Contact Support</p>
            </div>
          </div> */}
        </div>
      </FadeIn>
    </section>
  );
};

export default ContactCTA;