import { AnimatedButton, SlideInLeft, SlideInRight } from '../utils/animations.jsx';

const Technology = () => {
  return (
    <div className="w-full bg-[#0D192D] rounded-2xl">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[106px] w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-20 py-16 lg:py-20">
        {/* Left Content */}
        <SlideInLeft className="flex flex-col items-start gap-10 w-full lg:w-[710px]">
          <div className="flex flex-col items-start gap-6 w-full">
            <h2 className="font-outfit font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[60px] text-white">
              Explore the Technology Behind the Builds
            </h2>
            <p className="font-outfit font-normal text-xl sm:text-2xl leading-[30px] text-white/60">
              Get the full specs, materials, timelines, and real-world applications in one comprehensive guide.
            </p>
          </div>

          <AnimatedButton 
            className="flex justify-center items-center px-6 py-4 gap-[14px] bg-white rounded-full w-fit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
           <div className="w-6 h-6 relative">
  <svg className="w-6 h-6 text-[#E63946]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 16v-8m0 8l-4-4m4 4l4-4M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</div>

            <span className="font-outfit font-medium text-xl sm:text-2xl leading-[30px] text-[#0D192D]">
              Download the Tech Brochure
            </span>
          </AnimatedButton>
        </SlideInLeft>

        {/* Right Image */}
        <SlideInRight className="w-full lg:w-[424px] h-[500px] rounded-2xl overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/exploretechnology.jpg')`
            }}
          />
        </SlideInRight>
      </div>
    </div>
  );
};

export default Technology;
