import { AnimatedButton, FadeIn, SlideInLeft } from '../../utils/animations.jsx';

const CallToAction = () => {
  const letsTalkImage =
    'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/OurTechnology/Letstalk.jpg';

  return (
    <section className="w-full bg-white md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-[60px] items-center">
        
        {/* Left Text Section */}
        <SlideInLeft delay={0.3}>
          <div className="w-full lg:w-[712px] flex flex-col gap-5 sm:gap-7 items-start">
            <FadeIn delay={0.5}>
              <div className="font-outfit font-semibold text-subtitle-mobile md:text-subtitle text-[#0D192D] tracking-[-0.03em]">
                Ready to bring your next project to life with 3D Construction?
              </div>
            </FadeIn>

            <FadeIn delay={0.7}>
              <div className="font-outfit font-medium text-card-mobile md:text-card text-[#1D3357] tracking-[-0.01em]">
                Whether you're building a home, a shelter, or a smart city facade, we have the tools to make it possible.
              </div>
            </FadeIn>

            <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-7 mt-4">
              {/* Let's Talk Button */}
              <AnimatedButton 
                className="flex items-center bg-[#1D3357] text-white font-outfit font-semibold text-sm sm:text-base rounded-[20px] px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 border-none gap-2 sm:gap-[10px] cursor-pointer transition-all duration-300 whitespace-nowrap"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-outfit font-semibold text-card-mobile md:text-card text-white">
                  Let's Talk
                </span>
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#1D3357]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
              </AnimatedButton>

              {/* Download Button */}
              <AnimatedButton 
                className="flex items-center border-2 border-[#1D3357] text-[#1D3357] font-outfit font-semibold text-sm sm:text-base rounded-[20px] px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 bg-transparent gap-2 sm:gap-[10px] cursor-pointer transition-all duration-300 hover:bg-[#1D3357] hover:text-white whitespace-nowrap"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-outfit font-semibold text-card-mobile md:text-card">
                  Download Tech Brochure
                </span>
                <div className="w-6 h-6 bg-[#1D3357] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                  </svg>
                </div>
              </AnimatedButton>
            </div>
          </div>
        </SlideInLeft>

        {/* Right Image Section */}
        <div
          className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-[24px] bg-cover bg-center bg-no-repeat shadow-lg hover:shadow-xl transition-shadow duration-300"
          style={{ backgroundImage: `url(${letsTalkImage})` }}
        />
      </div>
    </section>
  );
};

export default CallToAction;
