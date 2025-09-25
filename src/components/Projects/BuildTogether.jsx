import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, slideInFromLeft, staggerContainer } from '../../utils/animations';

const BuildTogether = () => {
  return (
    <section className="w-full py-[80px] bg-white">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-row items-center gap-[60px] w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8
                   lg:flex-row
                   md:flex-col md:gap-[40px] md:items-center"
      >
        {/* Left Content */}
        <motion.div
          variants={slideInFromLeft}
          className="flex flex-col justify-center items-start py-[24px] gap-[28px] w-full max-w-[712px]
                     lg:flex-1"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-outfit font-semibold text-[44px] leading-[130%] tracking-[-0.03em] text-[#0D192D] w-full
                       xl:text-[44px]
                       lg:text-[38px]
                       md:text-[34px]
                       sm:text-[30px]
                       xs:text-[26px]"
          >
            Let's Build Something Together
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="font-outfit font-normal text-[24px] leading-[30px] text-[#1D3357] w-full
                       xl:text-[24px]
                       lg:text-[22px]
                       md:text-[20px]
                       sm:text-[18px]
                       xs:text-[16px]"
          >
            Have a project in mind? Connect with us to bring your vision to life.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            variants={fadeInUp}
            className="flex flex-row justify-center items-center py-[20px] px-[24px] gap-[10px] w-[201px] h-[57px] bg-[#1D3357] rounded-[35px] group hover:bg-[#0D192D] transition-colors duration-300"
          >
            <span className="font-outfit font-medium text-[24px] leading-[130%] text-white">
              Contact Us
            </span>
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={slideInFromLeft}
          custom={1}
          className="w-full max-w-[508px] h-[350px] rounded-[24px] overflow-hidden
                     lg:flex-none lg:max-w-[508px]
                     md:max-w-[450px] md:h-[320px]
                     sm:h-[300px] sm:max-w-[400px]
                     xs:h-[250px] xs:max-w-[350px]"
        >
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url('/images/Projects/letsbuild.jpg')`,
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
