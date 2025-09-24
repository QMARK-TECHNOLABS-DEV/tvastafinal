import React from 'react';

const OurWork = () => {
  return (
    <div className="w-full max-w-[1278px] px-4">
      <div className="flex flex-col items-center gap-[60px] w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-[297px] w-full">
          <h2 className="font-outfit font-semibold text-[32px] md:text-[48px] leading-[120%] text-[#0D192D]">
            Our Work
          </h2>
          <span className="font-outfit font-semibold text-base leading-[20px] text-white bg-[#1D3357] px-4 py-2 rounded-full">
            View All Work
          </span>
        </div>

        {/* Content Groups */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 w-full">
          {/* Card 1 - Printers */}
          <div className="relative w-full max-w-[400px] h-[400px] rounded-[24px] overflow-hidden group">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url('/images/ourwork1.png')`
              }}
            >
              {/* Category Badge */}
              <div className="absolute top-4 left-4 flex justify-center items-center px-3 py-2 bg-white border border-[rgba(255,255,255,0.15)] rounded-full">
                <span className="font-outfit font-semibold text-base text-[#0D192D]">
                  Printers
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-4 left-4 flex flex-col gap-4 w-[366px] max-w-[calc(100%-32px)]">
                <p className="font-outfit font-semibold text-lg leading-[160%] text-white">
                  Precision-built printers for fast, reliable, and scalable 3D construction.
                </p>
                
                <button className="flex justify-center items-center px-7 py-4 gap-[10px] bg-white rounded-[66px] w-fit">
                  <span className="font-outfit font-semibold text-sm leading-[18px] text-[#0D192D]">
                    Explore Printers
                  </span>
                  <svg className="w-5 h-5 text-[#0D192D]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 - Collection */}
          <div className="relative w-full max-w-[400px] h-[400px] rounded-[24px] overflow-hidden group">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url('/images/ourwork2.png')`
              }}
            >
              {/* Category Badge */}
              <div className="absolute top-4 left-4 flex justify-center items-center px-3 py-2 bg-white border border-[rgba(255,255,255,0.15)] rounded-full">
                <span className="font-outfit font-semibold text-base text-[#0D192D]">
                  Smart Furniture
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-4 left-4 flex flex-col gap-4 w-[366px] max-w-[calc(100%-32px)]">
                <p className="font-outfit font-semibold text-lg leading-[160%] text-white">
                  Design-forward pieces that blend utility with 3D-printed form.
                </p>
                
                <button className="flex justify-center items-center px-7 py-4 gap-[10px] bg-white rounded-[66px] w-fit">
                  <span className="font-outfit font-semibold text-sm leading-[18px] text-[#0D192D]">
                    View Collection
                  </span>
                  <svg className="w-5 h-5 text-[#0D192D]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 - Case Studies */}
          <div className="relative w-full max-w-[400px] h-[400px] rounded-[24px] overflow-hidden group">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url('/images/ourwork3.png')`
              }}
            >
              {/* Category Badge */}
              <div className="absolute top-4 left-4 flex justify-center items-center px-3 py-2 bg-white border border-[rgba(255,255,255,0.15)] rounded-full">
                <span className="font-outfit font-semibold text-base text-[#0D192D]">
                  Real World
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-4 left-4 flex flex-col gap-4 w-[366px] max-w-[calc(100%-32px)]">
                <p className="font-outfit font-semibold text-lg leading-[160%] text-white">
                  From homes to shelters, real-world impact across sectors.
                </p>
                
                <button className="flex justify-center items-center px-7 py-4 gap-[10px] bg-white rounded-[66px] w-fit">
                  <span className="font-outfit font-semibold text-sm leading-[18px] text-[#0D192D]">
                    View Case Studies
                  </span>
                  <svg className="w-5 h-5 text-[#0D192D]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
