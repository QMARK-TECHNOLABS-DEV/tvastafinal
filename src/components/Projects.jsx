import React, { useState } from 'react';
import { FadeIn, SlideInUp, ScaleUp, AnimatedButton } from '../utils/animations.jsx';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('Public Infrastructure');

  const tabs = [
    'Housing',
    'Public Infrastructure', 
    'Disaster-Relief Shelters',
    'R&D & Institutional',
    'Regional Builds',
    'Printer Used'
  ];

  const projectImages = [
    { src: "/images/Explore Our Projects 1.jpg", alt: "Project 1", delay: 0 },
    { src: "/images/Explore Our Projects 2.jpg", alt: "Project 2", delay: 0.1 },
    { src: "/images/Explore Our Projects 3.jpg", alt: "Project 3", delay: 0.2 },
    { src: "/images/Explore Our Projects 4.jpg", alt: "Project 4", delay: 0.3 }
  ];

  return (
    <section className="flex flex-col items-center gap-[80px] w-full max-w-[1280px] mx-auto px-4 py-8">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-[41px] w-full">
        <FadeIn>
          <h2 className="font-outfit font-semibold text-[48px] md:text-[60px] leading-[120%] text-center tracking-[-0.02em] capitalize text-[#0D192D] mb-4">
            Explore Our Projects
          </h2>
        </FadeIn>

        {/* Tab Navigation */}
        <SlideInUp delay={0.2}>
          <div className="flex flex-wrap justify-center items-center py-[11px] gap-[20px] md:gap-[62px] w-full max-w-[1280px] bg-[#F1FAEE] rounded-[200px] px-6">
            {tabs.map((tab, index) => (
              <AnimatedButton
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-outfit font-normal text-[18px] md:text-[20px] leading-[120%] tracking-[-0.02em] capitalize px-[20px] md:px-[28px] py-[12px] rounded-[58px] transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-white border border-[#B5D4AA] shadow-[0px_4px_4px_rgba(181,212,170,0.3)] text-[#000000]'
                    : 'text-[#000000] hover:bg-white hover:bg-opacity-50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                {tab}
              </AnimatedButton>
            ))}
          </div>
        </SlideInUp>
      </div>

      {/* Projects Grid */}
      <div className="w-full relative">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {/* Desktop Layout - Exact match to design */}
            <div className="hidden lg:flex justify-center items-start gap-4 w-full">
              {/* Left column - Single tall image */}
              <ScaleUp delay={0} className="w-[280px]">
                <motion.img 
                  src="/images/Explore Our Projects 1.jpg"
                  alt="Project 1"
                  className="w-full h-[540px] object-cover rounded-[20px]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </ScaleUp>

              {/* Middle column - Two stacked images */}
              <div className="flex flex-col gap-4">
                <ScaleUp delay={0.1} className="w-[280px]">
                  <motion.img 
                    src="/images/Explore Our Projects 2.jpg"
                    alt="Project 2"
                    className="w-full h-[260px] object-cover rounded-[20px]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </ScaleUp>
                <ScaleUp delay={0.2} className="w-[280px]">
                  <motion.img 
                    src="/images/Explore Our Projects 3.jpg"
                    alt="Project 3"
                    className="w-full h-[260px] object-cover rounded-[20px]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </ScaleUp>
              </div>

              {/* Right column - Single tall image */}
              <ScaleUp delay={0.3} className="w-[280px]">
                <motion.img 
                  src="/images/Explore Our Projects 4.jpg"
                  alt="Project 4"
                  className="w-full h-[540px] object-cover rounded-[20px]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </ScaleUp>
            </div>

            {/* Mobile & Tablet Layout */}
            <div className="block lg:hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectImages.map((image, index) => (
                  <ScaleUp
                    key={`${activeTab}-${index}`}
                    delay={image.delay}
                    className="w-full h-[240px] sm:h-[300px] rounded-[12px] overflow-hidden"
                  >
                    <motion.img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </ScaleUp>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
