import React from 'react';
import { PageTransition } from '../utils/animations.jsx';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import OurWork from '../components/OurWork';
import WhyChoose3D from '../components/WhyChoose3D';
import WhyTvasta from '../components/WhyTvasta';
import Technology from '../components/Technology';
import Ecosystem from '../components/Ecosystem';
import Projects from '../components/Projects';
import Questions from '../components/Questions';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <PageTransition className="relative w-full bg-white">
      <Navbar />
      <Hero />
      <div className="flex flex-col justify-center items-center gap-[120px] w-full py-[60px]">
        <Partners />
        <OurWork />
        <WhyChoose3D />
        <WhyTvasta />
        <Technology />
        <Ecosystem />
        <Projects />
        <Questions />
      </div>
      <Footer />
    </PageTransition>
  );
};

export default HomePage;
