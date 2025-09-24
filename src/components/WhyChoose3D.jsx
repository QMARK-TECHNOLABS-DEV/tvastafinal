import React from 'react';

const WhyChoose3D = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 w-full max-w-[1240px] px-4">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-[10px] w-full text-center">
        <h2 className="font-outfit font-semibold text-[32px] md:text-[48px] leading-[140%] text-[#0D192D]">
          Why Choose 3D Construction
        </h2>
        <p className="max-w-[807px] font-outfit font-medium text-[20px] md:text-[24px] leading-[160%] text-[#1D3357]">
          Build faster, waste less, and design without limits using precise 3D construction technology.
        </p>
      </div>

      {/* Features Grid */}
      <div className="flex flex-col gap-8 w-full">
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 w-full">
          {/* Faster Time to Build */}
          <div className="flex flex-col gap-5 w-full lg:w-[597px]">
            <div className="relative w-full h-[318px] rounded-[10px] overflow-hidden">
              <img 
                src="/images/whychose3d1.png" 
                alt="Faster Time to Build" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <p className="font-outfit font-medium text-[22px] leading-[120%] text-center text-white max-w-[551px] px-6">
                  Complete homes and infrastructure in days, not months. Ideal for urgent or large-scale needs.
                </p>
              </div>
            </div>
            <h3 className="font-outfit font-semibold text-[26px] leading-[120%] text-[#0D192D]">
              Faster Time to Build
            </h3>
          </div>

          {/* Design Without Limits */}
          <div className="flex flex-col gap-5 w-full lg:w-[597px]">
            <div className="relative w-full h-[318px] rounded-[10px] overflow-hidden">
              <img 
                src="/images/whychose3d2.png" 
                alt="Design Without Limits" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <p className="font-outfit font-medium text-[22px] leading-[120%] text-center text-white max-w-[551px] px-6">
                  Print complex, organic forms without formwork. Bring bold architectural ideas to life.
                </p>
              </div>
            </div>
            <h3 className="font-outfit font-semibold text-[26px] leading-[120%] text-[#0D192D]">
              Design Without Limits
            </h3>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 w-full">
          {/* Lower Material Waste */}
          <div className="flex flex-col gap-5 w-full lg:w-[597px]">
            <div className="relative w-full h-[318px] rounded-[10px] overflow-hidden">
              <img 
                src="/images/whychose3d3.png" 
                alt="Lower Material Waste" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <p className="font-outfit font-medium text-[22px] leading-[120%] text-center text-white max-w-[551px] px-6">
                  Precision printing cuts down material use and reduces construction waste upto 80%.
                </p>
              </div>
            </div>
            <h3 className="font-outfit font-semibold text-[26px] leading-[120%] text-[#0D192D]">
              Lower Material Waste
            </h3>
          </div>

          {/* Built to Withstand */}
          <div className="flex flex-col gap-5 w-full lg:w-[597px]">
            <div className="relative w-full h-[318px] rounded-[10px] overflow-hidden">
              <img 
                src="/images/whychose3d4.png" 
                alt="Built to Withstand" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <p className="font-outfit font-medium text-[22px] leading-[120%] text-center text-white max-w-[551px] px-6">
                  Structures tested across diverse climates, built to last, backed by real-world performance.
                </p>
              </div>
            </div>
            <h3 className="font-outfit font-semibold text-[26px] leading-[120%] text-[#0D192D]">
              Built to Withstand
            </h3>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex items-start gap-10 mt-6">
        <button className="flex items-center gap-[10px]">
          <span className="font-outfit font-semibold text-lg leading-[23px] text-white">
            See How It Works
          </span>
          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-[#1D3357]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default WhyChoose3D;
