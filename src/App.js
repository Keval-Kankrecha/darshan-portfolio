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
          projectTitle="Yogi Nagar Yuvak Madal"
          projectDesc="Through this web application, the admin can efficiently manage participants and various Sabha details, including present participants and activities conducted during the event. Admins have the flexibility to view Sabha details based on their specific requirements."
          projectLink="https://github.com/KevalKankrecha-2/YOGINAGARYUVAK-MANDAL"
          deployedProjectLink="#"
          projectImg={require('./Images/ProjectYoginagarYuvakMandal.png')}
        />
        <ContactFormComponent id="contact"/>
        <FooterComponent />
    </>

  );
}

export default App;
