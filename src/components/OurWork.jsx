const OurWork = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 my-6 sm:my-12 md:my-16">
      <div className="flex flex-col items-center gap-16 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 w-full">
          <h2 className="font-outfit font-semibold text-subtitle-mobile md:text-title leading-[120%] text-[#0D192D] text-center md:text-left">
            Our Work
          </h2>
          <span className="font-outfit font-semibold text-card-mobile md:text-card leading-[20px] text-white bg-[#1D3357] px-4 py-2 rounded-full cursor-pointer">
            View All Work
          </span>
        </div>

        {/* Content Groups */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 w-full">
          {/* Card 1 - Printers */}
          <div className="relative w-full max-w-[400px] h-[400px] rounded-[24px] overflow-hidden group">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url('https://tvasta.blr1.cdn.digitaloceanspaces.com/media/ourwork1.jpg')`,
              }}
            >
              {/* Category Badge */}
              <div className="absolute top-4 left-4 flex justify-center items-center px-3 py-2 bg-white rounded-full">
                <span className="font-outfit font-semibold text-base text-[#0D192D]">
                  3D Printers
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-4 left-4 flex flex-col gap-4 w-[calc(100%-32px)]">
                <p className="font-outfit font-semibold text-lg leading-[160%] text-white">
                  Precision-built printers for fast, reliable, and scalable 3D construction.
                </p>

                <button className="flex justify-center items-center px-7 py-4 gap-[10px] bg-white rounded-[66px] w-fit">
                  <span className="font-outfit font-semibold text-sm leading-[18px] text-[#0D192D]">
                    Explore Printers
                  </span>
                  <svg 
  className="w-5 h-5 text-black" 
  fill="none" 
  stroke="currentColor" 
  strokeWidth="2" 
  viewBox="0 0 24 24" 
  xmlns="http://www.w3.org/2000/svg"
>
 <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
 </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 - Collection */}
          <div className="relative w-full max-w-[400px] h-[400px] rounded-[24px] overflow-hidden group">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url('https://tvasta.blr1.cdn.digitaloceanspaces.com/media/ourwork2.jpg')`,
              }}
            >
              <div className="absolute top-4 left-4 flex justify-center items-center px-3 py-2 bg-white rounded-full">
                <span className="font-outfit font-semibold text-base text-[#0D192D]">
                  3D Printed Furniture
                </span>
              </div>

              <div className="absolute bottom-4 left-4 flex flex-col gap-4 w-[calc(100%-32px)]">
                <p className="font-outfit font-semibold text-lg leading-[160%] text-white">
                  Design-forward pieces that blend utility with 3D-printed form.
                </p>

                <button className="flex justify-center items-center px-7 py-4 gap-[10px] bg-white rounded-[66px] w-fit">
                  <span className="font-outfit font-semibold text-sm leading-[18px] text-[#0D192D]">
                    View Collection
                  </span>
                  <svg 
  className="w-5 h-5 text-black" 
  fill="none" 
  stroke="currentColor" 
  strokeWidth="2" 
  viewBox="0 0 24 24" 
  xmlns="http://www.w3.org/2000/svg"
>
 <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
 </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 - Case Studies */}
          <div className="relative w-full max-w-[400px] h-[400px] rounded-[24px] overflow-hidden group">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url('https://tvasta.blr1.cdn.digitaloceanspaces.com/media/ourwork3.jpg')`,
              }}
            >
              <div className="absolute top-4 left-4 flex justify-center items-center px-3 py-2 bg-white rounded-full">
                <span className="font-outfit font-semibold text-base text-[#0D192D]">
                  Projects Delivered
                </span>
              </div>

              <div className="absolute bottom-4 left-4 flex flex-col gap-4 w-[calc(100%-32px)]">
                <p className="font-outfit font-semibold text-lg leading-[160%] text-white">
                  From homes to shelters, real-world impact across sectors.
                </p>

                <button className="flex justify-center items-center px-7 py-4 gap-[10px] bg-white rounded-[66px] w-fit">
                  <span className="font-outfit font-semibold text-sm leading-[18px] text-[#0D192D]">
                    View Case Studies
                  </span>
                   <svg 
  className="w-5 h-5 text-black" 
  fill="none" 
  stroke="currentColor" 
  strokeWidth="2" 
  viewBox="0 0 24 24" 
  xmlns="http://www.w3.org/2000/svg"
>
 <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
 </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
