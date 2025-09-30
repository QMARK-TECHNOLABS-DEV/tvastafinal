import { FadeIn, SlideInUp, StaggeredList } from '../utils/animations.jsx';

const Ecosystem = () => {
  const ecosystemItems = [
    {
      title: "3D Printers",
      description: "Precision gantries and robotic arms built for scalable, on-site construction.",
      image: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/The%20Complete%203D%20Construction%20Ecosystem%201.jpg",
      tag: "3D Printers"
    },
    {
      title: "Accessories & Turnkey Services", 
      description: "End-to-end support from hardware to full project execution.",
      image: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/The%20Complete%203D%20Construction%20Ecosystem%202.jpg",
      tag: "Accessories & Turnkey Services"
    },
    {
      title: "Software",
      description: "Advanced tools for slicing, simulation, and real-time print control.",
      image: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/The%20Complete%203D%20Construction%20Ecosystem%203.jpg",
      tag: "Software"
    },
    {
      title: "Sustainable Materials",
      description: "Eco-friendly mixes engineered for strength, speed, and durability.",
      image: "https://tvasta.blr1.cdn.digitaloceanspaces.com/media/The%20Complete%203D%20Construction%20Ecosystem%204.jpg",
      tag: "Sustainable Materials"
    }
  ];

  return (
    <div className="w-full bg-white rounded-2xl">
      <div className="flex flex-col items-start gap-16 w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-20 py-14 ">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16 w-full">
          <FadeIn className="flex flex-col justify-center items-start lg:w-[40%]">
            <h2 className="font-outfit font-semibold text-[32px] lg:text-[37px] lg:leading-[60px] leading-8 text-[#0D192D]">
              The Complete 3D Construction Ecosystem
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:w-[60%]">
            <p className="font-outfit font-normal text-xl sm:text-2xl leading-[30px] text-[#1D3357]">
              From industrial-grade printers to automation-ready software — Tvasta delivers the full stack for next-gen construction.
            </p>
          </FadeIn>
        </div>

        {/* Ecosystem Cards */}
        <StaggeredList 
          staggerDelay={0.15}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {ecosystemItems.map((item, index) => (
            <SlideInUp
              key={index}
              delay={index * 0.1}
              className="relative w-full h-[380px] lg:h-[420px] rounded-[20px] overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <div 
                className="w-full h-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('${item.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>

                {/* Category Tag */}
                <div className="absolute top-4 left-4 flex justify-center items-center px-3 py-1.5 bg-white rounded-full z-10">
                  <span className="font-outfit font-medium text-sm text-[#0D192D]">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <p className="font-outfit font-medium text-base leading-[140%] text-white">
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
