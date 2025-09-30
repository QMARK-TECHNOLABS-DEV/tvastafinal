import { motion } from 'framer-motion';
import { FadeIn, StaggeredList } from '../../utils/animations.jsx';

const Certifications = () => {
  const certifications = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 }
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 my-3 sm:my-16 md:my-20">
      {/* Title */}
      <FadeIn delay={0.2}>
        <div className="flex flex-col items-center gap-3 w-full max-w-[1280px] mx-auto">
          <h2 className="font-outfit font-semibold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] leading-[140%] text-center text-[#0D192D]">
            Certifications
          </h2>
        </div>
      </FadeIn>
      
      {/* Certifications Grid */}
      <StaggeredList 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 mt-14 w-full max-w-[1000px] mx-auto"
        delay={0.4}
        staggerDelay={0.1}
      >
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            className="w-full h-[80px] sm:h-[100px] bg-[#D1D5DB] rounded-[8px] flex items-center justify-center"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#C0C0C0",
              transition: { duration: 0.3 }
            }}
          >
            {/* Replace with logo <img /> later */}
          </motion.div>
        ))}
      </StaggeredList>
    </div>
  );
};

export default Certifications;
