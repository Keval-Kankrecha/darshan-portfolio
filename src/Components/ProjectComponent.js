import React from 'react';
import Tilt from 'react-parallax-tilt';
import pdffile from '../Images/23041801054.pdf'

export default function ProjectComponent(props) {

  const handleDownload = () => {
    window.open(pdffile, '_blank');
  };

  return (
    <div className='project-window' id = {props.id}>
      <div className={`project-wrapper ${props.className}`}>
        <div className="about-project">
          <div className="project-title">{props.projectTitle}</div>
          <div className="desc" style={{ textAlign: 'justify' }}>{props.projectDesc}</div>
          <button className='btn' onClick={handleDownload}><span>View Project</span></button>
        </div>

        <div>
    </div>
        <Tilt className="project-img" gyroscope= {true} >
            <a href={props.deployedProjectLink} target= "_blank" rel="noopener noreferrer"><img src={props.projectImg} alt="Displaying Project" /></a>
        </Tilt>
      </div>
    </div>
  )
}