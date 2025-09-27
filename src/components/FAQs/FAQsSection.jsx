import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, StaggeredList } from '../../utils/animations.jsx';

const FAQItem = ({ question, answer, isOpen, onToggle, index }) => {
  return (
    <motion.div 
      className="flex flex-col gap-[40px] w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
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
              transition={{ duration: 0.3, ease: "easeInOut" }}
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
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const regulatoryFAQs = [
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
    }
  ];

  const concreteFAQs = [
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
    }
  ];

  return (
    <section className="flex flex-col items-center gap-[120px] w-full py-0 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-[120px] w-full max-w-[1441px]">
        <div className="flex flex-col items-center gap-[120px] w-full max-w-[1280px]">
          {/* FAQ's Container */}
          <div className="flex flex-col items-start gap-[44px] w-full">
            {/* Regulatory Section */}
            <FadeIn delay={0.2}>
              <h2 className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-semibold leading-[60px] text-[#E63946] font-['Outfit']">
                Regulatory
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h3 className="text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px] font-semibold leading-[40px] text-[#1D3357] font-['Outfit'] mb-8">
                Conventional & New Technologies
              </h3>
            </FadeIn>

            {/* Regulatory FAQ Items */}
            <div className="flex flex-col items-start gap-[40px] w-full">
              {regulatoryFAQs.map((faq, index) => (
                <FAQItem
                  key={`regulatory-${index}`}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItems[`regulatory-${index}`]}
                  onToggle={() => toggleItem(`regulatory-${index}`)}
                  index={index}
                />
              ))}
            </div>

            {/* Concrete 3D Printing Section */}
            <FadeIn delay={0.4} className="mt-12">
              <h3 className="text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px] font-semibold leading-[40px] text-[#1D3357] font-['Outfit'] mb-8">
                Concrete 3D Printing
              </h3>
            </FadeIn>

            {/* Concrete FAQ Items */}
            <div className="flex flex-col items-start gap-[40px] w-full">
              {concreteFAQs.map((faq, index) => (
                <FAQItem
                  key={`concrete-${index}`}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItems[`concrete-${index}`]}
                  onToggle={() => toggleItem(`concrete-${index}`)}
                  index={index + regulatoryFAQs.length}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <FadeIn delay={0.6} className="w-full mt-12">
              <div className="flex flex-row justify-center items-center gap-[10px] w-full">
                <div className="flex flex-row items-start gap-[40px]">
                  {/* Previous Page Button */}
                  <button className="box-border flex flex-row justify-center items-center py-4 px-7 gap-[10px] w-[201px] h-[52px] bg-white border-2 border-[#E63946] rounded-[20px] hover:bg-[#E63946] hover:text-white transition-all duration-300 group">
                    <svg className="w-5 h-5 text-[#E63946] group-hover:text-white transform rotate-180 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <span className="text-[#E63946] group-hover:text-white font-semibold text-[18px] leading-[23px] font-['Outfit'] transition-colors duration-300 whitespace-nowrap">
                      Previous Page
                    </span>
                  </button>

                  {/* Next Page Button */}
                  <div className="flex flex-row items-start gap-[40px]">
                    <button className="flex flex-row justify-center items-center py-4 px-7 gap-[10px] w-[202px] h-[52px] bg-[#E63946] rounded-[20px] hover:bg-[#d32f3f] transition-all duration-300">
                      <span className="text-white font-semibold text-[18px] leading-[23px] font-['Outfit']">
                        Next Page
                      </span>
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;