import React from 'react';
import cartoon from "../Images/header-image.png";

export default function HomeBanner({id}) {
  return (
   
    <div className="home" id={id}> 
        <div className='content'>
            <div className="wrapper">
              <div className="name">Darshan Tank</div>
              <div className="staticTitle">
                MBA +
              </div>
              <ul className="dynamicTitle">
                <li><span>Market</span></li>
              </ul>-
              <div>
              <a className='btn' href="https://www.linkedin.com/in/darshan-tank-b8a953273/" target="_blank" rel="noopener noreferrer">Hire Me</a>
              </div>
            </div>
        </div>
        <div className="mask">
            <img className='bg' src={cartoon} alt="girl-with-laptop" />
        </div>
    </div>
  )
}
