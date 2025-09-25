import React from 'react';
import { fadeInUp, slideInFromLeft, slideInFromRight } from '../../utils/animations.jsx';

const ProductsCustom = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-[40px] md:gap-[60px] w-full max-w-[1280px] px-4 md:px-8">
      {/* Content */}
      <div 
        className="flex flex-col justify-center items-start py-6 gap-[10px] w-full md:flex-1 order-2 md:order-1"
        {...slideInFromLeft}
      >
        <div className="flex flex-col items-start gap-[28px] w-full">
          {/* Title */}
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold leading-[1.3] tracking-[-0.03em] text-[#0D192D] w-full">
            Want Something Custom?
          </h2>
          
          {/* Description */}
          <p className="text-[18px] md:text-[20px] lg:text-[24px] font-normal leading-[1.25] text-[#1D3357] w-full">
            Get in touch for bespoke furniture solutions or to integrate Tvasta products into your next public or private project.
          </p>
          
          {/* Contact Button */}
          <button 
            className="flex items-center justify-center px-7 py-4 gap-[10px] bg-[#1D3357] rounded-[20px] hover:bg-[#2d4a73] transition-colors duration-300 group"
            {...fadeInUp}
          >
            <span className="text-[16px] md:text-[18px] font-semibold text-white">
              Contact Us
            </span>
            <div className="w-[20px] h-[20px] bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-[12px] h-[12px] text-[#1D3357]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </button>
        </div>
      </div>
      
      {/* Image */}
      <div 
        className="w-full md:w-[508px] h-[250px] md:h-[350px] rounded-[24px] overflow-hidden order-1 md:order-2"
        {...slideInFromRight}
      >
        <img 
          src="/images/Products/wantcustom.jpg" 
          alt="Custom Furniture Solutions"
          className="w-full h-full object-cover bg-[#D9D9D9] hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default ProductsCustom;
