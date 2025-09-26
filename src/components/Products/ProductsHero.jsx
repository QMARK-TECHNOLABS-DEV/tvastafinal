import React from 'react';
import { FadeIn, SlideInUp } from '../../utils/animations.jsx';

const ProductsHero = () => {
  return (
    <section 
      className="relative w-full h-[660px] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/images/Who Are We/herobg.png')" }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center gap-[30px] max-w-[1256px] w-full text-center pt-[80px] md:pt-[100px]">
          {/* Main Title */}
          <FadeIn delay={0.2} duration={0.8}>
            <h1 className="text-[28px] md:text-[36px] lg:text-[48px] xl:text-[54px] font-semibold leading-[1.06] text-[#0D192D] tracking-[-0.02em] capitalize max-w-[677px] px-2">
              Tvasta's 3D Printed Furniture
            </h1>
          </FadeIn>
          
          {/* Subtitle */}
          <FadeIn delay={0.4} duration={0.8}>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-semibold leading-[1.7] text-[#0D192D] tracking-[-0.02em] max-w-[1086px] px-4">
              Concrete furniture, reimagined through cutting-edge 3D printing technology.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
