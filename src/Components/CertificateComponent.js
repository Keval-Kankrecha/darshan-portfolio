import React from 'react';
import cer1 from '../Images/Cer-1.jpeg'
import cer2 from '../Images/Cer-2.jpeg'
import cer3 from '../Images/Cer-3.jpeg'
import cer4 from '../Images/Cer-4.jpeg'

const SkilComponent = ({id}) => {
    return (
        <div className="skill-container" id={id}>
            <style>
                {`
                    .caption {
                        text-align: center;
                        font-size: 14px;
                        margin-top: 8px;
                        color: #555;
                        width: 100%;
                        color: white
                    }
                `}
            </style>
            <div className="skill-header">Certificates</div>
            <div className="skill-box">
                <div className="skillset">
                    <figure>
                        <img src={cer1} className="img" style={{ width: '300px', height: '220px' }} />
                        <figcaption className="caption">TellyEssential Level 1</figcaption>
                    </figure>
                    <figure>
                        <img src={cer2} className="img" style={{ width: '300px', height: 'auto' }} />
                        <figcaption className="caption">SEBI Investor Certification</figcaption>
                    </figure>
                </div>
            </div>
            <div className="skill-box">
                <div className="skillset">
                    <figure>
                        <img src={cer3} className="img" style={{ width: '300px', height: 'auto' }} />
                        <figcaption className="caption">Floric-2024</figcaption>
                    </figure>
                    <figure>
                        <img src={cer4} className="img" style={{ width: '300px', height: 'auto' }} />
                        <figcaption className="caption">World Investor Week</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default SkilComponent;
