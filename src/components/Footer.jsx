import React from 'react';
import logo from '../assets/footerlogo.png';
import instagram from '../assets/Instagram.png';
import whatsapp from '../assets/WhatsApp.png';
import Twitter from '../assets/Twitter (1).png';
import LinkedIn from '../assets/LinkedIn.png';
import Youtube from '../assets/YouTube.png';
const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer-top">
                   <div className="top-left">
                    <h4 style={{color:"#0A033C", marginLeft:"3rem" , marginBottom:"1.5rem",fontWeight:"bold"}}>Connect</h4>
                    <img src={logo} className='logo' style={{marginLeft:"1rem", marginBottom:"1rem"}}/>
                    <p style={{color:"#000000" , fontWeight:"600"}}>Sri Jagannath Nivas,8-1-164/345/A/1,<br></br>
                    Pragati Colony, Mailardevpally, Nawab<br></br>
                    Saheb Kunta, Hyd, 500005</p>
                   </div>
                   <div className="top-right d-flex gap-5">
                    <div className="d-flex flex-column gap-3">
                        <h4 style={{color:"#0A033C",fontWeight:"bold"}}>Classes</h4>
                        <a href='#' className='list'>Classroom courses</a>
                        <a href='#' className='list'>Virtual classroom courses</a>
                        <a href='#' className='list'>E-learning courses</a>
                        <a href='#' className='list'>Video Courses</a>
                        <a href='#' className='list'>Offline Courses</a>
                    </div>
                    <div className="d-flex flex-column gap-3">
                        <h4 style={{color:"#0A033C",fontWeight:"bold"}}>Community</h4>
                        <a href='#' className='list'>Learners</a>
                        <a href='#' className='list'>Parteners</a>
                        <a href='#' className='list'>Developers</a>
                        <a href='#' className='list'>Transactions</a>
                        <a href='#' className='list'>Blog</a>
                    </div>
                    <div className="d-flex flex-column gap-3">
                        <h4 style={{color:"#0A033C",fontWeight:"bold"}}>Quick links</h4>
                        <a href='#' className='list'>Home</a>
                        <a href='#' className='list'>Professional Education</a>
                        <a href='#' className='list'>Courses</a>
                        <a href='#' className='list'>Admissions</a>
                        <a href='#' className='list'>Testimonial</a>
                        <a href='#' className='list'>Programs</a>
                    </div>
                    <div className="d-flex flex-column gap-3">
                        <h4 style={{color:"#0A033C",fontWeight:"bold"}}>More</h4>
                        <a href='#' className='more-list'>Press</a>
                        <a href='#' className='more-list'>Investors</a>
                        <a href='#' className='more-list'>Terms</a>
                        <a href='#' className='more-list'>Privacy</a>
                        <a href='#' className='more-list'>Help</a>
                        <a href='#' className='more-list'>Contact</a>
                    </div>
                   </div>
                </div>
                <div className="footer-bottom">
                    <div className="bottom-left d-flex justify-content-center">
                        <div className="icon-circle">
                            <img src={instagram} className='icon' />
                        </div>
                        <div className="icon-circle">
                            <img src={whatsapp} className='icon' />
                        </div>
                        <div className="icon-circle">
                            <img src={Twitter} className='icon' />
                        </div>
                        <div className="icon-circle">
                            <img src={LinkedIn} className='icon' />
                        </div>
                        <div className="icon-circle">
                            <img src={Youtube} className='icon' />
                        </div>
                    </div>
                    <div className="bottom-right">
                        <p style={{color:"#FFFFFF"}}>Copyright @ 2023 askmeidentity. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;