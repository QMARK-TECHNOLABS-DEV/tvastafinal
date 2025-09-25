import React from 'react';
import { fadeInUp, staggerContainer, slideInFromLeft, slideInFromRight } from '../../utils/animations.jsx';

const ProductsGrid = () => {
  const products = [
    {
      id: 1,
      name: "Product Name",
      image: "/images/Products/product1.jpg",
      isMain: true
    },
    {
      id: 2,
      name: "Modern Chair",
      image: "/images/Products/product2.jpg",
      isMain: false
    },
    {
      id: 3,
      name: "Contemporary Seating",
      image: "/images/Products/product3.jpg",
      isMain: false
    },
    {
      id: 4,
      name: "Executive Collection",
      image: "/images/Products/product4.jpg",
      isMain: false
    }
  ];

  return (
    <section className="flex flex-col items-center w-full max-w-[1440px] px-4 md:px-8 lg:px-20">
      <div className="flex flex-col items-start gap-[80px] w-full max-w-[1280px]">
        {/* Section Title */}
        <div 
          className="flex flex-col justify-center items-center gap-[20px] w-full"
          {...fadeInUp}
        >
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] xl:text-[48px] font-semibold leading-[1.25] text-center text-[#0D192D] px-4">
            Our Products
          </h2>
        </div>
        
        {/* Products Grid */}
        <div 
          className="relative w-full"
          {...staggerContainer}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 items-start">
            {/* Main Product Card */}
            <div 
              className="relative col-span-1 sm:col-span-2 lg:col-span-1 order-1 lg:order-1"
              {...slideInFromLeft}
            >
              <div className="relative w-full h-[300px] md:h-[360px] rounded-[12px] overflow-hidden shadow-[0px_10px_25.9px_rgba(13,25,45,0.4)] group cursor-pointer hover:shadow-[0px_15px_35px_rgba(13,25,45,0.5)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(29,51,87,0.8)] to-[rgba(29,51,87,0.8)]">
                  <img 
                    src={products[0].image} 
                    alt={products[0].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-[6px] text-center px-4">
                  <h3 className="text-[20px] md:text-[24px] font-semibold leading-[1.7] text-white tracking-[-0.02em]">
                    {products[0].name}
                  </h3>
                  
                  {/* Arrow Button */}
                  <div className="flex items-center justify-center w-[50px] h-[50px] bg-white rounded-full group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-[20px] h-[20px] text-[#0D192D]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Images */}
            {products.slice(1).map((product, index) => (
              <div 
                key={product.id}
                className={`relative w-full h-[300px] md:h-[360px] rounded-[12px] overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 ${
                  index === 0 ? 'order-2 lg:order-2 mt-8 sm:mt-12 lg:mt-16' :
                  index === 1 ? 'order-3 lg:order-3 mt-8 sm:mt-12 lg:mt-16' :
                  'order-4 lg:order-4'
                }`}
                {...slideInFromRight}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover bg-[#F3F4F8] group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
