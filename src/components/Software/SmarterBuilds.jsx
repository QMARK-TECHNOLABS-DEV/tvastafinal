import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FadeIn,
  SlideInLeft,
  SlideInRight,
  AnimatedCard,
} from "../../utils/animations.jsx";

const SmarterBuilds = () => {
  const navigate = useNavigate();

  const handleMaterialsClick = () => {
    navigate("/our-technology/materials");
    window.scrollTo(0, 0);
  };
  return (
    <section className="flex flex-col items-center w-full px-4 md:px-8 lg:px-20 py-[60px] md:py-[100px]">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-[40px] md:gap-[60px] lg:gap-[80px] w-full max-w-[1280px] mx-auto">
        {/* Left Content */}
        <div className="w-full lg:w-4/5 flex flex-col gap-[24px] md:gap-[30px]">
          <SlideInLeft delay={0.2} duration={0.8}>
            <h2 className="text-title-mobile md:text-title font-semibold leading-[1.25] text-[#0D192D] tracking-[-0.02em]">
              Greener Materials, Smarter Builds
            </h2>
          </SlideInLeft>

          <FadeIn delay={0.4} duration={0.8}>
            <p className="text-description-mobile md:text-description font-normal leading-[1.7] text-[#1D3357] tracking-[-0.02em]">
              Explore Tvasta’s eco-friendly concrete.
            </p>
          </FadeIn>

          {/* CTA Button */}
          <FadeIn delay={0.6} duration={0.8}>
            <button
              onClick={handleMaterialsClick}
              className="flex items-center justify-center gap-[8px] px-[24px] py-[12px] btn-primary w-fit group"
            >
              <span className="text-card-mobile md:text-card font-semibold text-white">
                Discover Sustainable Materials
              </span>
              <svg
                className="w-[16px] h-[16px] text-white btn-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </FadeIn>
        </div>

        {/* Right Image */}
        <SlideInRight delay={0.3} duration={0.8} className="w-full lg:w-1/2">
          <AnimatedCard
            className="relative w-full h-[250px] md:h-[380px] lg:h-[400px] rounded-[12px] overflow-hidden shadow-[0px_10px_25.9px_rgba(13,25,45,0.15)]"
            whileHover={{
              y: -5,
              boxShadow: "0px_15px_35px_rgba(13,25,45,0.2)",
            }}
          >
            <img
              src="/images/proven2.jpg"
              alt="Robotic Arm Printers"
              className="w-full h-full object-cover"
            />
          </AnimatedCard>
        </SlideInRight>
      </div>
    </section>
  );
};

export default SmarterBuilds;
