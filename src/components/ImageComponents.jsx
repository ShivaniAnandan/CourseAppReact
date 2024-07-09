import React from 'react';
import subscribe from '../assets/Subscribe.png';
import girlimg from '../assets/girl.png';
import videoicon from '../assets/Group 512857.png';
import banner from '../assets/banner_right.png.png';
import icon1 from '../assets/Polygon 7.png';
import icon2 from '../assets/Polygon 8.png';
const ImageComponents = () => {
    return (
        <div className="imageComponents">
        <div className='img-card'>
            <img src={subscribe} alt="subscribe" className="subscribe" />
        </div>
        <img src={icon2} className='icon2' />
        <img src={icon1} className='icon1' />
        <div className='img-card girl'>
            <img src={girlimg} alt="girl" className="girl" />
        </div>
        <img src={videoicon} className='videoIcon' />
        <img src={banner} className='banner' />
        
        </div>
    );
};

export default ImageComponents;