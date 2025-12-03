import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FadeIn,
  SlideInLeft,
  SlideInRight,
  AnimatedCard,
} from "../../utils/animations.jsx";

const BuildBetterTogether = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact-us");
    window.scrollTo(0, 0);
  };

  return (
    <section className="flex flex-col items-center w-full px-4 md:px-6 lg:px-8 py-[60px] md:py-[80px] lg:py-[100px] ">
      <div className="flex flex-col md:flex-row items-center gap-[40px] md:gap-[50px] lg:gap-[60px] w-full max-w-[1320px] mx-auto">
        {/* Left Content */}
        <div className="flex flex-col gap-[24px] md:gap-[30px] w-full md:w-1/2">
          <SlideInLeft delay={0.2} duration={0.8}>
            <h2 className="text-subtitle-mobile md:text-title font-semibold leading-[1.2] text-[#0D192D] tracking-[-0.02em]">
              Let's Build Better, Together
            </h2>
          </SlideInLeft>

          <FadeIn delay={0.3} duration={0.8}>
            <p className="text-description-mobile md:text-description font-normal leading-[1.7] text-[#4A4A4A] tracking-[-0.02em]">
              See how Tvasta's sustainable mixes can be tailored to your next
              construction project.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} duration={0.8}>
            <button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center gap-[8px] btn-primary px-[24px] py-[12px] text-card-mobile md:text-card font-semibold tracking-[-0.02em] self-start shadow-[0px_4px_12px_rgba(0,0,0,0.15)]"
            >
              Contact Us
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 btn-icon"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </FadeIn>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <SlideInRight delay={0.3} duration={0.8}>
            <AnimatedCard
              className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-[12px] overflow-hidden shadow-[0px_10px_25.9px_rgba(0,0,0,0.3)] group cursor-pointer"
              whileHover={{
                y: -5,
                boxShadow: "0px 15px 35px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src="/images/proven2.jpg"
                alt="Build Better Together"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </AnimatedCard>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};

export default BuildBetterTogether;
