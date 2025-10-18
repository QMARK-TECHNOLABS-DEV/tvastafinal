import { FadeIn, SlideInLeft, SlideInRight } from '../utils/animations.jsx';

const WhyTvasta = () => {
  return (
    <div className="w-full bg-[#F8F9FA] rounded-2xl">
      <div className="flex flex-col items-start gap-16 w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-20 py-16 lg:py-20">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-16 w-full">
          <SlideInLeft className="flex flex-col justify-center items-start md:w-[40%]">
            <p className="font-outfit font-semibold text-description-mobile md:text-description text-[#E63946] mb-2">
              Why Tvasta
            </p>
            <h2 className="font-outfit font-semibold text-subtitle-mobile md:text-subtitle text-[#0D192D]">
              Built on Research. Proven in Concrete
            </h2>
          </SlideInLeft>

          <SlideInRight className="md:w-[60%]">
            <p className="font-outfit font-normal text-card-mobile md:text-card text-[#1D3357]">
              Founded at IIT Madras in 2016, Tvasta is redefining construction with scalable, sustainable 3D printing technology. Our mission: build intelligently, sustainably, and accessibly. 
              <br/><span className="text-[#E63946] underline cursor-pointer hover:no-underline transition-all">Know More…</span>
            </p>
          </SlideInRight>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-col lg:flex-row items-start gap-8 w-full">
          <FadeIn delay={0.2} className="relative w-full lg:w-[392px] h-[500px] rounded-2xl overflow-hidden">
            <div 
              className="w-full h-full bg-cover bg-center relative"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.86) 67.12%), url('https://tvasta.blr1.cdn.digitaloceanspaces.com/media/whytvasta1.jpg')`
              }}
            >
              <div className="absolute bottom-6 left-6 flex flex-col gap-3">
                <h3 className="font-outfit font-normal text-subtitle-mobile md:text-subtitle text-white max-w-[332px]">
                  25,000+ Sq. Ft. 3D Printed
                </h3>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} className="relative w-full lg:w-[392px] h-[500px] rounded-2xl overflow-hidden">
            <div 
              className="w-full h-full bg-cover bg-center relative"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.88) 100%), url('https://tvasta.blr1.cdn.digitaloceanspaces.com/media/whytvasta2.png')`
              }}
            >
              <div className="absolute bottom-6 left-6 flex flex-col gap-3">
                <h3 className="font-outfit font-normal text-subtitle-mobile md:text-subtitle text-white max-w-[332px]">
                  66% Cement Replaced in Mixes
                </h3>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.6} className="relative w-full lg:w-[392px] h-[500px] rounded-2xl overflow-hidden">
            <div 
              className="w-full h-full bg-cover bg-center relative"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.64) 100%), url('https://tvasta.blr1.cdn.digitaloceanspaces.com/media/whytvasta3.jpg')`
              }}
            >
              <div className="absolute bottom-6 left-6 flex flex-col gap-3">
                <h3 className="font-outfit font-normal text-subtitle-mobile md:text-subtitle text-white max-w-[332px]">
                  7 States Covered in India
                </h3>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default WhyTvasta;
