import React from 'react';
import { ImCalculator } from "react-icons/im";
import { FaFileWord } from "react-icons/fa6";
import { RiFileExcel2Fill } from "react-icons/ri";
import { GiPublicSpeaker } from "react-icons/gi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { GiPlayerTime } from "react-icons/gi";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaFilePowerpoint } from "react-icons/fa";


const SkilComponent = ({id}) => {
    return (
        <div className="skill-container" id={id}>
            <div className="skill-header">My Skills</div>
            <div className="skill-box">
                <h2 style={{ textAlign: 'center' }}>Soft Skills</h2>
                <div className="skillset">
                    <abbr title='Communication'><GiPublicSpeaker className='techLogo' /></abbr>
                    <abbr title='Data Analysis'><TbBrandGoogleAnalytics  className='techLogo' /></abbr>
                    <abbr title='Time Management'><GiPlayerTime className='techLogo' /></abbr>
                    <abbr title='Finance'><AiFillDollarCircle className='techLogo' /></abbr>
                </div>
            </div>
            <div className="skill-box">
                <h2 style={{ textAlign: 'center' }}>Tools</h2>
                <div className="skillset">
                    <abbr title='Excel'><RiFileExcel2Fill className='techLogo' /></abbr>
                    <abbr title='Power Point'><FaFilePowerpoint  className='techLogo' /></abbr>
                    <abbr title='Word'><FaFileWord className='techLogo' /></abbr>
                    <abbr title='Account'><ImCalculator className='techLogo' /></abbr>
                </div>
            </div>
        </div>
    );
}

export default SkilComponent;
