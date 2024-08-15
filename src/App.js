import React from 'react';
import './index.min.css';
import NavbarComponnent from './Components/NavbarComponent';

import AnimatedCursor from "react-animated-cursor"
import HeaderComponent from './Components/HeaderComponent';
import SkilComponent from './Components/SkillComponent';
import FooterComponent from './Components/FooterComponent';
import ProjectComponent from './Components/ProjectComponent';
import ContactFormComponent from './Components/ContactFormComponent';
import AboutComponent from './Components/AboutComponent';

const App = () => {
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
        <ProjectComponent
          projectTitle="Study Of Consumer Satisfaction"
          projectDesc="During my summer internship at Uratom Solar India Private Limited, I assessed consumer satisfaction with their products and services. I also honed my skills in time management, effective communication with clients, and teamwork."
          projectLink="https://github.com/KevalKankrecha-2/YOGINAGARYUVAK-MANDAL"
          deployedProjectLink="#"
          projectImg={require('./Images/Screenshot_2024-08-15-12-31-51-007_cn.wps.xiaomi.abroad.lite.jpg')}
        />
        <ContactFormComponent id="contact"/>
        <FooterComponent />
    </>

  );
}

export default App;
