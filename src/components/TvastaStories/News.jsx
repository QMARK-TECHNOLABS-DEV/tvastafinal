import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, SlideInUp, AnimatedCard } from '../../utils/animations.jsx';

const News = () => {
  const newsItems = [
    {
      image: 'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/tvastastories/news1.jpg',
      logoImage: 'https://cdn.brandfetch.io/idDvP5_hsq/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1758992077027',
      title: "IIT Madras & Tvasta Develops India's First 3D Printing Technology",
      source: "Economic Times Realty",
      date: "October 24, 2018",
      summary: "Tvasta partnered with IIT Madras to develop India's first construction 3D printing technology, aiming for affordable and rapid construction automation with substantial sustainability benefits.",
      url: "https://realty.economictimes.indiatimes.com/news/industry/iit-madras-tvasta-develops-indias-first-3d-printing-construction-technology/66361751",
      readMoreText: "Read More",
      externalLinkText: "View"
    },
    {
      image: 'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/tvastastories/news2.jpg',
      logoImage: 'https://www.surfacesreporter.com/images/SR%20logo%20for%20SVG.svg',
      title: "India's First 3D Printed House by IIT-M Alumni",
      source: "Surfaces Reporter",
      date: "May 9, 2021",
      summary: "Tvasta, founded by IIT Madras alumni, built India's first fully 3D printed home using industrial waste and recycled materials, dramatically reducing build time and carbon footprint.",
      url: "https://www.surfacesreporter.com/articles/102589/indias-first-3d-printed-house-by-iit-m-alumni-sr-news-update",
      readMoreText: "Read More",
      externalLinkText: "View"
    },
    {
      image: 'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/tvastastories/news3.jpg',
      logoImage: 'https://cdn.brandfetch.io/idDvP5_hsq/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1758992077027',
      title: "India's First 3D-Printed Villa in Pune",
      source: "Economic Times",
      date: "April 2, 2025",
      summary: "India's first 3D-printed villa in Pune, built using Tvasta's technology, gained attention for rapid construction and innovative building methods.",
      url: "https://economictimes.com/news/new-updates/this-house-in-pune-wasnt-built-it-was-printed-in-just-4-months-indias-first-3d-printed-2000-sq-ft-villa-stuns-netizens/articleshow/119904239.cms",
      readMoreText: "Read More",
      externalLinkText: "View"
    }
  ];

  const handleReadMore = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
                    alt={`${item.source} Logo`}
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
                    onClick={() => handleReadMore(item.url)}
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
                    onClick={() => handleReadMore(item.url)}
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