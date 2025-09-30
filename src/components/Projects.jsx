import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { AnimatedButton, FadeIn, ScaleUp, SlideInUp } from '../utils/animations.jsx';

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
    { src: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Explore%20Our%20Projects%201.jpg", alt: "Project 1", delay: 0 },
    { src: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Explore%20Our%20Projects%202.jpg", alt: "Project 2", delay: 0.1 },
    { src: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Explore%20Our%20Projects%203.jpg", alt: "Project 3", delay: 0.2 },
    { src: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Explore%20Our%20Projects%204.jpg", alt: "Project 4", delay: 0.3 }
  ];

  return (
    <section className="flex flex-col items-center gap-[80px] w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 py-8">
      
      {/* Section Header */}
      <div className="flex flex-col items-center gap-[41px] w-full">
        <FadeIn>
          <h2 className="font-outfit font-semibold text-[28px] sm:text-[48px] md:text-[60px] text-center leading-[120%] tracking-[-0.02em] text-[#0D192D] capitalize">
            Explore Our Projects
          </h2>
        </FadeIn>

        {/* Tab Navigation */}
        <SlideInUp delay={0.2}>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-center items-center py-[8px] gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6 w-full max-w-[1280px] bg-[#F1FAEE] rounded-[200px] px-2 sm:px-3 md:px-4 overflow-hidden">
            {tabs.map((tab, index) => (
              <AnimatedButton
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-outfit font-normal text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] leading-[120%] tracking-[-0.02em] px-1 py-1 sm:px-2 sm:py-2 md:px-3 lg:px-4 xl:px-6 rounded-[58px] transition-all duration-300 text-center capitalize whitespace-nowrap flex-shrink-0 ${
                  activeTab === tab
                    ? 'bg-white border border-[#B5D4AA] shadow-[0px_4px_4px_rgba(181,212,170,0.3)] text-[#000000]'
                    : 'text-[#000000] hover:bg-white hover:bg-opacity-50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                {tab}
              </AnimatedButton>
            ))}
          </div>
          
          {/* Mobile Navigation */}
          <div className="lg:hidden w-full max-w-[400px] bg-[#F1FAEE] rounded-[20px] p-3">
            <div className="grid grid-cols-2 gap-2">
              {tabs.map((tab, index) => (
                <AnimatedButton
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`font-outfit font-normal text-[12px] leading-[120%] tracking-[-0.02em] px-3 py-2 rounded-[20px] transition-all duration-300 text-center capitalize ${
                    activeTab === tab
                      ? 'bg-white border border-[#B5D4AA] shadow-[0px_2px_4px_rgba(181,212,170,0.3)] text-[#000000]'
                      : 'text-[#000000] hover:bg-white hover:bg-opacity-50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  {tab}
                </AnimatedButton>
              ))}
            </div>
          </div>
        </SlideInUp>
      </div>

      {/* Projects Grid */}
      <div className="w-full max-w-[1280px]">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {/* Desktop Layout - Matching Figma Design */}
            <div className="hidden lg:block relative w-full h-[423px]">
              {/* First image - top left */}
              <ScaleUp delay={0}>
                <motion.img 
                  src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Explore%20Our%20Projects%201.jpg"
                  alt="Project 1"
                  className="absolute w-[305px] h-[360px] left-0 top-0 object-cover rounded-[12px]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </ScaleUp>

              {/* Second image - middle left with offset */}
              <ScaleUp delay={0.1}>
                <motion.img 
                  src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Explore%20Our%20Projects%202.jpg"
                  alt="Project 2"
                  className="absolute w-[305px] h-[360px] left-[325px] top-[63px] object-cover rounded-[12px]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </ScaleUp>

              {/* Third image - middle right with offset */}
              <ScaleUp delay={0.2}>
                <motion.img 
                  src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Explore%20Our%20Projects%203.jpg"
                  alt="Project 3"
                  className="absolute w-[305px] h-[360px] left-[650px] top-[63px] object-cover rounded-[12px]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </ScaleUp>

              {/* Fourth image - top right */}
              <ScaleUp delay={0.3}>
                <motion.img 
                  src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Explore%20Our%20Projects%204.jpg"
                  alt="Project 4"
                  className="absolute w-[305px] h-[360px] left-[975px] top-0 object-cover rounded-[12px]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </ScaleUp>
            </div>

            {/* Tablet & Mobile Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4">
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
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
