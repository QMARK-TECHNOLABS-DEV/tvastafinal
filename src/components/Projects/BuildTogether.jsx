import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, slideInFromLeft, staggerContainer } from '../../utils/animations';

const BuildTogether = () => {
  return (
    <section className="w-full py-[60px] sm:py-[70px] md:py-[80px] bg-white">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center gap-[40px] md:gap-[50px] lg:gap-[60px] w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16"
      >
        {/* Left Content */}
        <motion.div
          variants={slideInFromLeft}
          className="flex flex-col justify-center items-start lg:items-start py-[20px] sm:py-[22px] md:py-[24px] gap-[24px] sm:gap-[26px] md:gap-[28px] w-full max-w-[712px] lg:flex-1 text-center lg:text-left"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[44px] font-semibold leading-[130%] tracking-[-0.03em] text-[#0D192D] w-full font-['Outfit']"
          >
            Let's Build Something Together
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-normal leading-[30px] text-[#1D3357] w-full font-['Outfit']"
          >
            Have a project in mind? Connect with us to bring your vision to life.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            variants={fadeInUp}
            className="flex flex-row justify-center items-center py-3 sm:py-3.5 md:py-4 px-5 sm:px-6 md:px-7 gap-[8px] sm:gap-[9px] md:gap-[10px] bg-[#1D3357] rounded-[35px] group hover:bg-[#0D192D] transition-colors duration-300 whitespace-nowrap"
          >
            <span className="text-base sm:text-lg md:text-xl font-medium leading-[130%] text-white font-['Outfit']">
              Contact Us
            </span>
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={slideInFromLeft}
          custom={1}
          className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[508px] h-[250px] sm:h-[280px] md:h-[320px] lg:h-[350px] rounded-[20px] sm:rounded-[22px] md:rounded-[24px] overflow-hidden lg:flex-none"
        >
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url('https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Projects/letsbuild.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BuildTogether;
