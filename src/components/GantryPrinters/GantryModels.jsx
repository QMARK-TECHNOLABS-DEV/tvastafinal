import React from "react";
import {
  FadeIn,
  SlideInLeft,
  SlideInRight,
  AnimatedCard,
} from "../../utils/animations.jsx";

const GantryModels = () => {
  const models = [
    {
      id: 1,
      name: "Nirmaan R&D",
      description:
        "Designed for labs and institutions, the Nirmaan R&D printer enables controlled experimentation with materials, form factors, and print strategies.",
      keyFeatures: [
        "Build volume: 1m³",
        "Compatible with modular subsystems",
        "Ideal for material testing, prototypes & architectural studies",
      ],
      image: "/images/rd.jpg",
      buttonText: "Download Brochure",
      isLeft: true,
    },
    {
      id: 2,
      name: "Nirmaan PD",
      description:
        "A flexible off-site printing system suited for modular construction workflows. Perfect for urban settings or restricted sites.",
      keyFeatures: [
        "Multi-pallet system for continuous builds",
        "Flexible X, Y, Z axis configurations",
        "Supports start-stop workflows",
      ],
      image: "/images/pd.jpg",
      buttonText: "Download Brochure",
      isLeft: false,
    },
    {
      id: 3,
      name: "Nirmaan ZT",
      description:
        "A large-format, field-deployable system designed for housing, shelters, and rapid builds. Modular and extendable for multi-storey construction.",
      keyFeatures: [
        "Extendable height: up to 10m",
        "Supports G+2 structure printing",
        "Includes portable subsystems for efficient deployment",
      ],
      image: "/images/zt.jpg",
      buttonText: "Download Brochure",
      isLeft: true,
    },
  ];

  return (
    <section className="flex flex-col items-center w-full px-4 md:px-8 lg:px-20 py-[60px] md:py-[100px]">
      <div className="flex flex-col items-center gap-[60px] md:gap-[80px] w-full max-w-[1280px] mx-auto">
        {models.map((model, index) => (
          <div
            key={model.id}
            className={`flex flex-col ${
              model.isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-[40px] md:gap-[60px] lg:gap-[80px] w-full`}
          >
            {/* Image Section */}
            {model.isLeft ? (
              <SlideInLeft
                delay={0.2 + index * 0.1}
                duration={0.8}
                className="w-full lg:w-1/2"
              >
                <AnimatedCard
                  className="relative w-full h-[350px] md:h-[420px] lg:h-[480px] rounded-[12px] overflow-hidden shadow-[0px_10px_25.9px_rgba(13,25,45,0.15)]"
                  whileHover={{
                    y: -5,
                    boxShadow: "0px_15px_35px_rgba(13,25,45,0.2)",
                  }}
                >
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover"
                  />
                </AnimatedCard>
              </SlideInLeft>
            ) : (
              <SlideInRight
                delay={0.2 + index * 0.1}
                duration={0.8}
                className="w-full lg:w-1/2"
              >
                <AnimatedCard
                  className="relative w-full h-[350px] md:h-[420px] lg:h-[480px] rounded-[12px] overflow-hidden shadow-[0px_10px_25.9px_rgba(13,25,45,0.15)]"
                  whileHover={{
                    y: -5,
                    boxShadow: "0px_15px_35px_rgba(13,25,45,0.2)",
                  }}
                >
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover"
                  />
                </AnimatedCard>
              </SlideInRight>
            )}

            {/* Content Section */}
            <div className="w-full lg:w-1/2 flex flex-col gap-[24px] md:gap-[30px]">
              <FadeIn delay={0.3 + index * 0.1} duration={0.8}>
                <h2 className="text-title-mobile md:text-title font-semibold leading-[1.25] text-[#0D192D] tracking-[-0.02em]">
                  {model.name}
                </h2>
              </FadeIn>

              <FadeIn delay={0.4 + index * 0.1} duration={0.8}>
                <p className="text-description-mobile md:text-description font-normal leading-[1.7] text-[#1D3357] tracking-[-0.02em]">
                  {model.description}
                </p>
              </FadeIn>

              {/* Key Features */}
              <div className="flex flex-col gap-[12px]">
                <FadeIn delay={0.5 + index * 0.1} duration={0.6}>
                  <h3 className="text-subtitle-mobile md:text-subtitle font-semibold leading-[1.7] text-[#0D192D] tracking-[-0.02em]">
                    Key Features:
                  </h3>
                </FadeIn>

                <div className="flex flex-col gap-[12px]">
                  {model.keyFeatures.map((feature, idx) => (
                    <FadeIn
                      key={idx}
                      delay={0.6 + index * 0.1 + idx * 0.05}
                      duration={0.6}
                    >
                      <div className="flex items-start gap-[12px]">
                        <div className="flex-shrink-0 w-[16px] h-[16px] mt-[6px]">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="8"
                              cy="8"
                              r="6"
                              fill="white"
                              stroke="#0D192D"
                              strokeWidth="4"
                            />
                          </svg>
                        </div>
                        <p className="text-description-mobile md:text-description font-normal leading-[1.7] text-[#1D3357] tracking-[-0.02em]">
                          {feature}
                        </p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <FadeIn delay={0.8 + index * 0.1} duration={0.8}>
                <button className="flex items-center justify-center gap-[8px] px-[24px] py-[12px] btn-download w-fit group">
                  <span className="text-card-mobile md:text-card font-semibold text-white">
                    {model.buttonText}
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default GantryModels;
