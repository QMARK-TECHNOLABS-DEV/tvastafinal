import React from 'react';
import { PageTransition } from '../../utils/animations.jsx';
import Navbar from '../Navbar';
import Footer from '../Footer';
import PageHeader from './PageHeader';
import OurStory from './OurStory';
import OurMission from './OurMission';
import WhatWeDo from './WhatWeDo';
import FoundersTeam from './FoundersTeam';
import Certifications from './Certifications';
import KeyCollaborations from './KeyCollaborations';
import BuildingTomorrow from './BuildingTomorrow';

const WhoAreWe = () => {
  return (
    <PageTransition className="relative w-full min-h-screen bg-white">
      <Navbar />
      
      {/* Main Content */}
      <div className="flex flex-col w-full">
        <PageHeader />
        
        <div className="flex flex-col items-center gap-[120px] w-full py-0">
          <OurStory />
          <OurMission />
          <WhatWeDo />
          <FoundersTeam />
          <Certifications />
          <KeyCollaborations />
          <BuildingTomorrow />
        </div>
        
        {/* Spacing before footer */}
        <div className="w-full h-[120px]"></div>
      </div>
      
      <Footer />
    </PageTransition>
  );
};

export default WhoAreWe;
