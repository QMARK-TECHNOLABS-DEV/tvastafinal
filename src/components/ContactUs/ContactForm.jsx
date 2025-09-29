import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn, SlideInUp, SlideInLeft, SlideInRight } from '../../utils/animations.jsx';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interestedIn: 'Buying a Printer',
    companyName: '',
    city: '',
    country: 'Your Country',
    industry: 'Engineering',
    role: 'Design Engineer',
    hearAbout: 'How Did You Hear About Us?',
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
    <section className="relative w-full bg-[#0D192D] py-[75px]">
      {/* Contact Form Container */}
      <div className="w-full max-w-[1312px] mx-auto px-4 md:px-8 lg:px-16">
        <FadeIn delay={0.2} duration={0.8}>
          <div className="flex flex-col items-start gap-[75px] w-full">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start w-full pb-[60px] gap-6 lg:gap-[831px] border-b border-white">
              <SlideInUp delay={0.3} duration={0.6}>
                <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium leading-[140%] text-white">
                  Get in Touch
                </h2>
              </SlideInUp>
              
              <SlideInUp delay={0.4} duration={0.6}>
                <p className="text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-[30px] tracking-[-0.04em] text-white max-w-[495px]">
                  Fill out the form and our team will reach out shortly.
                </p>
              </SlideInUp>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-start gap-[60px] w-full">
              {/* First Row - Name, Email, Phone */}
              <SlideInLeft delay={0.5} duration={0.6}>
                <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-[36px] w-full">
                  {/* Name Field */}
                  <div className="flex flex-col items-start gap-4 w-full lg:flex-1">
                    <label className="text-[20px] lg:text-[24px] font-medium leading-[130%] text-white">
                      Name
                    </label>
                    <div className="flex flex-row justify-center items-center px-4 py-6 gap-[10px] w-full border-b border-white">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="flex-1 text-[16px] lg:text-[18px] font-normal leading-[140%] text-white bg-transparent outline-none placeholder-white"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col items-start gap-4 w-full lg:flex-1">
                    <label className="text-[20px] lg:text-[24px] font-medium leading-[130%] text-white">
                      Email
                    </label>
                    <div className="flex flex-row justify-center items-center px-4 py-6 gap-[10px] w-full border-b border-white">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        className="flex-1 text-[16px] lg:text-[18px] font-normal leading-[140%] text-white bg-transparent outline-none placeholder-white"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="flex flex-col items-start gap-4 w-full lg:flex-1">
                    <label className="text-[20px] lg:text-[24px] font-medium leading-[130%] text-white">
                      Phone Number
                    </label>
                    <div className="flex flex-row justify-center items-center px-4 py-6 gap-[10px] w-full border-b border-white">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your Phone Number"
                        className="flex-1 w-[381.33px] h-[12px] text-[18px] font-normal leading-[140%] text-white bg-transparent outline-none placeholder-white"
                        required
                      />
                    </div>
                  </div>
                </div>
              </SlideInLeft>

              {/* Interested In Field */}
              <SlideInRight delay={0.6} duration={0.6}>
                <div className="flex flex-row items-center gap-[36px] w-[1312px] h-[113px]">
                  <div className="flex flex-col items-start gap-4 w-[1312px] h-[113px] flex-1">
                    <label className="w-[134px] h-[17px] text-[24px] font-medium leading-[130%] text-white">
                      Interested In
                    </label>
                    <div className="flex flex-row justify-center items-center px-4 py-6 gap-[10px] w-[1312px] h-[80px] border-b border-white">
                      <select
                        name="interestedIn"
                        value={formData.interestedIn}
                        onChange={handleInputChange}
                        className="flex-1 w-[1238px] h-[12px] text-[18px] font-normal leading-[140%] text-white bg-transparent outline-none appearance-none cursor-pointer"
                      >
                        <option value="Buying a Printer" className="bg-[#0D192D]">Buying a Printer</option>
                        <option value="Partnership" className="bg-[#0D192D]">Partnership</option>
                        <option value="Investment" className="bg-[#0D192D]">Investment</option>
                        <option value="General Inquiry" className="bg-[#0D192D]">General Inquiry</option>
                      </select>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-8 h-8 flex-none">
                        <path d="M7.11133 11.7773L15.998 20.664L24.8847 11.7773" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </SlideInRight>

              {/* Second Row - Company, City, Country */}
              <SlideInLeft delay={0.7} duration={0.6}>
                <div className="flex flex-row items-center gap-[36px] w-[1312px] h-[105px]">
                  {/* Company Name Field */}
                  <div className="flex flex-col justify-between items-start gap-4 w-[413.33px] h-[105px] flex-1">
                    <label className="w-[174px] h-[17px] text-[24px] font-medium leading-[130%] text-white">
                      Company Name
                    </label>
                    <div className="flex flex-row justify-center items-center px-4 py-6 gap-[10px] w-[413.33px] h-[60px] border-b border-white">
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Your Company Name"
                        className="flex-1 w-[381.33px] h-[12px] text-[18px] font-normal leading-[140%] text-white bg-transparent outline-none placeholder-white"
                      />
                    </div>
                  </div>

                  {/* City Field */}
                  <div className="flex flex-col justify-between items-start gap-4 w-[413.33px] h-[105px] flex-1">
                    <label className="w-[44px] h-[17px] text-[24px] font-medium leading-[130%] text-white">
                      City
                    </label>
                    <div className="flex flex-row justify-center items-center px-4 py-6 gap-[10px] w-[413.33px] h-[60px] border-b border-white">
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Your City"
                        className="flex-1 w-[381.33px] h-[12px] text-[18px] font-normal leading-[140%] text-white bg-transparent outline-none placeholder-white"
                      />
                    </div>
                  </div>

                  {/* Country Field */}
                  <div className="flex flex-col items-start gap-4 w-[413.33px] h-[105px] flex-1">
                    <label className="w-[87px] h-[17px] text-[24px] font-medium leading-[130%] text-white">
                      Country
                    </label>
                    <div className="flex flex-row justify-center items-center px-4 py-6 gap-[10px] w-[413.33px] h-[72px] border-b border-white">
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="flex-1 w-[347.33px] h-[12px] text-[18px] font-normal leading-[140%] text-white bg-transparent outline-none appearance-none cursor-pointer"
                      >
                        <option value="Your Country" className="bg-[#0D192D]">Your Country</option>
                        <option value="India" className="bg-[#0D192D]">India</option>
                        <option value="United States" className="bg-[#0D192D]">United States</option>
                        <option value="United Kingdom" className="bg-[#0D192D]">United Kingdom</option>
                        <option value="Canada" className="bg-[#0D192D]">Canada</option>
                        <option value="Australia" className="bg-[#0D192D]">Australia</option>
                        <option value="Germany" className="bg-[#0D192D]">Germany</option>
                        <option value="France" className="bg-[#0D192D]">France</option>
                        <option value="Japan" className="bg-[#0D192D]">Japan</option>
                        <option value="Singapore" className="bg-[#0D192D]">Singapore</option>
                        <option value="Other" className="bg-[#0D192D]">Other</option>
                      </select>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6 flex-none">
                        <path d="M5.33398 8.83301L11.9996 15.4997L18.6663 8.83301" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </SlideInLeft>

              {/* Third Row - Industry, Role */}
              <SlideInRight delay={0.8} duration={0.6}>
                <div className="flex flex-row items-center gap-[36px] w-[1312px] h-[113px]">
                  {/* Industry Field */}
                  <div className="flex flex-col items-start gap-4 w-[638px] h-[113px] flex-1">
                    <label className="w-[88px] h-[17px] text-[24px] font-medium leading-[130%] text-white">
                      Industry
                    </label>
                    <div className="flex flex-row justify-center items-center px-4 py-6 gap-[10px] w-[638px] h-[80px] border-b border-white">
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="flex-1 w-[564px] h-[12px] text-[18px] font-normal leading-[140%] text-white bg-transparent outline-none appearance-none cursor-pointer"
                      >
                        <option value="Engineering" className="bg-[#0D192D]">Engineering</option>
                        <option value="Construction" className="bg-[#0D192D]">Construction</option>
                        <option value="Architecture" className="bg-[#0D192D]">Architecture</option>
                        <option value="Real Estate" className="bg-[#0D192D]">Real Estate</option>
                        <option value="Manufacturing" className="bg-[#0D192D]">Manufacturing</option>
                        <option value="Technology" className="bg-[#0D192D]">Technology</option>
                        <option value="Education" className="bg-[#0D192D]">Education</option>
                        <option value="Government" className="bg-[#0D192D]">Government</option>
                        <option value="Other" className="bg-[#0D192D]">Other</option>
                      </select>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-8 h-8 flex-none">
                        <path d="M7.11133 11.7773L15.998 20.664L24.8847 11.7773" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Your Role Field */}
                  <div className="flex flex-col items-start gap-4 w-[638px] h-[113px] flex-1">
                    <label className="w-[100px] h-[17px] text-[24px] font-medium leading-[130%] text-white">
                      Your Role
                    </label>
                    <div className="flex flex-row justify-center items-center px-4 py-6 gap-[10px] w-[638px] h-[80px] border-b border-white">
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="flex-1 w-[564px] h-[12px] text-[18px] font-normal leading-[140%] text-white bg-transparent outline-none appearance-none cursor-pointer"
                      >
                        <option value="Design Engineer" className="bg-[#0D192D]">Design Engineer</option>
                        <option value="Project Manager" className="bg-[#0D192D]">Project Manager</option>
                        <option value="Architect" className="bg-[#0D192D]">Architect</option>
                        <option value="CEO/Founder" className="bg-[#0D192D]">CEO/Founder</option>
                        <option value="CTO" className="bg-[#0D192D]">CTO</option>
                        <option value="Engineer" className="bg-[#0D192D]">Engineer</option>
                        <option value="Developer" className="bg-[#0D192D]">Developer</option>
                        <option value="Student" className="bg-[#0D192D]">Student</option>
                        <option value="Other" className="bg-[#0D192D]">Other</option>
                      </select>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-8 h-8 flex-none">
                        <path d="M7.11133 11.7773L15.998 20.664L24.8847 11.7773" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </SlideInRight>

              {/* How Did You Hear About Us */}
              <SlideInLeft delay={0.9} duration={0.6}>
                <div className="flex flex-row items-center gap-[36px] w-[1312px] h-[113px]">
                  <div className="flex flex-col items-start gap-4 w-[1312px] h-[113px] flex-1">
                    <label className="w-[306px] h-[17px] text-[24px] font-medium leading-[130%] text-white">
                      How Did You Hear About Us?
                    </label>
                    <div className="flex flex-row justify-center items-center px-4 py-6 gap-[10px] w-[1312px] h-[80px] border-b border-white">
                      <select
                        name="hearAbout"
                        value={formData.hearAbout}
                        onChange={handleInputChange}
                        className="flex-1 w-[1238px] h-[12px] text-[18px] font-normal leading-[140%] text-white bg-transparent outline-none appearance-none cursor-pointer"
                      >
                        <option value="How Did You Hear About Us?" className="bg-[#0D192D]">How Did You Hear About Us?</option>
                        <option value="Google Search" className="bg-[#0D192D]">Google Search</option>
                        <option value="Social Media" className="bg-[#0D192D]">Social Media</option>
                        <option value="News Article" className="bg-[#0D192D]">News Article</option>
                        <option value="Word of Mouth" className="bg-[#0D192D]">Word of Mouth</option>
                        <option value="Conference/Event" className="bg-[#0D192D]">Conference/Event</option>
                        <option value="Advertisement" className="bg-[#0D192D]">Advertisement</option>
                        <option value="Other" className="bg-[#0D192D]">Other</option>
                      </select>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-8 h-8 flex-none">
                        <path d="M7.11133 11.7773L15.998 20.664L24.8847 11.7773" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </SlideInLeft>

              {/* Message Field */}
              <SlideInRight delay={1.0} duration={0.6}>
                <div className="flex flex-row items-center gap-[36px] w-[1312px] h-[93px]">
                  <div className="flex flex-col items-start gap-4 w-[1312px] h-[93px] flex-1">
                    <label className="w-[95px] h-[17px] text-[24px] font-medium leading-[130%] text-white">
                      Message
                    </label>
                    <div className="flex flex-row justify-center items-center px-4 py-6 gap-[10px] w-[1312px] h-[60px] border-b border-white">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Message"
                        rows={1}
                        className="flex-1 w-[1280px] h-[12px] text-[18px] font-normal leading-[140%] text-white bg-transparent outline-none placeholder-white resize-none"
                      />
                    </div>
                  </div>
                </div>
              </SlideInRight>

              {/* Checkbox */}
              <SlideInUp delay={1.1} duration={0.6}>
                <div className="flex flex-row items-center gap-2 w-[550px] h-[28px]">
                  <div className="flex flex-row items-start py-[2px] gap-[10px] w-6 h-[28px]">
                    <div className="flex flex-row items-start gap-[10px] w-6 h-6">
                      <div className="relative w-6 h-6">
                        <input
                          type="checkbox"
                          name="acceptTerms"
                          checked={formData.acceptTerms}
                          onChange={handleInputChange}
                          className="absolute w-6 h-6 opacity-0 cursor-pointer z-10"
                          required
                        />
                        <div className={`absolute w-6 h-6 border border-white rounded ${formData.acceptTerms ? 'bg-white' : 'bg-[#A1A1A1]'} transition-colors duration-200`}>
                          {formData.acceptTerms && (
                            <svg className="w-4 h-4 text-[#0D192D] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="w-[518px] h-5 text-[24px] font-medium leading-5 tracking-[-0.02em] text-white">
                    I accept the Terms & Conditions and Privacy Policy*
                  </p>
                </div>
              </SlideInUp>

              {/* Submit Button */}
              <SlideInUp delay={1.2} duration={0.6}>
                <button
                  type="submit"
                  className="flex flex-row justify-center items-center py-5 px-6 gap-[10px] w-[163px] h-[52px] bg-white rounded-[35px] hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50"
                  disabled={!formData.acceptTerms}
                >
                  <span className="w-[115px] h-[12px] text-[18px] font-normal leading-[23px] text-[#1C1C1C]">
                    Send Message
                  </span>
                </button>
              </SlideInUp>

              {/* Line */}
              <SlideInUp delay={1.3} duration={0.6}>
                <div className="w-[1312px] h-0 border-t border-white"></div>
              </SlideInUp>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactForm;