import React, { useState } from 'react';
import { FadeIn, SlideInUp, AnimatedButton } from '../../utils/animations.jsx';

const CareerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    whatsappNumber: '',
    jobRole: '',
    resume: null,
    message: ''
  });

  const [selectedCountryCode, setSelectedCountryCode] = useState('+91');
  const [jobRoleDropdownOpen, setJobRoleDropdownOpen] = useState(false);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);

  const jobRoles = [
    'Design Engineer',
    'Software Engineer',
    'Mechanical Engineer',
    'Research Scientist',
    'Product Manager',
    'Marketing Specialist',
    'Business Development',
    'Quality Assurance'
  ];

  const countryCodes = [
    { code: '+91', country: 'India' },
    { code: '+1', country: 'USA' },
    { code: '+44', country: 'UK' },
    { code: '+86', country: 'China' },
    { code: '+81', country: 'Japan' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) { // 2MB limit
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
    } else {
      alert('File size should be less than 2MB');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="flex justify-center items-end w-full max-w-[1080px] px-4 md:px-0">
      <SlideInUp delay={0.2} duration={0.8}>
        <div className="w-full bg-[#0D192D] rounded-[24px] overflow-hidden">
          {/* Form Container */}
          <div className="flex flex-col items-start p-[45px] md:p-[75px_64px] gap-[75px] w-full">
            {/* Header */}
            <FadeIn delay={0.4} duration={0.6}>
              <div className="flex flex-row justify-between items-start w-full pb-[30px] border-b border-transparent">
                <h2 className="font-outfit font-medium text-[24px] md:text-[32px] leading-[40px] tracking-[-0.04em] text-white text-center w-full">
                  Fill out the form and our team will reach out shortly.
                </h2>
              </div>
            </FadeIn>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-start gap-[60px] w-full">
              {/* Full Name Field */}
              <div className="flex flex-col items-start gap-[16px] w-full">
                <label className="font-outfit font-medium text-[24px] leading-[130%] text-white">
                  Full Name
                </label>
                <div className="box-border flex flex-row justify-center items-center py-[24px] px-[16px] gap-[10px] w-full border-b border-white">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter Your Full Name"
                    className="w-full font-outfit font-normal text-[18px] leading-[140%] text-white bg-transparent outline-none placeholder-white/60"
                    required
                  />
                </div>
              </div>

              {/* Work Email Field */}
              <div className="flex flex-col items-start gap-[16px] w-full">
                <label className="font-outfit font-medium text-[24px] leading-[130%] text-white">
                  Work Email
                </label>
                <div className="box-border flex flex-row justify-center items-center py-[24px] px-[16px] gap-[10px] w-full border-b border-white">
                  <input
                    type="email"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleInputChange}
                    placeholder="Enter Your Work Email"
                    className="w-full font-outfit font-normal text-[18px] leading-[140%] text-white bg-transparent outline-none placeholder-white/60"
                    required
                  />
                </div>
              </div>

              {/* WhatsApp Number Field */}
              <div className="flex flex-col items-start gap-[16px] w-full">
                <label className="font-outfit font-medium text-[24px] leading-[130%] text-white">
                  Whatsapp Number
                </label>
                <div className="box-border flex flex-row justify-center items-center py-[24px] px-[16px] gap-[10px] w-full border-b border-white">
                  <div className="flex flex-row justify-between items-center gap-[10px] w-full">
                    {/* Country Code Dropdown */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                        className="flex items-center gap-[10px] text-white font-outfit font-normal text-[18px]"
                      >
                        {selectedCountryCode}
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7 10l5 5 5-5z"/>
                        </svg>
                      </button>
                      
                      {countryDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 bg-[#1D3357] border border-white/20 rounded-lg shadow-lg z-10 min-w-[120px]">
                          {countryCodes.map((item, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => {
                                setSelectedCountryCode(item.code);
                                setCountryDropdownOpen(false);
                              }}
                              className="w-full px-4 py-2 text-left text-white hover:bg-white/10 font-outfit text-[16px]"
                            >
                              {item.code} {item.country}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleInputChange}
                      placeholder="Enter your number"
                      className="flex-1 font-outfit font-normal text-[18px] leading-[140%] text-white bg-transparent outline-none placeholder-white/60"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Job Role Field */}
              <div className="flex flex-col items-start gap-[16px] w-full">
                <label className="font-outfit font-medium text-[24px] leading-[130%] text-white">
                  Your Job Role
                </label>
                <div className="box-border flex flex-row justify-center items-center py-[24px] px-[16px] gap-[10px] w-full border-b border-white relative">
                  <button
                    type="button"
                    onClick={() => setJobRoleDropdownOpen(!jobRoleDropdownOpen)}
                    className="flex flex-row justify-between items-center w-full"
                  >
                    <span className="font-outfit font-normal text-[18px] leading-[140%] text-white text-left flex-1">
                      {formData.jobRole || 'Design Engineer'}
                    </span>
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 10l5 5 5-5z"/>
                    </svg>
                  </button>
                  
                  {jobRoleDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-[#1D3357] border border-white/20 rounded-lg shadow-lg z-10">
                      {jobRoles.map((role, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, jobRole: role }));
                            setJobRoleDropdownOpen(false);
                          }}
                          className="w-full px-4 py-3 text-left text-white hover:bg-white/10 font-outfit text-[18px] border-b border-white/10 last:border-b-0"
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Resume Upload Field */}
              <div className="flex flex-col items-start gap-[16px] w-full">
                <label className="font-outfit font-medium text-[24px] leading-[130%] text-white">
                  Your Job Role
                </label>
                <div className="box-border flex flex-row justify-center items-center py-[24px] px-[16px] gap-[10px] w-full border-b border-white">
                  <span className="flex-1 font-outfit font-normal text-[18px] leading-[140%] text-white">
                    {formData.resume ? formData.resume.name : 'Upload Your Resume (Max 2 MB File Size)'}
                  </span>
                  
                  <label className="flex flex-row justify-center items-center py-[10px] px-[15px] gap-[14px] bg-white rounded-[100px] cursor-pointer">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                      <path d="M12,11L16,15H13V19H11V15H8L12,11Z" />
                    </svg>
                    <span className="font-outfit font-medium text-[16px] leading-[20px] text-[#0D192D]">
                      Upload Resume
                    </span>
                  </label>
                </div>
              </div>

              {/* Message Field */}
              <div className="flex flex-col items-start gap-[16px] w-full">
                <label className="font-outfit font-medium text-[24px] leading-[130%] text-white">
                  Message
                </label>
                <div className="box-border flex flex-row justify-center items-center py-[24px] px-[16px] gap-[10px] w-full border-b border-white">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter Your Message"
                    rows={1}
                    className="w-full font-outfit font-normal text-[18px] leading-[140%] text-white bg-transparent outline-none placeholder-white/60 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <AnimatedButton
                type="submit"
                className="flex flex-row justify-center items-center py-[20px] px-[24px] gap-[10px] bg-white rounded-[35px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-outfit font-normal text-[18px] leading-[23px] text-[#1C1C1C]">
                  Submit
                </span>
              </AnimatedButton>
            </form>
          </div>
        </div>
      </SlideInUp>
    </div>
  );
};

export default CareerForm;