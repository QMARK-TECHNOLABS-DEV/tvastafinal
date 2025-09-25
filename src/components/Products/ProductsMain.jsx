import React from 'react';
import { fadeInUp, staggerContainer } from '../../utils/animations.jsx';

const ProductsMain = () => {
  return (
    <section className="flex flex-col items-center gap-[25px] w-full max-w-[1280px] px-4 md:px-8">
      {/* Main Image */}
      <div 
        className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-[12px] overflow-hidden"
        {...fadeInUp}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/20">
          <img 
            src="/images/Products/productsmain.jpg" 
            alt="3D Printed Furniture Manufacturing"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Description Text */}
      <div 
        className="w-full"
        {...staggerContainer}
      >
        <p 
          className="text-[18px] md:text-[22px] lg:text-[26px] xl:text-[28px] font-normal leading-[1.25] text-center text-[#0D192D] max-w-[1280px] px-4"
          {...fadeInUp}
        >
          Crafted with precision and purpose, our concrete furniture range blends aesthetic form with functional design. Whether it's for public spaces, institutions, or contemporary interiors, each piece is made to endure and impress.
        </p>
      </div>
    </section>
  );
};

export default ProductsMain;
