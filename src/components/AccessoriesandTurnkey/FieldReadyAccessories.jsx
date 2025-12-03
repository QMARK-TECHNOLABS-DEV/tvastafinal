import React, { useState } from "react";
import { FadeIn, AnimatedCard } from "../../utils/animations.jsx";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const FieldReadyAccessories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const accessories = [
    {
      id: 1,
      label: "Smart Pumps",
      title:
        "High-throughput, aggregate-compatible pumps for uninterrupted printing.",
      image: "/images/fra1.jpg",
    },
    {
      id: 2,
      label: "Pan Mixers",
      title: "Ideal for batch-wise material prep with consistent mix quality.",
      image: "/images/fra2.jpg",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? accessories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === accessories.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="flex flex-col items-center w-full px-4 md:px-6 lg:px-8 py-[60px] md:py-[80px] lg:py-[100px] bg-white">
      <div className="flex flex-col items-center gap-[40px] md:gap-[50px] w-full max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-[16px] w-full">
          <FadeIn delay={0.2} duration={0.8}>
            <h2 className="text-title-mobile md:text-title font-semibold leading-[1.2] text-center text-[#0D192D] tracking-[-0.02em]">
              Field-Ready Accessories
            </h2>
          </FadeIn>
          <FadeIn delay={0.3} duration={0.8}>
            <p className="text-description-mobile md:text-description font-normal leading-[1.7] text-center text-[#4A4A4A] tracking-[-0.02em]">
              Engineered To Ensure Consistent Quality, Reduced Downtime, And
              Faster Delivery.
            </p>
          </FadeIn>
        </div>

        {/* Carousel */}
        <div className="relative w-full">
          {/* Carousel Container */}
          <div className="relative w-full overflow-visible">
            <div
              className="flex gap-5 md:gap-[30px] transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / accessories.length)
                }%)`,
              }}
            >
              {accessories.map((accessory) => (
                <div
                  key={accessory.id}
                  className="flex-shrink-0 basis-full md:basis-[70%] lg:basis-[65%] w-full max-w-full"
                  style={{ minWidth: 0 }}
                >
                  <AnimatedCard
                    className="relative w-full max-w-full h-[320px] md:h-[400px] lg:h-[450px] rounded-[12px] overflow-hidden shadow-[0px_10px_25.9px_rgba(0,0,0,0.3)] group cursor-pointer"
                    whileHover={{
                      y: -5,
                      boxShadow: "0px 15px 35px rgba(0,0,0,0.4)",
                    }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={accessory.image}
                        alt={accessory.label}
                        className="w-full h-full max-w-full object-cover group-hover:scale-105 transition-transform duration-300"
                        style={{ display: "block" }}
                      />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col p-[24px] md:p-[28px]">
                      {/* Label Badge - Top Left */}
                      <div className="inline-flex items-center justify-center bg-white rounded-[30px] px-[12px] py-[6px] self-start mb-auto">
                        <span className="text-card-mobile md:text-card font-semibold text-[#0D192D] tracking-[-0.02em]">
                          {accessory.label}
                        </span>
                      </div>

                      {/* Title - Bottom */}
                      <h3 className="text-card-mobile md:text-card font-medium leading-[1.5] text-white tracking-[-0.02em]">
                        {accessory.title}
                      </h3>
                    </div>
                  </AnimatedCard>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {accessories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#0D192D] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FieldReadyAccessories;
