import React from 'react';
import { FadeIn, SlideInLeft, SlideInRight } from '../../utils/animations.jsx';

const StressTested = () => {
  const stressTestedImage = '/images/OurTechnology/Stress-Tested%20and%20Certified%20for%20Performance.jpg';

  return (
    <section className="w-full bg-white pt-[120px]">
      <div className="w-full max-w-[1440px] mx-auto px-20">
        <div className="flex justify-end items-end gap-[106px] w-[1240px] h-[524px] mx-auto">
          <SlideInLeft delay={0.3}>
            <div 
              className="w-[424px] h-[524px] rounded-[16px] bg-cover bg-center bg-no-repeat flex-shrink-0"
              style={{ 
                background: `url(${stressTestedImage}) center/cover no-repeat, #151519`
              }}
            />
          </SlideInLeft>
          
          <SlideInRight delay={0.5}>
            <div className="flex flex-col items-start py-6 gap-5 w-[710px] h-[524px]">
              <div className="flex flex-col items-start gap-6 w-[710px] h-[264px]">
                <FadeIn delay={0.7}>
                  <h2 className="font-outfit font-semibold text-[48px] leading-[60px] text-[#0D192D] w-[710px] h-[120px]">
                    Stress-Tested and Certified for Performance
                  </h2>
                </FadeIn>
                
                <div className="flex flex-col items-start gap-2 w-[710px] h-[120px]">
                  <FadeIn delay={0.9}>
                    <p className="font-outfit font-normal text-[24px] leading-[30px] text-[#1D3357] w-[710px] h-[120px]">
                      Our systems are made in India, stress-tested across its most demanding terrains, from sub-zero regions to coastal flood zones. Every product complies with national standards like BMTPC PACS and is built for global application.
                    </p>
                  </FadeIn>
                </div>
              </div>
              
              <div className="flex flex-col items-start gap-12 w-[710px] h-[192px]">
                <div className="flex items-center gap-[250px] w-[710px] h-[69px]">
                  <FadeIn delay={1.1}>
                    <div className="flex flex-col items-start gap-[10px] w-[208px] h-[69px]">
                      <div className="font-outfit font-medium text-[48px] leading-[60px] text-[#1D3357] w-[208px] h-[34px]">20+</div>
                      <div className="font-outfit font-medium text-[20px] leading-[25px] text-[#0D192D] w-[208px] h-[25px]">projects across 10 cities</div>
                    </div>
                  </FadeIn>
                  <FadeIn delay={1.3}>
                    <div className="flex flex-col items-start gap-[10px] w-[209px] h-[69px]">
                      <div className="font-outfit font-medium text-[48px] leading-[60px] text-[#1D3357] w-[209px] h-[34px]">10m</div>
                      <div className="font-outfit font-medium text-[20px] leading-[25px] text-[#0D192D] w-[171px] h-[25px]">Print Height</div>
                    </div>
                  </FadeIn>
                </div>
                <div className="flex items-center gap-[250px] w-[710px] h-[75px]">
                  <FadeIn delay={1.5}>
                    <div className="flex flex-col items-start gap-[10px] w-[212px] h-[75px]">
                      <div className="font-outfit font-medium text-[32px] leading-[40px] text-[#1D3357] w-[212px] h-[40px]">BMTPC-PACS</div>
                      <div className="font-outfit font-medium text-[20px] leading-[25px] text-[#0D192D] w-[164px] h-[25px]">certified machines</div>
                    </div>
                  </FadeIn>
                  <FadeIn delay={1.7}>
                    <div className="flex flex-col items-start gap-[10px] w-[176px] h-[75px]">
                      <div className="font-outfit font-medium text-[32px] leading-[40px] text-[#1D3357] w-[176px] h-[40px]">India's first</div>
                      <div className="font-outfit font-medium text-[20px] leading-[25px] text-[#0D192D] w-[151px] h-[25px]">3D printed house</div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};

export default StressTested;
