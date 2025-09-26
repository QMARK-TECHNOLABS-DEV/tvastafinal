import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, SlideInUp, AnimatedCard } from '../../utils/animations.jsx';

const OnStageAndOnSite = () => {
  const stageItems = [
    {
      image: '/images/tvastastories/onstageandonsite1.jpg',
      title: "Industry panel participation"
    },
    {
      image: '/images/tvastastories/onstageandonsite2.jpg',
      title: "Academic sessions at IITs"
    },
    {
      image: '/images/tvastastories/onstageandonsite3.jpg',
      title: "Print demos at expos"
    }
  ];

  return (
    <div className="flex flex-col items-center gap-[60px] w-full max-w-[1441px] mx-auto px-4 md:px-8 lg:px-20">
      {/* Section Header */}
      <FadeIn className="flex flex-col justify-center items-center gap-5 w-full px-4 md:px-8 lg:px-20">
        <SlideInUp delay={0.2}>
          <h2 className="w-full font-outfit font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-[125%] text-center text-[#0D192D] max-w-[1281px]">
            On Stage and On-Site
          </h2>
        </SlideInUp>
        
        <SlideInUp delay={0.4}>
          <p className="w-full max-w-[1035px] font-outfit font-medium text-[20px] md:text-[24px] lg:text-[28px] leading-[125%] text-center capitalize text-[#1D3357]">
            See where Tvasta's been—live demos, keynotes, and smart city showcases.
          </p>
        </SlideInUp>
      </FadeIn>

      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row items-center gap-5 w-full max-w-[1280px]">
        {stageItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, threshold: 0.1 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OnStageAndOnSite;