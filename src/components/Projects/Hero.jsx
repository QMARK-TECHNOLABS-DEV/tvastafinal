import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const Hero = () => {
  const heroBg = '/images/Who%20Are%20We/herobg.png';

  return (
    <section 
      className="relative w-full h-[660px] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Background blur effect */}
      <div className="absolute top-[-143px] left-1/2 transform -translate-x-1/2 w-[286px] h-[286px] bg-gray-400 rounded-full blur-[250px] opacity-50"></div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80"></div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center gap-[30px] max-w-[1256px] mx-auto text-center pt-[80px]"
        >
          <motion.h1
            variants={fadeInUp}
            className="font-outfit font-semibold text-[54px] leading-[106.2%] text-[#0D192D] tracking-[-0.02em] capitalize
                       xl:text-[54px]
                       lg:text-[48px]
                       md:text-[42px]
                       sm:text-[36px]
                       xs:text-[32px]"
          >
            Our Projects
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="font-outfit font-semibold text-[24px] leading-[170%] text-[#0D192D] tracking-[-0.02em] max-w-[1086px] text-center
                       xl:text-[24px]
                       lg:text-[22px]
                       md:text-[20px]
                       sm:text-[18px] sm:px-4
                       xs:text-[16px] xs:px-2"
          >
            Building everything from India's first 3D-printed home to smart pods and resilient shelters.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
