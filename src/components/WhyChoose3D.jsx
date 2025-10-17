import { motion } from 'framer-motion';
import { AnimatedButton, FadeIn, SlideInLeft, SlideInRight, SlideInUp } from '../utils/animations.jsx';

const WhyChoose3D = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 w-full max-w-[1240px] px-4">
      {/* Section Header */}
      <FadeIn delay={0.2} duration={0.8}>
        <div className="flex flex-col items-center gap-[10px] w-full text-center">
          <h2 className="font-outfit font-semibold text-[32px] md:text-[48px] leading-[140%] text-[#0D192D]">
            Why Choose 3D Construction
          </h2>
          <p className="max-w-[807px] font-outfit font-medium text-[20px] md:text-[24px] leading-[160%] text-[#1D3357]">
           Build faster, waste less, and design smarter with sustainable 3D construction
          </p>
        </div>
      </FadeIn>

      {/* Features Grid */}
      <div className="flex flex-col gap-8 w-full">
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 w-full">
          {/* Faster Time to Build */}
          <SlideInLeft delay={0.4} duration={0.8}>
            <motion.div 
              className="flex flex-col gap-5 w-full lg:w-[597px]"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-[318px] rounded-[10px] overflow-hidden group">
                <img 
                  src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/whychose3d1.jpg" 
                  alt="Faster Time to Build" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-outfit font-medium text-lg text-center px-6">
                    Complete homes and infrastructure in days, not months. Ideal for urgent or large-scale needs.
                  </p>
                </div>
              </div>
              <h3 className="font-outfit font-semibold text-[26px] leading-[120%] text-[#0D192D]">
                Faster Time to Build
              </h3>
            </motion.div>
          </SlideInLeft>

          {/* Design Without Limits */}
          <SlideInRight delay={0.6} duration={0.8}>
            <motion.div 
              className="flex flex-col gap-5 w-full lg:w-[597px]"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-[318px] rounded-[10px] overflow-hidden group">
                <img 
                  src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/whychose3d2.jpg" 
                  alt="Design Without Limits" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-outfit font-medium text-lg text-center px-6">
                    Print complex, organic forms without formwork. Bring bold architectural ideas to life.
                  </p>
                </div>
              </div>
              <h3 className="font-outfit font-semibold text-[26px] leading-[120%] text-[#0D192D]">
                Design Without Limits
              </h3>
            </motion.div>
          </SlideInRight>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 w-full">
          {/* Lower Material Waste */}
          <SlideInLeft delay={0.8} duration={0.8}>
            <motion.div 
              className="flex flex-col gap-5 w-full lg:w-[597px]"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-[318px] rounded-[10px] overflow-hidden group">
                <img 
                  src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/sdsd.png" 
                  alt="Lower Material Waste" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-outfit font-medium text-lg text-center px-6">
                    Precision printing cuts down material use and reduces construction waste upto 80%.
                  </p>
                </div>
              </div>
              <h3 className="font-outfit font-semibold text-[26px] leading-[120%] text-[#0D192D]">
                Lower Material Waste
              </h3>
            </motion.div>
          </SlideInLeft>

          {/* Built to Withstand */}
          <SlideInRight delay={1.0} duration={0.8}>
            <motion.div 
              className="flex flex-col gap-5 w-full lg:w-[597px]"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-[318px] rounded-[10px] overflow-hidden group">
                <img 
                  src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/whychose3d4.png" 
                  alt="Built to Withstand" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-outfit font-medium text-lg text-center px-6">
                    Structures tested across diverse climates, built to last, backed by real-world performance.
                  </p>
                </div>
              </div>
              <h3 className="font-outfit font-semibold text-[26px] leading-[120%] text-[#0D192D]">
                Built to Withstand
              </h3>
            </motion.div>
          </SlideInRight>
        </div>
      </div>

      {/* CTA Button */}
      <SlideInUp delay={1.2} duration={0.6}>
        <div className="flex items-start gap-10 mt-6">
          <AnimatedButton 
            className="flex items-center justify-center px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 gap-[10px] bg-[#E63946] text-white font-outfit font-semibold text-sm sm:text-base rounded-[20px] border-none cursor-pointer whitespace-nowrap"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-outfit font-semibold text-sm sm:text-base leading-[23px] text-white">
              See How It Works
            </span>
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-[#E63946]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </div>
          </AnimatedButton>
        </div>
      </SlideInUp>
    </div>
  );
};

export default WhyChoose3D;
