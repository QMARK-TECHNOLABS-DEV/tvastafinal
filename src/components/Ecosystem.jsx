import React from 'react';
import { FadeIn, SlideInUp, StaggeredList } from '../utils/animations.jsx';

const Ecosystem = () => {
  const ecosystemItems = [
    {
      title: "3D Printers",
      description: "Precision gantries and robotic arms built for scalable, on-site construction.",
      image: "/images/The Complete 3D Construction Ecosystem 1.jpg",
      tag: "Hardware"
    },
    {
      title: "Accessories & Turnkey Services", 
      description: "End-to-end support from hardware to full project execution.",
      image: "/images/The Complete 3D Construction Ecosystem 2.jpg",
      tag: "Services"
    },
    {
      title: "Software",
      description: "Advanced tools for slicing, simulation, and real-time print control.",
      image: "/images/The Complete 3D Construction Ecosystem 3.jpg",
      tag: "Software"
    },
    {
      title: "Sustainable Materials",
      description: "Eco-friendly mixes engineered for strength, speed, and durability.",
      image: "/images/The Complete 3D Construction Ecosystem 4.jpg",
      tag: "Materials"
    }
  ];

  return (
    <div className="w-full bg-white rounded-2xl">
      <div className="flex flex-col items-start gap-16 w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-20 py-16 lg:py-20">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16 w-full">
          <FadeIn className="flex flex-col justify-center items-start max-w-[655px]">
            <h2 className="font-outfit font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[60px] text-[#0D192D]">
              The Complete 3D Construction Ecosystem
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} className="max-w-[585px]">
            <p className="font-outfit font-normal text-xl sm:text-2xl leading-[30px] text-[#1D3357]">
              From industrial-grade printers to automation-ready software — Tvasta delivers the full stack for next-gen construction.
            </p>
          </FadeIn>
        </div>

        {/* Ecosystem Cards */}
        <StaggeredList 
          staggerDelay={0.15}
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 lg:gap-10 w-full"
        >
          {ecosystemItems.map((item, index) => (
            <SlideInUp
              key={index}
              delay={index * 0.1}
              className="relative w-full sm:w-[280px] h-[400px] rounded-3xl overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <div 
                className="w-full h-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url('${item.image}')`
                }}
              >
                {/* Category Tag */}
                <div className="absolute top-4 left-4 flex justify-center items-center px-3 py-2 bg-white/90 backdrop-blur-md border border-white/15 rounded-full">
                  <span className="font-outfit font-semibold text-base text-[#0D192D]">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-outfit font-semibold text-base leading-[160%] text-white">
                    {item.description}
                  </p>
                </div>
              </div>
            </SlideInUp>
          ))}
        </StaggeredList>
      </div>
    </div>
  );
};

export default Ecosystem;
