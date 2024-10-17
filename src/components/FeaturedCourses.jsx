import React, { useContext } from 'react';
import circle from '../assets/Ellipse 118.png';
import courseimg1 from '../assets/course1.png';
import courseimg2 from '../assets/course2.png';
import courseimg3 from '../assets/course3.png';
import courseimg4 from '../assets/course4.png';
import courseimg5 from '../assets/course5.png';
import courseimg6 from '../assets/course6.png';
import cartimg from '../assets/cart.png';
import cartFilledImg from '../assets/cart-filled.png';
import icon1 from '../assets/Icon.png';
import icon2 from '../assets/Icon (1).png';
import icon3 from '../assets/Icon (2).png';
import line1 from '../assets/Line 15.png';
import line2 from '../assets/Line 16.png';
import rect1 from '../assets/Rectangle 8680.png';
import rect2 from '../assets/Rectangle 8682.png';
import rect3 from '../assets/Rectangle 8681.png';
import { myContext } from '../App';
import { useNavigate } from 'react-router-dom';

const FeaturedCourses = () => {
    const {allCourses} = useContext(myContext);

    const {toggleCartItem,cart,user } = useContext(myContext);

    const navigate = useNavigate();

   

    const isInCart = (course) => cart.some(cartItem => cartItem._id === course._id);

    const handleAddToCart = (course) => {
        if (user) {
            toggleCartItem(course);
        } else {
            navigate('/login'); // Redirect to login page if not logged in
        }
    };

    // const courses = [
    //     {
    //         id:1,
    //         img:courseimg1,
    //         total:"1,957",
    //         duration:"01h 59m",
    //         title:"Motion Graphics: Create a Nice Typography Animation",
            
    //     },
    //     {
    //         id:2,
    //         img:courseimg2,
    //         total:"9,575",
    //         duration:"01h 59m",
    //         title:"Advance PHP knowledge with JS to make smart web",
            
    //     },
    //     {
    //         id:3,
    //         img:courseimg3,
    //         total:"2957",
    //         duration:"02h 49m",
    //         title:"Education Software and PHP and JS System Script",
            
    //     },
    //     {
    //         id:4,
    //         img:courseimg4,
    //         total:"5,457",
    //         duration:"01h 49m",
    //         title:"The Complete Financial Analyst Training & Investing",
            
    //     },
    //     {
    //         id:5,
    //         img:courseimg5,
    //         total:"595",
    //         duration:"01h 59m",
    //         title:"Marketing 2023: Complete Guide To Instagram Growth",
            
    //     },
    //     {
    //         id:6,
    //         img:courseimg6,
    //         total:"458",
    //         duration:"03h 00m",
    //         title:"Learn 3D Modelling and Design for Beginners",
            
    //     }

    // ]

    const filteredCourses =  allCourses.filter(course => course.courseName === "FeaturedCourse");

    
    return (
        <div>
            <div className="course-card">
            <div className="position-absolute">
            <img src={circle}/>
            </div>
            <h3 style={{fontWeight:"bold"}} className='text-center'>Featured <span style={{color:"blue"}}>Course</span></h3>
            <p style={{fontWeight:"bold"}} className='text-center'>The feature courses are we invented our teaching part</p>
            <div className="courses">
            <div className="container">
            <div className="row">
                {filteredCourses.map(course => {
                   return(
                   <div className="col-4 mb-3" key={course._id}>
                   <div className="card">
                   <img src={course.img} className="card-img-top" alt="..." />
                   <div className="card-body mx-2">
                     <div className="d-flex justify-content-between mb-3" style={{margin:0 ,color:"#4E596B"}}>
                        <p className="card-text">{course.views} Students</p>
                        <p className="card-text">{course.readTime}</p>
                     </div>
                     <h5 className="card-title mb-4">
                                        <a href={`/course/${course._id}`} style={{ textDecoration: 'none', color: '#000' }}>
                                            {course.title}
                                        </a>
                    </h5>
                     <div className="d-flex justify-content-between" style={{margin:0,color:"#4E596B",alignItems:"baseline"}}>
                        <p className="card-text">Rs.499</p>
                        <img 
                        src={isInCart(course) ? cartFilledImg : cartimg} 
                        alt="carticon" 
                        className='img'
                        style={{cursor: 'pointer'}} 
                        onClick={() => handleAddToCart(course)} // Toggle course in cart on click
                        />
                     </div>
                   </div>
                 </div>
                 </div>
                   )
                })}
            </div>
            </div>
            <div className='d-flex justify-content-center btn-flex'>
            <button className='course-btn btn' onClick={() => navigate('/courses')}>Explore courses</button>
            </div>
            <div className="course-content">
                <h3>Why <span style={{color: "#0E38CD"}}>learn</span> with our courses?</h3>
                <p>We are providing the best courses and top classes.And <br></br>extradinery placement training.....</p>
                <div className="content-flex d-flex justify-content-evenly">
                    <div className="details">
                       <img src={icon1} className='img' />
                       <h3>01. Learn</h3>
                       <p>Learn continually. There is always<br></br>
                       “one more thing”to learn.</p>
                    </div>
                    <img src={line1} />
                    <div className="details">
                       <img src={icon2} className='img' />
                       <h3>02. Graduate</h3>
                       <p>Be bold,be courageous,<br></br>
                       be your best.</p>
                    </div>
                    <img src={line2} />
                    <div className="details">
                       <img src={icon3} className='img' />
                       <h3>03. Work</h3>
                       <p>Great companies are built in<br></br>
                        the office,with hard work put<br></br>
                        in by team.</p>
                    </div>
                </div>
                <div className="position-absolute img1">
                    <img src={rect1} className='img'/>
                </div>
                <div className="position-absolute img2">
                    <img src={rect2} className='img'/>
                </div>
                <div className="position-absolute img3">
                    <img src={rect3} className='img'/>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default FeaturedCourses;