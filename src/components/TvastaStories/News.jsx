import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, SlideInUp, AnimatedCard } from '../../utils/animations.jsx';

const News = () => {
  const newsItems = [
    {
      image: 'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/tvastastories/news1.jpg',
      logoImage: 'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/tvastastories/newslogo1.png',
      title: "Breaking: Revolutionary 3D Construction Technology Transforms Building Industry",
      readMoreText: "Read More",
      externalLinkText: "View"
    },
    {
      image: 'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/tvastastories/news2.jpg',
      logoImage: 'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/tvastastories/newslogo2.png',
      title: "Indian Startup Receives International Recognition for Sustainable Construction",
      readMoreText: "Read More",
      externalLinkText: "View"
    },
    {
      image: 'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/tvastastories/news3.jpg',
      logoImage: 'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/tvastastories/newslogo3.png',
      title: "Future of Construction: How 3D Printing is Changing the Game",
      readMoreText: "Read More",
      externalLinkText: "View"
    }
  ];

  return (
    <div className="flex flex-col items-center gap-[60px] w-full max-w-[1441px] mx-auto px-4 md:px-8 lg:px-20">
      {/* Section Header */}
      <FadeIn className="flex flex-col justify-center items-center gap-5 w-full px-4 md:px-8 lg:px-20">
        <SlideInUp delay={0.2}>
          <h2 className="w-full font-outfit font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-[125%] text-center text-[#0D192D] max-w-[1281px]">
            News
          </h2>
        </SlideInUp>
        
        <SlideInUp delay={0.4}>
          <p className="w-full max-w-[1035px] font-outfit font-medium text-[20px] md:text-[24px] lg:text-[28px] leading-[125%] text-center capitalize text-[#1D3357]">
            Explore press features and articles from top publications worldwide.
          </p>
        </SlideInUp>
      </FadeIn>

      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row items-center gap-5 w-full max-w-[1280px]">
        {newsItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, threshold: 0.1 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            className="flex-1 w-full lg:w-auto"
          >
            <AnimatedCard
              className="flex flex-col justify-between items-start p-3 gap-2.5 w-full h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden cursor-pointer relative"
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Logo Container */}
              <motion.div 
                className="flex flex-col items-start gap-2.5 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex justify-center items-center p-2.5 gap-2.5 bg-white rounded-[10px] min-w-[70px] h-12">
                  <img 
                    src={item.logoImage} 
                    alt="Publication Logo" 
                    className="max-w-[50px] max-h-[28px] object-contain"
                  />
                </div>
              </motion.div>

              {/* Content Container */}
              <motion.div 
                className="flex flex-col items-start gap-3 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {/* Title */}
                <h3 className="font-outfit font-semibold text-[16px] md:text-[17px] lg:text-[18px] leading-[160%] text-white w-full">
                  {item.title}
                </h3>

                {/* Action Buttons */}
                <div className="flex justify-between items-center gap-3 w-full">
                  <motion.button 
                    className="flex justify-center items-center px-3 py-2 bg-white backdrop-blur-[24px] rounded-[10px] min-w-[124px] h-[42px]"
                    whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="font-outfit font-semibold text-[16px] md:text-[17px] lg:text-[18px] leading-[160%] text-[#0D192D]">
                      {item.readMoreText}
                    </span>
                  </motion.button>

                  <motion.button 
                    className="flex justify-center items-center px-3 py-2 bg-white backdrop-blur-[24px] rounded-[10px] w-[44px] h-[42px]"
                    whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Arrow Icon */}
                    <svg className="w-5 h-5 text-[#0D192D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            </AnimatedCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default News;