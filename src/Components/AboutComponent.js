import React from "react";
import myProfile from "../Images/1723702429199.jpg";

export default function AboutComponent({ id }) {
  return (
    <div className="about-container" id={id}>
      <div className="aboutMe-text"  style={{ textAlign: 'justify' }}>
        <h3>Hey there, 👋</h3>
        I am <span>Darshan Tank</span> from Gondal, currently pursuing an <span>MBA in Finance</span> at Darshan University. My keen interest in the <span>stock market and finance</span> is complemented by strong leadership abilities, exceptional time management, and data analysis skills. My recent summer internship provided practical insights and <span>hands-on experience</span>, significantly enriching my understanding of <span>financial principles</span> and career development. <br /> <br />
        I am actively seeking opportunities that will allow me to grow <span>professionally</span>, contribute to organizational success, and achieve financial and personal growth. Additionally, I have a deep commitment to <span>Sanatan Dharma</span> and have been a dedicated volunteer with <span>BAPS</span> for several years, reflecting my dedication to community service and spiritual values.
           </div>
      <div className="profile-photo">
        <img className="img" src={myProfile} alt="Profile" style={{borderRadius: "25px"}}></img>
      </div>
    </div>
  );
}
