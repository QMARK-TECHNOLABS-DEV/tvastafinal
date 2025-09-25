import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, slideInFromLeft, staggerContainer } from '../../utils/animations';

const WhyChooseTvasta = () => {
  const features = [
    {
      icon: (
        <img 
          src="/images/Projects/Icon1.png" 
          alt="Speed of Execution" 
          className="w-5 h-5 object-contain filter brightness-0 invert"
        />
      ),
      title: 'Speed of Execution',
      description: 'Days, not months. Ideal for urgent or large-scale rollouts'
    },
    {
      icon: (
        <img 
          src="/images/Projects/logo2.png" 
          alt="Design Flexibility" 
          className="w-5 h-5 object-contain filter brightness-0 invert"
        />
      ),
      title: 'Design Flexibility',
      description: 'From curves to cores, match architectural ambition with structural precision.'
    },
    {
      icon: (
        <img 
          src="/images/Projects/icon3.png" 
          alt="Sustainable Innovation" 
          className="w-5 h-5 object-contain filter brightness-0 invert"
        />
      ),
      title: 'Sustainable Innovation',
      description: 'Less material, less waste, and up to 66% cement replaced.'
    }
  ];

  return (
    <section className="w-full bg-[#0D192D] py-[80px]">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-row items-start w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-20 gap-[60px]
                   lg:flex-row
                   md:flex-col md:gap-[40px] md:items-center"
      >
        {/* Left Content */}
        <motion.div
          variants={slideInFromLeft}
          className="flex flex-col items-start gap-[40px] w-full max-w-[632px]
                     lg:flex-1"
        >
          {/* Title with border */}
          <div className="flex flex-col items-start gap-[0px] w-full border-l-[5px] border-white pl-[40px]">
            <motion.h2
              variants={fadeInUp}
              className="font-outfit font-bold text-[48px] leading-[125%] text-white w-full
                         xl:text-[48px]
                         lg:text-[42px]
                         md:text-[36px]
                         sm:text-[32px]
                         xs:text-[28px]"
            >
              Why Choose Tvasta
            </motion.h2>
          </div>

          {/* Features */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-col items-start gap-[24px] w-full"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                className="flex flex-row items-start py-[8px] pr-[48px] pl-[32px] gap-[16px] w-full
                           sm:pr-[20px] sm:pl-[16px]"
              >
                {/* Icon */}
                <div className="flex flex-col justify-center items-center w-[24px] h-[24px] min-w-[24px] mt-1">
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col items-start gap-[16px] flex-1">
                  <h3 className="font-outfit font-bold text-[22px] leading-[27px] tracking-[0.02em] text-white
                                 lg:text-[22px]
                                 md:text-[20px]
                                 sm:text-[18px]">
                    {feature.title}
                  </h3>
                  <p className="font-outfit font-medium text-[20px] leading-[25px] text-[#F0F0F0] opacity-70
                                lg:text-[20px]
                                md:text-[18px]
                                sm:text-[16px]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-start gap-[10px] w-[240px] mt-[20px]"
          >
            <button className="flex flex-row justify-center items-center py-[16px] px-[28px] gap-[10px] w-full h-[52px] bg-white rounded-[66px] group hover:bg-gray-100 transition-colors duration-300">
              <span className="font-outfit font-semibold text-[18px] leading-[23px] text-[#0D192D] whitespace-nowrap">
                Let's Build Together
              </span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                <path 
                  d="M4.16669 15.8333L15.8334 4.16666M15.8334 4.16666H6.66669M15.8334 4.16666V13.3333" 
                  stroke="#0D192D" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={slideInFromLeft}
          custom={1}
          className="w-full max-w-[632px] h-[524px] flex-1 overflow-hidden rounded-[24px]
                     lg:flex-1
                     md:max-w-[500px] md:h-[400px]
                     sm:h-[350px]
                     xs:h-[300px]"
        >
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url('/images/Projects/Why%20Choose%20Tvasta.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseTvasta;
