import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.min.css';
import NavbarComponnent from './Components/NavbarComponent';

import AnimatedCursor from "react-animated-cursor"
import HeaderComponent from './Components/HeaderComponent';
import SkilComponent from './Components/SkillComponent';
import FooterComponent from './Components/FooterComponent';
import ContactFormComponent from './Components/ContactFormComponent';
import AboutComponent from './Components/AboutComponent';
import CertificateComponent from './Components/CertificateComponent';
import BioDataComponent from './Components/BioData/BioDataComponent';

const Portfolio = () => {
  return (
    <>
      <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={50}
        innerScale={1}
        outerScale={2.2}
        outerAlpha={0}
        outerStyle={{
          background: '#ffffff',
          mixBlendMode: 'exclusion'
        }}
        innerStyle={{
          backgroundColor: '#F94892'
        }}
      />
   
        <NavbarComponnent />
        <HeaderComponent />
        <AboutComponent id="about"/>
        <SkilComponent id="skill"/>
         <CertificateComponent id="certificate"/>
        <ContactFormComponent id="contact"/>
        <FooterComponent />
    </>

  );
}

// /bio-data is standalone: no cursor, navbar or footer, and it's not linked anywhere.
const App = () => {
  return (
    <Routes>
      <Route path="/bio-data" element={<BioDataComponent />} />
      <Route path="*" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
