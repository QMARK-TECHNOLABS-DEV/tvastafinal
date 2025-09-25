import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, slideInFromLeft } from '../../utils/animations';

const ExploreBuilds = () => {
  const [activeCategory, setActiveCategory] = useState('Public Infrastructure');

  const categories = [
    'Commercial',
    'Public Infrastructure', 
    'Residential'
  ];

  const projects = [
    {
      id: 1,
      category: 'Commercial',
      title: 'Project Name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/images/Projects/Explore Our Builds1.png'
    },
    {
      id: 2,
      category: 'Public Infrastructure',
      title: 'Project Name',
      description: 'Porem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/images/Projects/Explore Our Builds2.png'
    },
    {
      id: 3,
      category: 'Residential',
      title: 'Project Name',
      description: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/images/Projects/Explore Our Builds3.png'
    },
    {
      id: 4,
      category: 'Commercial',
      title: 'Project Name',
      description: 'Morem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/images/Projects/Explore Our Builds4.png'
    },
    {
      id: 5,
      category: 'Public Infrastructure',
      title: 'Project Name',
      description: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/images/Projects/Explore Our Builds5.png'
    },
    {
      id: 6,
      category: 'Residential',
      title: 'Project Name',
      description: 'Morem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/images/Projects/Explore Our Builds6.png'
    }
  ];

  // Show all projects by default, filter only when a specific category is selected
  const allProjects = projects;

  return (
    <section className="w-full py-[80px] bg-white">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-col items-center gap-[60px] w-full max-w-[1440px] mx-auto"
      >
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col justify-center items-center gap-[20px] w-full px-4 sm:px-6 lg:px-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-outfit font-semibold text-[48px] leading-[125%] text-[#0D192D] text-center
                       xl:text-[48px]
                       lg:text-[42px]
                       md:text-[36px]
                       sm:text-[32px]
                       xs:text-[28px]"
          >
            Explore Our Builds
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="font-outfit font-medium text-[28px] leading-[125%] text-[#1D3357] text-center capitalize max-w-[1200px]
                       xl:text-[28px]
                       lg:text-[24px]
                       md:text-[22px]
                       sm:text-[20px] sm:px-4
                       xs:text-[18px] xs:px-2"
          >
            Projects Powered By Tvasta's Technology—Across Terrains, Timelines, And Typologies.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col justify-center items-center w-full px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-row justify-center items-center py-[11px] px-[60px] gap-[62px] bg-[#F1F1F1] rounded-[200px]
                          xl:gap-[62px] xl:px-[60px]
                          lg:gap-[50px] lg:px-[50px]
                          md:gap-[30px] md:px-[40px] md:py-[10px]
                          sm:gap-[20px] sm:px-[30px] sm:py-[8px]
                          xs:gap-[15px] xs:px-[20px] xs:py-[8px] xs:flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 px-[28px] py-[12px] rounded-[58px] font-outfit text-[20px] leading-[120%] tracking-[-0.02em] capitalize transition-all duration-300 whitespace-nowrap
                           xl:text-[20px] xl:px-[28px] xl:py-[12px]
                           lg:text-[18px] lg:px-[24px] lg:py-[10px]
                           md:text-[16px] md:px-[20px] md:py-[8px]
                           sm:text-[15px] sm:px-[18px] sm:py-[7px]
                           xs:text-[14px] xs:px-[16px] xs:py-[6px]
                           ${activeCategory === category
                             ? 'bg-white text-[#0D192D] shadow-[0px_4px_4px_rgba(0,0,0,0.05)] border border-[#DDDDDD]'
                             : 'text-[#0D192D] hover:bg-white/50'
                           }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          className="w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]"
        >
          {/* First Row */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-row justify-center items-center gap-[40px] w-full mb-[40px]
                       xl:gap-[40px]
                       lg:gap-[30px] lg:flex-row
                       md:gap-[25px] md:flex-row
                       sm:gap-[20px] sm:flex-col
                       xs:gap-[15px] xs:flex-col"
          >
            {allProjects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                variants={slideInFromLeft}
                custom={index}
                className="flex flex-col justify-between items-start p-[16px] gap-[222px] w-full max-w-[400px] h-[400px] rounded-[24px] overflow-hidden relative group cursor-pointer
                           xl:h-[400px] xl:max-w-[400px]
                           lg:h-[380px] lg:max-w-[380px]
                           md:h-[350px] md:max-w-[350px] md:gap-[180px]
                           sm:h-[320px] sm:max-w-[320px] sm:gap-[160px]
                           xs:h-[280px] xs:max-w-[280px] xs:gap-[140px]"
                style={{
                  background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url('${project.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backdropFilter: 'blur(24px)'
                }}
              >
                {/* Project Tag */}
                <div className="flex flex-row justify-center items-center py-[8px] px-[12px] bg-white/90 backdrop-blur-[24px] border border-white/15 rounded-[9999px]">
                  <span className="font-outfit font-semibold text-[18px] leading-[160%] text-[#0D192D]
                                   lg:text-[18px]
                                   md:text-[16px]
                                   sm:text-[15px]
                                   xs:text-[14px]">
                    Project Name
                  </span>
                </div>

                {/* Project Description */}
                <div className="w-full">
                  <p className="font-outfit font-semibold text-[18px] leading-[160%] text-white w-full
                                lg:text-[18px]
                                md:text-[16px]
                                sm:text-[15px]
                                xs:text-[14px]">
                    {project.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>

          {/* Second Row */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-row justify-center items-center gap-[40px] w-full
                       xl:gap-[40px]
                       lg:gap-[30px] lg:flex-row
                       md:gap-[25px] md:flex-row
                       sm:gap-[20px] sm:flex-col
                       xs:gap-[15px] xs:flex-col"
          >
            {allProjects.slice(3, 6).map((project, index) => (
              <motion.div
                key={project.id}
                variants={slideInFromLeft}
                custom={index + 3}
                className="flex flex-col justify-between items-start p-[16px] gap-[222px] w-full max-w-[400px] h-[400px] rounded-[24px] overflow-hidden relative group cursor-pointer
                           xl:h-[400px] xl:max-w-[400px]
                           lg:h-[380px] lg:max-w-[380px]
                           md:h-[350px] md:max-w-[350px] md:gap-[180px]
                           sm:h-[320px] sm:max-w-[320px] sm:gap-[160px]
                           xs:h-[280px] xs:max-w-[280px] xs:gap-[140px]"
                style={{
                  background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url('${project.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backdropFilter: 'blur(24px)'
                }}
              >
                {/* Project Tag */}
                <div className="flex flex-row justify-center items-center py-[8px] px-[12px] bg-white/90 backdrop-blur-[24px] border border-white/15 rounded-[9999px]">
                  <span className="font-outfit font-semibold text-[18px] leading-[160%] text-[#0D192D]
                                   lg:text-[18px]
                                   md:text-[16px]
                                   sm:text-[15px]
                                   xs:text-[14px]">
                    Project Name
                  </span>
                </div>

                {/* Project Description */}
                <div className="w-full">
                  <p className="font-outfit font-semibold text-[18px] leading-[160%] text-white w-full
                                lg:text-[18px]
                                md:text-[16px]
                                sm:text-[15px]
                                xs:text-[14px]">
                    {project.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExploreBuilds;
