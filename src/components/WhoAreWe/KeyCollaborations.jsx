import { motion } from 'framer-motion';
import { FadeIn, StaggeredList } from '../../utils/animations.jsx';

const KeyCollaborations = () => {
  const collaborations = [
    { id: 1, name: "Saint-Gobain", image: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/logo1.png" },
    { id: 2, name: "Venture Catalyst", image: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/logo4.png" },
    { id: 3, name: "Navam Capital", image: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/navam.png" },
    { id: 4, name: "Habitat for Humanity", image: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/habitat.png" },
    { id: 5, name: "ADB Ventures", image: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/logo3.png" },
    { id: 6, name: "Third Derivative", image: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/logo2.png" }
  ];

  return (
    <div className="flex flex-col items-center gap-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 my-6 sm:my-16 md:my-10">
      {/* Title */}
      <FadeIn delay={0.2}>
        <div className="flex flex-col items-center gap-3 w-full max-w-[1280px]">
          <h2 className="font-outfit font-semibold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] leading-[140%] text-center text-[#0D192D]">
            Key Collaborations
          </h2>
        </div>
      </FadeIn>
      
      {/* Collaborations Grid */}
      <StaggeredList 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8 md:gap-10 w-full max-w-[1200px]"
        delay={0.4}
        staggerDelay={0.1}
      >
        {collaborations.map((collab) => (
          <motion.div
            key={collab.id}
            className="w-full h-[70px] sm:h-[80px] md:h-[90px] flex items-center justify-center"
          >
            <img 
              src={collab.image} 
              alt={collab.name}
              className="max-h-full max-w-[80%] sm:max-w-[90%] object-contain"
            />
          </motion.div>
        ))}
      </StaggeredList>
    </div>
  );
};

export default KeyCollaborations;
