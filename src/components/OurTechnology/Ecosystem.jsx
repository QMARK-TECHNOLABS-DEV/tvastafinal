import React from 'react';
import { FadeIn, SlideInUp, StaggeredList, AnimatedCard } from '../../utils/animations.jsx';

const Ecosystem = () => {
  const techImages = [
    'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/OurTechnology/Our%203D%20Construction%20Ecosystem%201.jpg',
    'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/OurTechnology/Our%203D%20Construction%20Ecosystem%202.jpg',
    'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/OurTechnology/Our%203D%20Construction%20Ecosystem%203.jpg',
    'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/OurTechnology/Our%203D%20Construction%20Ecosystem%204.jpg',
    'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/OurTechnology/Our%203D%20Construction%20Ecosystem%205.jpg',
  ];

  const ecosystemData = [
    { title: '3D Printers', description: 'From industry-scale gantries to mobile robotic arms, our machines print faster and smarter.', image: techImages[0] },
    { title: 'Accessories & Turnkey Services', description: 'We offer more than machinery, from pumps to project execution, we\'re your build partner.', image: techImages[1] },
    { title: '3D Printed Furniture', description: 'Functional, sculptural, and built to last, our urban furniture blends aesthetic precision with print performance.', image: techImages[2] },
    { title: 'Software', description: 'From design to deployment, our in-house platform simplifies slicing, simulation, and print control.', image: techImages[3] },
    { title: 'Sustainable Materials', description: 'From geopolymer blends to eco-concrete, our material portfolio supports sustainable, high-performance 3D printing across diverse applications.', image: techImages[4] }
  ];

  return (
    <section className="w-full bg-white pt-[120px]">
      <div className="flex flex-col items-center px-[80px] gap-16 w-[1440px] mx-auto">
        <div className="flex flex-col items-center gap-[10px] w-[1280px] h-[115px]">
          <FadeIn delay={0.2}>
            <h2 className="font-outfit font-semibold text-[48px] leading-[140%] text-[#0D192D] text-center w-[1280px] h-[67px]">
              Our 3D Construction Ecosystem
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="font-outfit font-medium text-[24px] leading-[160%] text-[#1D3357] text-center w-[445px] h-[38px]">
              Where Innovation Becomes Infrastructure
            </p>
          </FadeIn>
        </div>
        
        <StaggeredList 
          className="flex flex-col justify-center items-center gap-10 w-[1280px] h-[1280px]"
          staggerDelay={0.2}
        >
          {/* Row 1 - Two cards */}
          <div className="flex items-center gap-10 w-[1280px] h-[400px]">
            <AnimatedCard className="relative w-[620px] h-[400px] rounded-[24px] overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ 
                  background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url(${ecosystemData[0].image}) center/cover no-repeat`
                }}
              >
                <div className="absolute top-[18px] left-[18px] bg-white rounded-full px-3 py-2 font-outfit font-semibold text-[20px] text-[#0D192D] border border-white/15">
                  {ecosystemData[0].title}
                </div>
                <div className="absolute bottom-[18px] left-[18px] text-white font-outfit font-semibold text-[20px] w-[584px]">
                  {ecosystemData[0].description}
                </div>
              </div>
            </AnimatedCard>
            
            <AnimatedCard className="relative w-[620px] h-[400px] rounded-[24px] overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ 
                  background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url(${ecosystemData[1].image}) center/cover no-repeat`
                }}
              >
                <div className="absolute top-[18px] left-[18px] bg-white rounded-full px-3 py-2 font-outfit font-semibold text-[20px] text-[#0D192D] border border-white/15 w-[320px] text-center whitespace-nowrap">
                  {ecosystemData[1].title}
                </div>
                <div className="absolute bottom-[18px] left-[18px] text-white font-outfit font-semibold text-[20px] w-[584px]">
                  {ecosystemData[1].description}
                </div>
              </div>
            </AnimatedCard>
          </div>
          
          {/* Row 2 - Two cards */}
          <div className="flex items-center gap-10 w-[1280px] h-[400px]">
            <AnimatedCard className="relative w-[620px] h-[400px] rounded-[24px] overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ 
                  background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url(${ecosystemData[2].image}) center/cover no-repeat`
                }}
              >
                <div className="absolute top-[18px] left-[18px] bg-white rounded-full px-3 py-2 font-outfit font-semibold text-[20px] text-[#0D192D] border border-white/15 w-[220px] text-center whitespace-nowrap">
                  {ecosystemData[2].title}
                </div>
                <div className="absolute bottom-[18px] left-[18px] text-white font-outfit font-semibold text-[20px] w-[584px]">
                  {ecosystemData[2].description}
                </div>
              </div>
            </AnimatedCard>
            
            <AnimatedCard className="relative w-[620px] h-[400px] rounded-[24px] overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ 
                  background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url(${ecosystemData[3].image}) center/cover no-repeat`
                }}
              >
                <div className="absolute top-[18px] left-[18px] bg-white rounded-full px-3 py-2 font-outfit font-semibold text-[20px] text-[#0D192D] border border-white/15 w-[108px]">
                  {ecosystemData[3].title}
                </div>
                <div className="absolute bottom-[18px] left-[18px] text-white font-outfit font-semibold text-[20px] w-[584px]">
                  {ecosystemData[3].description}
                </div>
              </div>
            </AnimatedCard>
          </div>
          
          {/* Row 3 - Full width card */}
          <div className="flex items-center gap-10 w-[1280px] h-[400px]">
            <AnimatedCard className="relative w-[1280px] h-[400px] rounded-[24px] overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url(${ecosystemData[4].image})`
                }}
              >
                <div className="absolute top-[18px] left-[18px] bg-white rounded-full flex justify-center items-center px-3 py-2 font-outfit font-semibold text-[20px] text-[#0D192D] border border-white/15 w-[220px] h-[48px] whitespace-nowrap">
                  {ecosystemData[4].title}
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 top-[318px] text-white font-outfit font-semibold text-[20px] leading-[160%] w-[1244px] h-[64px] text-center">
                  {ecosystemData[4].description}
                </div>
              </div>
            </AnimatedCard>
          </div>
        </StaggeredList>
      </div>
    </section>
  );
};

export default Ecosystem;
