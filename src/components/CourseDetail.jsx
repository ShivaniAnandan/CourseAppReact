import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { myContext } from '../App';
import axios from 'axios'; // Import axios for API requests
import cartimg from '../assets/cart.png';
import cartFilledImg from '../assets/cart-filled.png';
import CoursePreviewVideo from '../assets/CoursePreviewVideo.mp4';

const CourseDetail = () => {
    const { courseId } = useParams(); // Get courseId from the URL
    const { toggleCartItem, cart, user } = useContext(myContext); // Context values
    const [course, setCourse] = useState(null); // State for the course
    const navigate = useNavigate();
    const location = useLocation(); // Use to access passed state
    const fromMyCourses = location.state?.fromMyCourses; // Check if navigation came from MyCourses page

    // Fetch the course from the backend using courseId
    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await axios.get(`https://courseappbackend-yydm.onrender.com/api/courses/${courseId}`);
                setCourse(response.data); // Set the course data
            } catch (error) {
                console.error("Error fetching course details:", error);
            }
        };

        fetchCourse();
    }, [courseId]); // Runs whenever courseId changes

    if (!course) return <p>Loading...</p>;

    const isInCart = cart.some(cartItem => cartItem._id === course._id);

    const handleAddToCart = () => {
        if (user) {
            toggleCartItem(course);
        } else {
            navigate('/login'); // Redirect to login if not logged in
        }
    };

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-8">
                    <h1>{course.title}</h1>
                    <p>{course.description}</p>

                    {!fromMyCourses && ( // Conditionally render author, rating, and price only if not from MyCourses
                        <>
                            <div className="d-flex justify-content-between my-4">
                                <p><strong>Author:</strong> {course.author}</p>
                                <p><strong>Rating:</strong> 4.5 / 5</p>
                                <p><strong>Duration:</strong> {course.readTime}</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p><strong>Price:</strong> Rs.499</p>
                                <img 
                                    src={isInCart ? cartFilledImg : cartimg} 
                                    alt="carticon" 
                                    className='img'
                                    style={{ cursor: 'pointer', width: '30px' }} 
                                    onClick={handleAddToCart}
                                />
                            </div>
                        </>
                    )}
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="video-container">
                                <iframe 
                                    src={CoursePreviewVideo} 
                                    title={course.title}
                                    frameBorder="0" 
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
