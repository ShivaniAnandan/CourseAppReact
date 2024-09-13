import React, { useState } from 'react';
import searchicon from '../assets/Vector (1).png';
import women from '../assets/women.png';
import headerimg from '../assets/headerimg.png';
import rect1 from '../assets/Rectangle1.png';
import rect2 from '../assets/Rectangle2.png';
import rect3 from '../assets/Rectangle3.png';
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
            <div className='header' style={{color:"#FFFFFF"}}>
                <div className="left">
                    <p>Successful coaches are visionaries</p>
                    <h1 className='h1 mb-5'>Good <span style={{color:"#0E38CD"}}>coaching</span> is <br></br>good teaching & <br></br>nothing else.</h1>
                    <div className="inner-flex mb-5">
                        <button className='button' onClick={() => navigate('/courses')}>View Courses</button>
                        <p>Get Free Consultation</p>
                    </div>
                    <div className="form-flex">
                        {/* <p>What do you want to learn today?</p> */}
                        <div style={{display: 'flex', alignItems: 'center'}}>
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
                <img src="https://s3-alpha-sig.figma.com/img/c1b1/f640/726c33f04f0c41d04f53e5f28fa5f84a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mOeImjcnL~uTGLH~4K-IOU0mJFxiuSLRMDQHeVOfr4tifXuMFfmEzd6ypIzi02pVPM4TjaqidgyNUev1U1iid0CUgxA121HnZYimRAv62cX1n1fK6-A7TNNObZNsQXaCUmv83EGS7gniMelt0BsXZyXMh2ejp1Y9VsJu5nR-Maq3zg7E~FXTxmEDDOboN9Ikwb8wof~HBdSA5Ua1ecbHb37Wf50R-nqNV5Bg-GNLCOh2~CGF6X-9~GLc1pXroM2R9gDod9Z0J5JAi9es5ggFVSBfZ9-TPL1kGYSgMzuu1iiQKDrIHB5zDJOaC12X4D0u7is5bQrX~NldUS1cVj-Y1w__" />
                <img src="https://s3-alpha-sig.figma.com/img/a0f8/fa97/6c4d4447bb64f8aa75c0e5c4b008f483?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=funb~pJeupI~V6JzIGDTaEKe5a0qdeoFa0R~H519OMwsoTmj3MkyrWyFgA9mhL3IGArqtL90xj1YM6ITJKHXLuClVuKGQaxwQwyRKe8WlLFH5X1QTC9PpYaSXqRusJLZkgmp0Ekpfh2p6iI7-bNb7poVWosPpdZHBMM1JCKGTaXYAKFOWh1cKxmV3lS38rRK7Liu7FvdGpvfl47CsikpDogTc0Zr3HIJdyCtRDAdNLPw8XcC1VXogEPWB7btXUsH8QsMbczAS72ipRfBFczrVpWe-Pmva0Rl~U7ZT6hRp5t0JKphOzQcVyzbci7V4bGYyuoxXLnQTAuIOtN6-vuHUw__" />
                <img src="https://s3-alpha-sig.figma.com/img/c1b1/f640/726c33f04f0c41d04f53e5f28fa5f84a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mOeImjcnL~uTGLH~4K-IOU0mJFxiuSLRMDQHeVOfr4tifXuMFfmEzd6ypIzi02pVPM4TjaqidgyNUev1U1iid0CUgxA121HnZYimRAv62cX1n1fK6-A7TNNObZNsQXaCUmv83EGS7gniMelt0BsXZyXMh2ejp1Y9VsJu5nR-Maq3zg7E~FXTxmEDDOboN9Ikwb8wof~HBdSA5Ua1ecbHb37Wf50R-nqNV5Bg-GNLCOh2~CGF6X-9~GLc1pXroM2R9gDod9Z0J5JAi9es5ggFVSBfZ9-TPL1kGYSgMzuu1iiQKDrIHB5zDJOaC12X4D0u7is5bQrX~NldUS1cVj-Y1w__" />
                <img src="https://s3-alpha-sig.figma.com/img/66ec/ac31/a0ef94e6cbae2c33b454d7f01ce20ed5?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bP4Ntf-HshgdpyrbzsM56LkTM9rcT1uSoxkxIho~WHiOQFrmg~NOYysM9KHVaO1M2JM1O3Sel5LADltoInyRz5AfbDtDoUuECVW3kf-UZkcecLMnDLMa0w5y~4v6Lm9FpN1EqkwiCXT8lvZB6EExHRWmCGxBYNWZr5DXdm-RcJfU39EKT20Lo6cmh3X9wWonjvUpL0SHzQoQ337WOUei4bFYyAEatknN8Vb1YqeIZuFzrQ3i5wzMycy1qXMvXIJF6vfTFF1t3cINGqa6Ad~-SmTxxufSnkGcuNBcT0Mk~HyDfjO6-OABXgRdo9rSrnLvryHZQ-Z1mm~tvRYzjc3z3A__" />
                <img src="https://s3-alpha-sig.figma.com/img/bf0a/35bf/72add22ebde85287de9e3973df8e3bd5?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RE5yVRUUkEQYew0Da31vdTvwehmrHRak5W-1jWVQIB8VuD5ICoNVdyMDkMNw4zpZXOfV3y7hmqFVnWaAjvib72~DIVEpKyuH05D6dsiZ3IHG8OvdwXN6YHdkGbbf5r0Z6FPR7DbVbOmYuEWdATGr5D5SVvX7PR7xWUfAmkCOvaoN0snuh1fiRHbg0bayYu0jWXVkxQH2RxmfJ45VG9-2GjZSMSi1NsbRwg2wRGLQYxU0XaP0l8MM26eHik3~GomQ5djIdWzay7PwsmGOpf3ESVtTjybwi6gfmKEhj6siJJCrFa9Q-5Wzbo6j-5Jw1IqlOR6p1HqT0KIV92UGmxcBTA__" />
                <img src="https://s3-alpha-sig.figma.com/img/a0f8/fa97/6c4d4447bb64f8aa75c0e5c4b008f483?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=funb~pJeupI~V6JzIGDTaEKe5a0qdeoFa0R~H519OMwsoTmj3MkyrWyFgA9mhL3IGArqtL90xj1YM6ITJKHXLuClVuKGQaxwQwyRKe8WlLFH5X1QTC9PpYaSXqRusJLZkgmp0Ekpfh2p6iI7-bNb7poVWosPpdZHBMM1JCKGTaXYAKFOWh1cKxmV3lS38rRK7Liu7FvdGpvfl47CsikpDogTc0Zr3HIJdyCtRDAdNLPw8XcC1VXogEPWB7btXUsH8QsMbczAS72ipRfBFczrVpWe-Pmva0Rl~U7ZT6hRp5t0JKphOzQcVyzbci7V4bGYyuoxXLnQTAuIOtN6-vuHUw__" />
            </div>
        </div>
        </>
    );
};

export default Header;
