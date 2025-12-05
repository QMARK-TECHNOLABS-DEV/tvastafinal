import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FadeIn, SlideInLeft, SlideInRight } from "../utils/animations.jsx";

const WhyTvasta = () => {
  const navigate = useNavigate();
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
              Founded at IIT Madras in 2016, Tvasta is redefining construction
              with scalable, sustainable 3D printing technology. Our mission:
              build intelligently, sustainably, and accessibly.
              <br />
              <span
                onClick={() => {
                  navigate("/who-we-are");
                  window.scrollTo(0, 0);
                }}
                className="text-[#E63946] underline cursor-pointer hover:no-underline transition-all"
              >
                Know More…
              </span>
            </p>
          </SlideInRight>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-col lg:flex-row items-start gap-8 w-full">
          <FadeIn delay={0.2}>
            <motion.div
              className="relative w-full lg:w-[392px] h-[500px] rounded-2xl overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 600, damping: 10 }}
            >
              <div
                className="w-full h-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.86) 67.12%), url('https://tvasta.blr1.cdn.digitaloceanspaces.com/media/whytvasta1.jpg')`,
                }}
              >
                <div className="absolute bottom-6 left-6 flex flex-col gap-3">
                  <h3 className="font-outfit font-normal text-card-mobile md:text-card text-white max-w-[332px]">
                    25,000+
                    <br /> Sq. Ft. 3D Printed
                  </h3>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <motion.div
              className="relative w-full lg:w-[392px] h-[500px] rounded-2xl overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 600, damping: 10 }}
            >
              <div
                className="w-full h-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.88) 100%), url('https://tvasta.blr1.cdn.digitaloceanspaces.com/media/whytvasta2.png')`,
                }}
              >
                <div className="absolute bottom-6 left-6 flex flex-col gap-3">
                  <h3 className="font-outfit font-normal text-subtitle-card md:text-card text-white max-w-[332px]">
                    66% <br /> Cement Replaced in Mixes
                  </h3>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <motion.div
              className="relative w-full lg:w-[392px] h-[500px] rounded-2xl overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 600, damping: 10 }}
            >
              <div
                className="w-full h-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.64) 100%), url('https://tvasta.blr1.cdn.digitaloceanspaces.com/media/whytvasta3.jpg')`,
                }}
              >
                <div className="absolute bottom-6 left-6 flex flex-col gap-3">
                  <h3 className="font-outfit font-normal text-card-mobile md:text-card text-white max-w-[332px]">
                    Global Footprint
                    <br />
                    <span className="text-card-mobile md:text-card">
                      Asia Pacific - Middle East - USA
                    </span>
                  </h3>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default WhyTvasta;
