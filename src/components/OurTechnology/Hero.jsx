import { AnimatedButton, FadeIn, SlideInUp } from '../../utils/animations.jsx';

const Hero = () => {
  const heroBg = 'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/Who%20Are%20We/herobg.png';

  return (
    <section 
      className="relative w-full h-[660px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="w-full max-w-[1256px] mx-auto text-center pt-[120px] px-4">
        <FadeIn delay={0.2} duration={0.8}>
          <h1 className="font-outfit font-semibold text-title-mobile md:text-title text-[#0D192D] mb-[30px] tracking-[-0.02em] capitalize">
            Our Technology
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.4} duration={0.8}>
          <h2 className="font-outfit font-semibold text-card-mobile md:text-description text-[#1D3357] mb-[30px] tracking-[-0.02em]">
            Every layer is backed by in-house innovation and precision engineering
          </h2>
        </FadeIn>
        
        <SlideInUp delay={0.6} duration={0.6}>
          <AnimatedButton 
            className="flex items-center justify-center bg-[#E63946] text-white font-outfit font-semibold text-card rounded-[20px] px-7 py-4 border-none gap-[10px] cursor-pointer mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
            <div className="w-5 h-5 rounded-full flex items-center justify-center">
              <svg 
  className="w-5 h-5 text-white" 
  fill="none" 
  stroke="currentColor" 
  strokeWidth="2" 
  viewBox="0 0 24 24" 
  xmlns="http://www.w3.org/2000/svg"
>
 <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />

</svg>

            </div>
          </AnimatedButton>
        </SlideInUp>
      </div>
    </section>
  );
};

export default Hero;
