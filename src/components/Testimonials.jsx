import React from 'react';
import circle from '../assets/Ellipse 1217.png';
import user from '../assets/user.png';
import stars from '../assets/stars.png';
import leftarrow from '../assets/left.png';
import rightarrow from '../assets/right.png';
const Testimonials = () => {
    return (
        <div>
            <div className="test">
                <h3>Testimonials</h3>
                <p>What our student say about us</p>
                <img src={circle} className='circle' />
                <div className="d-flex justify-content-between flex">
                    <div className="cardFlex">
                        <img src={user} className='user' />
                        <p>Such an amazing traniner and easily understand the entire<br></br> 
                        syllabus, and the guidence will be super and good to the way<br></br> of explaning.</p>
                        <img src={stars} className='stars' />
                    </div>
                    <div className="cardFlex abs">
                        <img src={user} className='user' />
                        <p>Such an amazing traniner and easily understand the entire<br></br> 
                        syllabus, and the guidence will be super and good to the way<br></br> of explaning.</p>
                        <img src={stars} className='stars' />
                    </div>
                    <div className="cardFlex">
                        <img src={user} className='user' />
                        <p>Such an amazing traniner and easily understand the entire<br></br> 
                        syllabus, and the guidence will be super and good to the way<br></br> of explaning.</p>
                        <img src={stars} className='stars' />
                    </div>
                </div>
                <div className="arrows d-flex justify-content-end">
                   <img src={leftarrow} className='leftarrow' />
                   <img src={rightarrow} className='rightarrow' />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;