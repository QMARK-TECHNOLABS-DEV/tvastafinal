import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SlideInLeft, SlideInRight } from '../../utils/animations.jsx';

const OurMission = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const images = [
    'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Rectangle.jpg',
    'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Rectangle.jpg',
    'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Rectangle.jpg',
    'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Rectangle.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 my-3 sm:my-16 md:my-20 lg:my-10">
      <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[80px]">
        {/* Left Image Slider */}
        <SlideInLeft delay={0.2} className="flex-shrink-0 w-full lg:w-auto">
          <div className="relative w-full lg:w-1/2 h-[320px] sm:h-[420px] lg:h-[536px] rounded-[16px] overflow-hidden">
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Our Mission ${index + 1}`}
                className="absolute top-0 left-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: activeSlide === index ? 1 : 0,
                  scale: activeSlide === index ? 1 : 1.1
                }}
                transition={{ duration: 0.7 }}
              />
            ))}
            
            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeSlide === index ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </SlideInLeft>
        
        {/* Right Content */}
        <div className="flex flex-col justify-center items-start gap-[48px] w-full lg:w-1/2">
          {/* Our Mission Section */}
          <SlideInRight delay={0.3}>
            <div className="flex flex-col items-start gap-[16px] w-full">
              <h2 className="font-outfit font-semibold text-subtitle-mobile md:text-title leading-[120%] text-[#0D192D]">
                Our Mission
              </h2>
              <p className="font-outfit font-normal text-card-mobile md:text-description leading-[140%] text-[#1D3357] w-full">
                Tvasta, a first principles-based technology builder, leverages automation and robotics to create 3D printing platforms that will revolutionize construction by automating 80% of the process for distributed infrastructure and mass customization, while also enabling high-precision, mass-customized component production across the manufacturing sector.
              </p>
            </div>
          </SlideInRight>
          
          {/* Our Vision Section */}
          <SlideInRight delay={0.5}>
            <div className="flex flex-col items-start gap-[16px] w-full">
              <h2 className="font-outfit font-semibold text-subtitle-mobile md:text-title leading-[120%] text-[#0D192D]">
                Our Vision
              </h2>
              <p className="font-outfit font-normal text-card-mobile md:text-description leading-[140%] text-[#1D3357] w-full">
                To revolutionize global construction with modular, intelligent, and environmentally responsible solutions.
              </p>
            </div>
          </SlideInRight>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
