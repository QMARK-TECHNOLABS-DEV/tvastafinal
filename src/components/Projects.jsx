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
    { src: "/images/Explore Our Projects 1.jpg", alt: "Project 1", delay: 0 },
    { src: "/images/Explore Our Projects 2.jpg", alt: "Project 2", delay: 0.1 },
    { src: "/images/Explore Our Projects 3.jpg", alt: "Project 3", delay: 0.2 },
    { src: "/images/Explore Our Projects 4.jpg", alt: "Project 4", delay: 0.3 }
  ];

  return (
    <section className="flex flex-col items-center gap-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 py-8">
      
      {/* Section Header */}
      <div className="flex flex-col items-center gap-6 w-full">
        <FadeIn>
          <h2 className="font-outfit font-semibold text-[28px] sm:text-[36px] md:text-[48px] text-center leading-[120%] text-[#0D192D] capitalize">
            Explore Our Projects
          </h2>
        </FadeIn>

        {/* Tab Navigation */}
<SlideInUp delay={0.2}>
  <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4 py-3 w-full bg-[#F1FAEE] rounded-[30px] px-2 sm:px-4">
    {tabs.map((tab, index) => (
      <AnimatedButton
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`font-outfit font-normal text-[14px] sm:text-[16px] md:text-[18px] px-3 py-2 rounded-full transition-all duration-300 text-center ${
          activeTab === tab
            ? 'bg-white border border-[#B5D4AA] shadow-[0px_4px_4px_rgba(181,212,170,0.3)] text-[#000]'
            : 'text-[#000] hover:bg-white hover:bg-opacity-50'
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
</SlideInUp>

      </div>

      {/* Projects Grid */}
      <div className="w-full">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {/* Desktop Layout */}
            <div className="hidden lg:flex justify-center items-start gap-4 w-full">
              {/* Left - tall image */}
              <ScaleUp delay={0}>
                <motion.img 
                  src="/images/Explore Our Projects 1.jpg"
                  alt="Project 1"
                  className="w-full max-w-[400px] h-[540px] object-cover rounded-[20px]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </ScaleUp>

              {/* Middle column - stacked images */}
              <div className="flex flex-col gap-4">
                <ScaleUp delay={0.1}>
                  <motion.img 
                    src="/images/Explore Our Projects 2.jpg"
                    alt="Project 2"
                    className="w-[280px] h-[260px] object-cover rounded-[20px]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </ScaleUp>
                <ScaleUp delay={0.2}>
                  <motion.img 
                    src="/images/Explore Our Projects 3.jpg"
                    alt="Project 3"
                    className="w-[280px] h-[260px] object-cover rounded-[20px]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </ScaleUp>
              </div>

              {/* Right - tall image */}
              <ScaleUp delay={0.3}>
                <motion.img 
                  src="/images/Explore Our Projects 4.jpg"
                  alt="Project 4"
                  className="w-[280px] h-[540px] object-cover rounded-[20px]"
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
