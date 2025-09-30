import { motion } from 'framer-motion';
import { AnimatedButton, SlideInLeft, SlideInRight } from '../../utils/animations.jsx';

const BuildingTomorrow = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 my-3 sm:my-16 md:my-10">
      <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[60px]">
        {/* Left Content */}
        <div className="flex flex-col justify-center items-start gap-[28px] w-full flex-grow">
          <SlideInLeft delay={0.2}>
            <div className="flex flex-col items-start gap-[28px] w-full">
              <h2 className="font-outfit font-semibold text-[32px] sm:text-[36px] md:text-[42px] leading-[130%] tracking-[-0.03em] text-[#0D192D]">
                Building tomorrow's infrastructure takes more than concrete.
              </h2>
              <p className="font-outfit font-medium text-[18px] sm:text-[20px] leading-[140%] tracking-[-0.01em] text-[#1D3357] w-full">
                It takes conviction, code, and collaboration.
              </p>
            </div>
          </SlideInLeft>
          
          <SlideInLeft delay={0.4}>
            <AnimatedButton 
              className="flex justify-center items-center px-[28px] py-[16px] gap-[10px] w-[201px] h-[56px] bg-[#1D3357] rounded-[20px]"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#0D192D",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-outfit font-semibold text-[18px] leading-[23px] text-white">
                Work With Us
              </span>
              <motion.div 
                className="w-[24px] h-[24px] flex items-center justify-center"
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.2 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6Z"
                    fill="white"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M4 8L12 12L20 8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </AnimatedButton>
          </SlideInLeft>
        </div>
        
        {/* Right Image */}
        <SlideInRight delay={0.3} className="flex-shrink-0 w-full lg:w-auto">
          <img 
            src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Who%20Are%20We/workwithus.png" 
            alt="Building Tomorrow" 
            className="w-full sm:w-[400px] md:w-full lg:w-[450px] h-[300px] sm:h-[360px] md:h-[380px] lg:h-[400px] object-cover rounded-[24px]"
          />
        </SlideInRight>
      </div>
    </div>
  );
};

export default BuildingTomorrow;
