
const Ecosystem = () => {
  const techImages = [
    'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/OurTechnology/Our%203D%20Construction%20Ecosystem%201.jpg',
    'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/OurTechnology/Our%203D%20Construction%20Ecosystem%202.jpg',
    'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/OurTechnology/Our%203D%20Construction%20Ecosystem%203.jpg',
    'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/OurTechnology/Our%203D%20Construction%20Ecosystem%204.jpg',
    'https://tvasta.blr1.cdn.digitaloceanspaces.com/media/OurTechnology/Our%203D%20Construction%20Ecosystem%205.jpg',
  ];

  const ecosystemData = [
    { title: '3D Printers', description: 'From industry-scale gantries to mobile robotic arms, our machines print faster and smarter.', image: techImages[0] },
    { title: 'Accessories & Turnkey Services', description: 'We offer more than machinery, from pumps to project execution, we\'re your build partner.', image: techImages[1] },
    { title: '3D Printed Furniture', description: 'Functional, sculptural, and built to last, our urban furniture blends aesthetic precision with print performance.', image: techImages[2] },
    { title: 'Software', description: 'From design to deployment, our in-house platform simplifies slicing, simulation, and print control.', image: techImages[3] },
    { title: 'Sustainable Materials', description: 'From geopolymer blends to eco-concrete, our material portfolio supports sustainable, high-performance 3D printing across diverse applications.', image: techImages[4] }
  ];

  return (
 <section className="w-full bg-white md:pt-14 px-4">
  <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-16">
    {/* Heading */}
    <div className="flex flex-col items-center gap-3 text-center">
      <h2 className="font-outfit font-semibold text-3xl md:text-4xl lg:text-5xl text-[#0D192D]">
        Our 3D Construction Ecosystem
      </h2>
      <p className="font-outfit font-medium text-base md:text-lg lg:text-2xl text-[#1D3357]">
        Where Innovation Becomes Infrastructure
      </p>
    </div>

    {/* Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
      {ecosystemData.map((item, index) => (
        <div 
          key={index} 
          className={`${index === ecosystemData.length - 1 ? 'lg:col-span-2' : ''}`}
        >
          <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-[24px] overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url(${item.image}) center/cover no-repeat`
              }}
            >
              <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-2 font-outfit font-semibold text-sm md:text-base lg:text-lg text-[#0D192D] border border-white/15">
                {item.title}
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white font-outfit font-medium text-sm md:text-base lg:text-lg">
                {item.description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Ecosystem;
