import React, { useState } from 'react';
import searchicon from '../assets/Vector (1).png';
import women from '../assets/women.png';
import headerimg from '../assets/headerimg.png';
import rect1 from '../assets/Rectangle1.png';
import rect2 from '../assets/Rectangle2.png';
import rect3 from '../assets/Rectangle3.png';
import spotify from '../assets/spotify.png';
import amazon from '../assets/amazon.png';
import cisco from '../assets/cisco.png';
import logitech from '../assets/logitech.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // Navigate to the Search Results page with a query parameter for search term
        navigate(`/search-results?search=${encodeURIComponent(searchTerm)}`);
    };

    return (
        <>
        <div className="content">
            <div className='headers' style={{color:"#FFFFFF"}}>
                <div className="left">
                    <p>Successful coaches are visionaries</p>
                    <h1 className='h1 mb-5'>Good <span style={{color:"#0E38CD"}}>coaching</span> is <br></br>good teaching & <br></br>nothing else.</h1>
                    <div className="inner-flex mb-5">
                        <button className='button' onClick={() => navigate('/courses')}>View Courses</button>
                        <p>Get Free Consultation</p>
                    </div>
                    <div className="form-flex">
                        {/* <p>What do you want to learn today?</p> */}
                        <div className="search" style={{display: 'flex', alignItems: 'center'}}>
                            <input
                                type="text"
                                placeholder="What do you want to learn today?"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    marginRight: '10px',
                                    border: 'none', // Remove border
                                    padding: '10px', // Add padding for better UX
                                    width: '300px' // Increase width to see the placeholder text fully
                                }}
                            />
                            <button className='button-flex' onClick={handleSearch}>
                                <img src={searchicon} alt="search icon"/>Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="top" >
                    <img src={headerimg} alt="..." className='headerimg' />
                    <div className="down">
                        <h3>Shyam</h3>
                        <p style={{fontSize:"small"}}>In a coaching role, you ask the <br></br>questions and rely more on your <br></br>
                        staff, who become the experts, to <br></br>provide the information.</p>
                        <p style={{color:"blue"}}>4.9</p>
                    </div>
                </div>
                <div className="right">
                <img src="https://i.pinimg.com/736x/7b/cc/cc/7bcccc53d869fe0d6ef4002b6eb9e9d1.jpg" alt="women" className='women'/>
                </div>
                <img src={rect1} className='abs-img1' />
                <img src={rect2} className='abs-img2' />
                <img src={rect3} className='abs-img3' />
            </div>
            <div className="bottom">
                <img src={spotify} alt="spotify" />
                <img src={amazon} alt="amazon" />
                <img src={spotify} alt="spotify" />
                <img src={cisco} alt="cisco" />
                <img src={logitech} alt="logitech" />
                <img src={amazon} alt="amazon" />
            </div>
        </div>
        </>
    );
};

export default Header;
