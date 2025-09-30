import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, SlideInUp, AnimatedCard } from '../../utils/animations.jsx';

const InTheSpotlight = () => {
  const spotlightItems = [
    {
      image: 'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/tvastastories/inthespotlight1.jpg',
      title: "India's First 3D Printed House with Ministry of Housing & Urban Affairs"
    },
    {
      image: 'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/tvastastories/inthespotlight2.jpg',
      title: "IIT Madras Collaboration Coverage"
    },
    {
      image: 'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/tvastastories/inthespotlight3.jpg',
      title: "National Awards or Certifications"
    }
  ];

  return (
    <section className="flex flex-col items-center gap-[60px] w-full max-w-[1280px] mx-auto px-4 md:px-8 py-[80px] md:py-[100px]">
      {/* Section Header */}
      <div className="flex flex-col justify-center items-center gap-5 w-full">
        <FadeIn delay={0.2} duration={0.8}>
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] xl:text-[48px] font-semibold leading-[1.25] text-center text-[#0D192D] max-w-[800px]">
            In the Spotlight
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.4} duration={0.8}>
          <p className="text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-medium leading-[1.25] text-center text-[#1D3357] max-w-[900px]">
            Breakthroughs, launches, and landmark collaborations that define who we are and where we're going.
          </p>
        </FadeIn>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row items-center gap-5 w-full">
        {spotlightItems.map((item, index) => (
          <SlideInUp
            key={index}
            delay={0.2 + index * 0.1}
            duration={0.8}
            threshold={0}
            className="flex-1 w-full lg:w-auto"
          >
            <AnimatedCard
              className="flex flex-col justify-end items-start p-3 gap-2.5 w-full h-[400px] md:h-[450px] lg:h-[500px] bg-[#606060] rounded-2xl overflow-hidden cursor-pointer"
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Content Card */}
              <motion.div 
                className="flex justify-center items-center p-2.5 gap-2.5 w-full bg-white rounded-[10px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <p className="font-outfit font-medium text-[18px] md:text-[20px] lg:text-[22px] leading-[28px] text-[#0D192D] text-center">
                  {item.title}
                </p>
              </motion.div>
            </AnimatedCard>
          </SlideInUp>
        ))}
      </div>
    </section>
  );
};

export default InTheSpotlight;