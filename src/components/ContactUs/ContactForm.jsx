import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn, SlideInUp, SlideInLeft, SlideInRight } from '../../utils/animations.jsx';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    country: 'Select Your Country',
    fullName: '',
    workEmail: '',
    whatsappNumber: '',
    companyName: '',
    jobRole: 'Design Engineer',
    city: '',
    message: '',
    acceptTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section className="relative w-full bg-white pt-4 md:pt-6 lg:pt-8 pb-8 md:pb-12 lg:pb-16">
      {/* Contact Form Container */}
      <div className="w-full max-w-[1600px] mx-auto px-2 md:px-4 lg:px-6">
        <FadeIn delay={0.2} duration={0.8}>
          <div className="w-full max-w-[1200px] mx-auto bg-[#0D192D] rounded-[20px] md:rounded-[24px] p-4 md:p-6 lg:p-8 xl:p-10">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center mb-8 md:mb-10 text-center lg:text-left">
              <SlideInUp delay={0.3} duration={0.6}>
                <h2 className="text-card-mobile md:text-subtitle font-semibold leading-tight text-white mb-2 lg:mb-0">
                  Get in Touch
                </h2>
              </SlideInUp>
              
              <SlideInUp delay={0.4} duration={0.6}>
                <p className="text-card-mobile font-normal leading-tight text-white/80 lg:whitespace-nowrap lg:text-right">
                  Fill out the form and our team will reach out shortly.
                </p>
              </SlideInUp>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-7">
              {/* Country Field */}
              <SlideInUp delay={0.5} duration={0.6}>
                <div className="flex flex-col gap-3">
                  <label className="text-card-mobile md:text-card font-medium text-white">
                    Country
                  </label>
                  <div className="relative">
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-white/30 pb-3 text-card-mobile md:text-card text-white outline-none appearance-none cursor-pointer pr-8"
                      required
                    >
                      <option value="Select Your Country" className="bg-[#1A2332] text-white">Select Your Country</option>
                      <option value="India" className="bg-[#1A2332] text-white">India</option>
                      <option value="United States" className="bg-[#1A2332] text-white">United States</option>
                      <option value="United Kingdom" className="bg-[#1A2332] text-white">United Kingdom</option>
                      <option value="Canada" className="bg-[#1A2332] text-white">Canada</option>
                      <option value="Australia" className="bg-[#1A2332] text-white">Australia</option>
                      <option value="Germany" className="bg-[#1A2332] text-white">Germany</option>
                      <option value="Other" className="bg-[#1A2332] text-white">Other</option>
                    </select>
                    <svg className="absolute right-0 top-1 w-4 h-4 text-white pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </SlideInUp>

              {/* Full Name Field */}
              <SlideInUp delay={0.6} duration={0.6}>
                <div className="flex flex-col gap-3">
                  <label className="text-card-mobile md:text-card font-medium text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter Your Full Name"
                    className="w-full bg-transparent border-b border-white/30 pb-3 text-card-mobile md:text-card text-white placeholder-white/60 outline-none"
                    required
                  />
                </div>
              </SlideInUp>

              {/* Work Email Field */}
              <SlideInUp delay={0.7} duration={0.6}>
                <div className="flex flex-col gap-3">
                  <label className="text-card-mobile md:text-card font-medium text-white">
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleInputChange}
                    placeholder="Enter Your Work Email"
                    className="w-full bg-transparent border-b border-white/30 pb-3 text-card-mobile md:text-card text-white placeholder-white/60 outline-none"
                    required
                  />
                </div>
              </SlideInUp>

              {/* WhatsApp Number Field */}
              <SlideInUp delay={0.8} duration={0.6}>
                <div className="flex flex-col gap-3">
                  <label className="text-card-mobile md:text-card font-medium text-white">
                    Whatsapp Number
                  </label>
                  <div className="flex items-center border-b border-white/30">
                    <span className="text-card-mobile md:text-card text-white mr-2">+91</span>
                    <input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleInputChange}
                      placeholder=""
                      className="flex-1 bg-transparent pb-3 text-card-mobile md:text-card text-white placeholder-white/60 outline-none"
                      required
                    />
                  </div>
                </div>
              </SlideInUp>

              {/* Company Name Field */}
              <SlideInUp delay={0.9} duration={0.6}>
                <div className="flex flex-col gap-3">
                  <label className="text-card-mobile md:text-card font-medium text-white">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Enter Your Company Name"
                    className="w-full bg-transparent border-b border-white/30 pb-3 text-card-mobile md:text-card text-white placeholder-white/60 outline-none"
                    required
                  />
                </div>
              </SlideInUp>

              {/* Your Job Role Field */}
              <SlideInUp delay={1.0} duration={0.6}>
                <div className="flex flex-col gap-3">
                  <label className="text-card-mobile md:text-card font-medium text-white">
                    Your Job Role
                  </label>
                  <div className="relative">
                    <select
                      name="jobRole"
                      value={formData.jobRole}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-white/30 pb-3 text-card-mobile md:text-card text-white outline-none appearance-none cursor-pointer pr-8"
                      required
                    >
                      <option value="Design Engineer" className="bg-[#1A2332] text-white">Design Engineer</option>
                      <option value="Project Manager" className="bg-[#1A2332] text-white">Project Manager</option>
                      <option value="Architect" className="bg-[#1A2332] text-white">Architect</option>
                      <option value="CEO/Founder" className="bg-[#1A2332] text-white">CEO/Founder</option>
                      <option value="CTO" className="bg-[#1A2332] text-white">CTO</option>
                      <option value="Engineer" className="bg-[#1A2332] text-white">Engineer</option>
                      <option value="Developer" className="bg-[#1A2332] text-white">Developer</option>
                      <option value="Student" className="bg-[#1A2332] text-white">Student</option>
                      <option value="Other" className="bg-[#1A2332] text-white">Other</option>
                    </select>
                    <svg className="absolute right-0 top-1 w-4 h-4 text-white pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </SlideInUp>

              {/* City Field */}
              <SlideInUp delay={1.1} duration={0.6}>
                <div className="flex flex-col gap-3">
                  <label className="text-card-mobile md:text-card font-medium text-white">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter Your City"
                    className="w-full bg-transparent border-b border-white/30 pb-3 text-card-mobile md:text-card text-white placeholder-white/60 outline-none"
                    required
                  />
                </div>
              </SlideInUp>

              {/* Message Field */}
              <SlideInUp delay={1.2} duration={0.6}>
                <div className="flex flex-col gap-3">
                  <label className="text-card-mobile md:text-card font-medium text-white">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter Your Message"
                    rows={1}
                    className="w-full bg-transparent border-b border-white/30 pb-3 text-card-mobile md:text-card text-white placeholder-white/60 outline-none resize-none"
                  />
                </div>
              </SlideInUp>

              {/* Checkbox */}
              <SlideInUp delay={1.3} duration={0.6}>
                <div className="flex items-start gap-3 mt-2">
                  <div className="relative flex-shrink-0 w-4 h-4 mt-1">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleInputChange}
                      className="absolute w-4 h-4 opacity-0 cursor-pointer z-10"
                      required
                    />
                    <div className={`absolute w-4 h-4 border border-white/60 rounded-sm ${formData.acceptTerms ? 'bg-white' : 'bg-transparent'} transition-colors duration-200`}>
                      {formData.acceptTerms && (
                        <svg className="w-3 h-3 text-[#1A2332] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <p className="text-card-mobile font-normal leading-relaxed text-white/80 flex-1">
                    I accept the <span className="underline cursor-pointer hover:text-white">Terms & Conditions</span> and <span className="underline cursor-pointer hover:text-white">Privacy Policy</span>*
                  </p>
                </div>
              </SlideInUp>

              {/* Submit Button */}
              <SlideInUp delay={1.4} duration={0.6}>
                <button
                  type="submit"
                  className="w-full md:w-auto bg-white hover:bg-gray-100 text-[#1A2332] font-medium text-card-mobile md:text-card px-8 py-3 rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                  disabled={!formData.acceptTerms}
                >
                  Submit Message
                </button>
              </SlideInUp>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactForm;