import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FadeIn } from '../../utils/animations.jsx';
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll';

const OurStory = () => {
  const [isMobile, setIsMobile] = useState(false);

  const storyText1 =
    "Founded in 2016 at IIT-Madras, Tvasta emerged with a vision to redefine civil construction through deep-tech innovation. In 2020, we unveiled India's first 3D-printed house, turning a research milestone into an industry-defining moment.";

  const storyText2 =
    "Today, we are a vertically integrated construction-tech company that develops 3D printing platforms, smart materials, and proprietary software, powering real-world builds from flood-resilient homes to smart city infrastructure. We're transforming concrete into a tool for innovation, not limitation.";

  const words1 = storyText1.split(' ');
  const words2 = storyText2.split(' ');

  // Detect mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Use horizontal scroll hook (disabled on mobile)
  const { sectionRef, containerRef } = useHorizontalScroll({
    enabled: !isMobile,
    gap: 24, // 24px gap between images (gap-6 in Tailwind)
    snap: true,
    itemsCount: 3, // Three images
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
      {/* Our Story Section */}
      <div className="flex flex-col items-start gap-[40px] w-full">
        <FadeIn delay={0.2}>
          <h2 className="font-outfit font-semibold text-subtitle-mobile md:text-title leading-[60px] text-[#0D192D] w-full">
            Our Story
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-[20px] w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-outfit font-normal text-card-mobile md:text-subtitle leading-[150%] tracking-[-0.5px] text-[#1D3357] w-full"
          >
            {words1.map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{
                  duration: 0.1,
                  delay: index * 0.05,
                }}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-outfit font-normal text-card-mobile md:text-subtitle leading-[150%] tracking-[-0.5px] text-[#1D3357] w-full"
          >
            {words2.map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{
                  duration: 0.1,
                  delay: words1.length * 0.05 + index * 0.05 + 0.5,
                }}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Images Section */}
      {isMobile ? (
        // Mobile view: Normal grid layout
        <div className="w-full mt-14">
          <div className="grid grid-cols-4 gap-6">
            <motion.div
              className="col-span-4 md:col-span-3 w-full h-[300px] sm:h-[400px] lg:h-[468px] rounded-[12px] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Who%20Are%20We/ourstory1.png"
                alt="Our Story 1"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="col-span-4 md:col-span-1 w-full h-[300px] sm:h-[400px] lg:h-[468px] rounded-[12px] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Who%20Are%20We/ourstory2.png"
                alt="Our Story 2"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="col-span-4 w-full h-[300px] sm:h-[400px] lg:h-[468px] rounded-[12px] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/ourstory3.jpg"
                alt="Our Story 3"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      ) : (
        // Desktop view: Horizontal scroll with GSAP
        <div ref={sectionRef} className="w-full mt-14 h-screen flex items-center overflow-hidden">
          <div ref={containerRef} className="flex gap-6 will-change-transform">
            <div className="flex-shrink-0 w-[75vw] h-[468px] rounded-[12px] overflow-hidden">
              <img
                src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Who%20Are%20We/ourstory1.png"
                alt="Our Story 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[25vw] h-[468px] rounded-[12px] overflow-hidden">
              <img
                src="https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Who%20Are%20We/ourstory2.png"
                alt="Our Story 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-[60vw] h-[468px] rounded-[12px] overflow-hidden">
              <img
                src="/images/ourstory3.jpg"
                alt="Our Story 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurStory;
