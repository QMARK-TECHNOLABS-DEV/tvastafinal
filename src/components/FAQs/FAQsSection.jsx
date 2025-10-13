import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, StaggeredList } from '../../utils/animations.jsx';

const FAQItem = ({ question, answer, isOpen, onToggle, index }) => {
  return (
    <motion.div 
      className="flex flex-col gap-[40px] w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.45 }}
    >
      <div className="flex flex-col gap-[38px] w-full">
        {/* Question */}
        <button
          onClick={onToggle}
          className="text-left w-full text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-normal leading-[40px] text-[#101010] font-['Outfit'] hover:text-[#E63946] transition-colors duration-300 focus:outline-none"
        >
          {question}
        </button>

        {/* Answer with Expand/Collapse Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="flex flex-row items-start gap-[28px] w-full">
                {/* Arrow Icon */}
                <div className="flex flex-col items-start p-[10px_1px_4px] gap-[10px] w-6 min-w-6 h-[29.98px]">
                  <svg className="w-[22px] h-[15.98px] text-[#E63946] transform rotate-90" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </div>
                
                {/* Answer Text */}
                <div className="flex-1 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-normal leading-[160%] text-[#101010] font-['Outfit'] whitespace-pre-line">
                  {answer}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Separator Line */}
      <div className="w-full h-[2px] bg-[#101010]"></div>
    </motion.div>
  );
};

const FAQsSection = () => {
  const itemsPerPage = 10;

  // --- RESTORED original FAQ items (kept in same order they were before changes) ---
  const originalFaqs = [
    {
      question: "What is the approval process for construction of conventional buildings (B2B)?",
      answer: `For Standard building construction, the following drawings require sign off from consultants and Budget approvals with BOQ line items:
• Architecture design (by Design Architect)
• Interiors
• MEP drawings
• Structural drawings (by Structural Consultant)`
    },
    {
      question: "What is the approval process for construction of conventional buildings with Government affiliated Institutions (or) organizations?",
      answer: "Along with approvals for standing building construction, layout approval from local municipal authority along with budget approval from the govt. POC"
    },
    {
      question: "What are the types of drawings that are required for conventional construction activity?",
      answer: `Good For Construction Drawings:
• Architectural - Building Drawings (+Elevation)
• Structural Drawings
• MEP Drawings
• Lighting, Interiors and Finishes`
    },
    {
      question: "What are the standard reports required for generating structural drawings for construction projects?",
      answer: `• Soil Report
• Site Contour Drawings (with tree markings if any)
• Structural Analysis based on 3D Design (for unique projects)`
    },
    {
      question: "Is Structural Approval Mandatory for all conventional construction buildings?",
      answer: `• All Structural drawings have to follow IS codes for construction.
• Structural drawings have to be attested by a certified structural engineer
• Concrete Strength data has to be shared to Structural engineer for quality approvals`
    },
    {
      question: "What steps/approvals are required for 3D Printed Building from conventional building?",
      answer: `• PACS certification is sufficient for promoting 3D Printing building approvals
• Without PACS certification, building design has to be verified by: Structural Engineer who is part of a Govt. affiliated Institute
• Material QC data has to be validated to ensure strength criteria is met`
    },
    {
      question: "What is PACS Certification? How are new technologies construction activities promoted in India by the Ministry of Housing and Urban Affairs MoHUA?",
      answer: "https://bmtpc.org/topics.aspx"
    },
    {
      question: "How many technologies have been granted PACS certification in the last 10 years? How has their adoption rate scaled over the years?",
      answer: `• Since 1990, 84 methodologies have been granted PACS Certification
• PACS Certified technologies have seen commendable growth moving from Demonstration projects to Commercial Projects (for eg, uPVC Windows, GFRG Panels )`
    },
    {
      question: "How does Tvasta plan to promote more concrete 3D Printed Buildings in different regions?",
      answer: `Tvasta aims to introduce automation in the construction industry, via Concrete 3D Printing. In Construction Industry, Tvasta plans to capture the market using the following methods:
• Execution of pilot projects across different markets and promoting unique design features using 3D Printing
• Introduction of New Infrastructure elements through State Civic bodies
• Supporting with Structural and material testing aiding with development of Codes for 3D Printing ( Further Submission to Bureau of Indian Standards - providing platform for entrance into the larger construction market via any individual contractor)`
    },
    {
      question: "Are there any additional steps required for Structural and QC maintenance of 3D Printing Material?",
      answer: `No differences in the quality process against conventional construction as IS codes are always followed for construction projects in India. Cube Moulds are casted during daily production. Strength data from cubes are verified to ensure quality is maintained.`
    }
  ];

  // --- NEW questions provided by the user (they will follow the originalFaqs) ---
  const newFaqs = [
    {
      question: "What approvals are required for 3D Printed buildings in the USA and MENA?",
      answer: `Approvals vary by jurisdiction. For example, Dubai has updated building codes to support Construction 3D Printing — see the Dubai Municipality 3DCP Guideline (1st Edition Jun 2024): https://www.dm.gov.ae/wp-content/uploads/2024/07/Dubai-Municipality-3DCP-Guideline-1st-Edition-Jun24.pdf. In the USA and other MENA countries, local building authorities, structural engineer sign-offs, and material certification/third-party testing are commonly required.`
    },
    {
      question: "How does Tvasta plan on executing 3D Printing projects in USA and MENA?",
      answer: `Tvasta has shipped 3D printers to the Middle East and USA which will act as primary enablers for Construction 3D Printing projects. Service options will be available for clients/contractors purchasing machines, driving increased adoption and project delivery in the US & Middle East markets.`
    },
    {
      question: "What Material composition is Tvasta’s 3D Printed Mix?",
      answer: `Tvasta's proprietary 3D printing mix includes:
• Cement / Binder
• Sand
• Admixtures in specific proportions (designed and tested by Tvasta to meet required strength and rheology).`
    },
    {
      question: "How is Concrete Material Classified for Structural Requirements? What is the process for monitoring QC for Concrete based material?",
      answer: `Concrete is classified by its design strength (selected by the structural engineer). Common grades: M25, M30, M35. QC involves routine sampling, cube mould tests, and verification of strength data against design requirements, plus material traceability and mix control on-site.`
    },
    {
      question: "How much Concrete Material is required for a standard 2 bedroom Conventional building? What is the material savings involved when executing the same building?",
      answer: `For a typical 2-bedroom apartment of ~1500 sqft, approximately 50 m³ of material may be required for the 3D printing process. Material savings come from non-solid walls (hollow pockets and optimized geometry) which reduce total material compared to conventional solid-wall construction.`
    },
    {
      question: "What are the different types of Concrete 3D Printers available?",
      answer: `Common types:
• Gantry-Based Concrete 3D Printer
• Robotic Arm-Based Concrete 3D Printer`
    },
    {
      question: "What is a Gantry based 3D Printer?",
      answer: `A gantry-based 3D printer is a fixed-frame robotic system where the print head moves along predefined X/Y/Z axes on a rigid gantry structure to deposit material layer-by-layer.`
    },
    {
      question: "What is a Robotic Arm based 3D Printer?",
      answer: `A robotic arm-based 3D printer uses an articulated multi-axis robotic arm to deposit material, enabling greater flexibility and more complex geometries than fixed gantry systems.`
    },
    {
      question: "What type of printer is more suitable for building large structures?",
      answer: `Polar-Based or large-scale gantry systems are typically more suitable for very large structures due to their extended reach and modular scalability.`
    },
    {
      question: "What are the key parameters influencing the print quality?",
      answer: `Key parameters:
• Material properties: rheology, thixotropy, bonding, setting time & curing
• Process parameters: extrusion speed & pressure, layer height, nozzle design, print-path motion
• Environmental: temperature, humidity, wind, vibration
• Reinforcement & structural integrity: fibers, embedded reinforcement`
    },
    {
      question: "What technologies (AI, BIM) does your firm incorporate from planning to implementation?",
      answer: `Tvasta incorporates:
• AI & Machine Learning for print optimization
• BIM (Building Information Modeling) for coordinated workflows
• IoT & sensor-based monitoring
• Sustainable and smart construction practices`
    },
    {
      question: "What are the maintenance costs associated with concrete 3D printers compared to traditional equipment?",
      answer: `Typical maintenance items:
• Print head & nozzle replacement/wear
• Pump & hose cleaning
• Sensor & calibration checks
• Software & firmware updates
• Structural frame & gantry maintenance`
    },
    {
      question: "How is the cost to benefit valuation for robotic arm and gantry based 3D Printer?",
      answer: `Cost-benefit depends on project scale, utilization and labor savings. Gantry systems typically offer higher throughput per CAPEX for large repeated works; robotic arms offer flexibility for complex geometries. A detailed ROI model per project is recommended.`
    },
    {
      question: "What are the certifications Tvasta has in terms of Concrete-3D printers?",
      answer: `Tvasta holds ISO certifications and PAC (PACS) related certifications for its processes/products.`
    },
    {
      question: "Take a case of G-Floor structure: which printer is the best suitable for printing the structure?",
      answer: `A gantry-based concrete 3D printer is generally preferred for large planar and G-Floor structures due to stability and coverage.`
    },
    {
      question: "What is the typical height range for concrete 3D printers?",
      answer: `Typical height ranges:
• Gantry-based: up to ~10–12 m
• Robotic arm-based: ~2.8–3 m (per station/arm, extendable with strategies)`
    },
    {
      question: "What factors influence the height reach of a 3D concrete printer?",
      answer: `Factors include printer type & design, mechanical stability, material properties & extrusion control, structural support, and on-site scalability considerations.`
    },
    {
      question: "How can height reach be extended in 3D concrete printing?",
      answer: `Approaches:
• Hardware: modular gantry extensions, telescopic/lift-assisted systems, multi-gantry or track-mounted setups
• Material & extrusion: high-strength, fast-curing mixes, optimized bonding
• Process: multi-stage printing, segmental assembly, temporary bracing`
    },
    {
      question: "How does nozzle diameter affect print quality and height reach?",
      answer: `Nozzle diameter impacts resolution and bonding:
• Smaller nozzles: finer resolution, better layer adhesion (can allow taller builds with proper curing)
• Larger nozzles: thicker layers, faster deposition but may reduce bond strength and limit height`
    },
    {
      question: "How does extrusion pressure impact height reach and layer stability?",
      answer: `Extrusion pressure affects consistency and bonding:
• Lower pressure: improved layer control, can support taller stable builds
• Higher pressure: faster deposition but risk of weaker interlayer bonding`
    },
    {
      question: "How does the variable accelerator dosing system enhance layer adhesion and curing?",
      answer: `A Variable Accelerator Dosing System (VADS) dynamically adjusts accelerator dosage in real time to optimize setting speed, improving interlayer bonding and dimensional control during printing.`
    },
    {
      question: "What are the nozzle specifications and how do they impact print quality?",
      answer: `Tvasta commonly uses:
• Circular: 10mm, 20mm, 30mm, 40mm, 50mm
• Square: 20x20mm, 30x30mm
• Rectangular: 10x20mm, 15x20mm
Nozzle shape and size affect layer width, surface finish, and bonding characteristics.`
    },
    {
      question: "What is the primary use of an accelerator dosing pump in a concrete 3D Printer?",
      answer: `An accelerator dosing pump injects setting accelerators into the mix in real time, controlling curing speed and improving layer adhesion during printing.`
    },
    {
      question: "What are the different types of gantry based 3D printers available under the umbrella of Tvasta?",
      answer: `Examples:
• NIRMAAN RD (Lab-Scale Printer)
• NIRMAAN PD (Offsite Production Printer)
• NIRMAAN ZT (Onsite Production Printer)`
    },
    {
      question: "What are the different types of robotic arm based 3D printers available under the umbrella of Tvasta?",
      answer: `Examples:
• SIRA RP (Robotic arm on Pedestal)
• SIRA RC (Robotic arm on Crawler)
• SIRA RT (Robotic arm on Rail)`
    },
    {
      question: "How does scalability affect the cost-effectiveness of 3D concrete printing?",
      answer: `Scalability improves cost-effectiveness by reducing per-unit costs via optimized material use, labor/time efficiency, better machine utilization (ROI), and repeatable workflows — making mass housing and infrastructure projects more viable.`
    },
    {
      question: "How are the accessories coming up with the printers configured to the requirements?",
      answer: `Accessories typically include pan-mixers, mortar pumps, batching plants and dosing pumps, configured per project capacity and local requirements.`
    },
    {
      question: "What are the maximum movement speeds of a Concrete 3D Printer?",
      answer: `Typical maximum movement speeds:
• Gantry-based: up to ~500 mm/s
• Robotic arm-based: up to ~400 mm/s`
    },
    {
      question: "What are the maximum printing speeds of a Concrete 3D Printer?",
      answer: `Typical printing speeds:
• Gantry-based onsite: up to ~300 mm/s
• Gantry-based (lab/offsite models like NIRMAAN RD/PD): ~200 mm/s
• Robotic arm-based: ~150–200 mm/s`
    },
    {
      question: "Is Tvasta looking at end-to-end automation in construction in the following years?",
      answer: `Yes — Tvasta aims to automate critical construction phases (foundation, superstructure, roofing, finishing) to maximize efficiency gains.`
    },
    {
      question: "What slicing and path planning capabilities are offered by Tvasta’s Digital Construction OS?",
      answer: `Capabilities include automated layer slicing, optimized print sequences, dynamic speed adjustment, and live print simulation.`
    },
    {
      question: "How is layer transition managed for complex geometries?",
      answer: `Layer transitions are handled via adaptive slicing, toolpath optimization and real-time monitoring to preserve structural integrity and surface quality.`
    },
    {
      question: "What innovations are used to prevent nozzle clogging and material segregation?",
      answer: `Common measures:
• Continuous material agitation
• Active mixing at the nozzle
• Viscosity-optimized additives and filtration`
    },
    {
      question: "What is the output rate of a 3D Printer? How is the output rate related to the printing speed of a 3D Printer?",
      answer: `Output rates commonly range ~0.1 m³/hr to 0.5 m³/hr depending on nozzle size, layer height, extrusion pressure, material rheology and path complexity.`
    },
    {
      question: "What are the main cost components in conventional concrete construction compared to 3D printing?",
      answer: (
        <div className="w-full">
          <div className="bg-white border rounded-2xl p-4 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left compact comparison (as in first image) */}
              <div className="p-3 border rounded-lg">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b">
                      <th className="text-left py-2">Equipment & Machinery</th>
                      <td className="py-2">Moderate (mixers, pumps, cranes)</td>
                      <td className="py-2">High initial cost (3D printer), lower recurring</td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left py-2">Customization Costs</th>
                      <td className="py-2">Expensive (complex shapes require extra work)</td>
                      <td className="py-2">Minimal (digital design flexibility)</td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left py-2">Energy Consumption</th>
                      <td className="py-2">Lower per unit operation</td>
                      <td className="py-2">Higher per operation, but overall savings from speed</td>
                    </tr>
                    <tr>
                      <th className="text-left py-2">Maintenance & Training</th>
                      <td className="py-2">Lower for traditional equipment</td>
                      <td className="py-2">Higher for printer maintenance and skilled operation</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Right detailed cost-component table (as in second image) */}
              <div className="p-3 border rounded-lg">
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold py-2">Cost Component</th>
                      <th className="text-left font-semibold py-2">Conventional Construction</th>
                      <th className="text-left font-semibold py-2">Concrete 3D Printing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="py-2">Labor</td>
                      <td className="py-2">High (formwork, rebar, manual work)</td>
                      <td className="py-2">Low (automated printing, minimal labor)</td>
                    </tr>
                    <tr className="border-t">
                      <td className="py-2">Formwork</td>
                      <td className="py-2">High (materials, labor-intensive setup/removal)</td>
                      <td className="py-2">Eliminated (direct layer-by-layer printing)</td>
                    </tr>
                    <tr className="border-t">
                      <td className="py-2">Material Waste</td>
                      <td className="py-2">High (cutting, overuse, rework)</td>
                      <td className="py-2">Low (precise material deposition)</td>
                    </tr>
                    <tr className="border-t">
                      <td className="py-2">Time & Project Duration</td>
                      <td className="py-2">Longer (manual processes, curing delays)</td>
                      <td className="py-2">Shorter (continuous printing, faster curing)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-600">Note: values are indicative and can vary by project, machine model, mix design and local labor costs.</p>
        </div>
      )
    }
  ];

  // combine original + new so the original questions remain in their first positions
  const allFaqs = [...originalFaqs, ...newFaqs];

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allFaqs.length / itemsPerPage);
  const [openItems, setOpenItems] = useState({});

  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentFaqs = allFaqs.slice(startIdx, startIdx + itemsPerPage);

  const toggleItem = (globalIndex) => {
    setOpenItems(prev => ({
      ...prev,
      [globalIndex]: !prev[globalIndex]
    }));
  };

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    setOpenItems({});
  };

  return (
    <section className="flex flex-col items-center gap-[120px] w-full py-0 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-[120px] w-full max-w-[1441px]">
        <div className="flex flex-col items-center gap-[120px] w-full max-w-[1280px]">
          {/* Header */}
          <div className="flex flex-col items-start gap-[12px] w-full">
            <div className="flex items-center justify-between w-full">
              <FadeIn delay={0.2}>
                <h2 className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-semibold leading-[60px] text-[#E63946] font-['Outfit'] mb-8">
                  Frequently Asked Questions
                </h2>
              </FadeIn>
            </div>

            {/* FAQ Items (paginated) */}
            <div className="flex flex-col items-start gap-[40px] w-full">
              {currentFaqs.map((faq, idx) => {
                const globalIndex = startIdx + idx;
                return (
                  <FAQItem
                    key={`faq-${globalIndex}`}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={!!openItems[globalIndex]}
                    onToggle={() => toggleItem(globalIndex)}
                    index={globalIndex}
                  />
                );
              })}
            </div>

            {/* Pagination Controls (show all page numbers so pages >5 are visible) */}
            <FadeIn delay={0.6} className="w-full mt-12">
              <div className="flex flex-row justify-center items-center gap-4 w-full flex-wrap">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`box-border flex items-center gap-[10px] py-3 px-4 h-[44px] rounded-[12px] ${currentPage === 1 ? 'bg-gray-200 text-gray-500' : 'bg-white border-2 border-[#E63946] text-[#E63946]'}`}
                >
                  Prev
                </button>

                <div className="flex items-center gap-2 flex-wrap">
                  {Array.from({ length: totalPages }).map((_, i) => {
                    const page = i + 1;
                    return (
                      <button
                        key={`page-${page}`}
                        onClick={() => goToPage(page)}
                        className={`w-10 h-10 rounded-full ${currentPage === page ? 'bg-[#E63946] text-white' : 'bg-white border'}`}
                      >
                        {page}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`box-border flex items-center gap-[10px] py-3 px-4 h-[44px] rounded-[12px] ${currentPage === totalPages ? 'bg-gray-200 text-gray-500' : 'bg-[#E63946] text-white'}`}
                >
                  Next
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;