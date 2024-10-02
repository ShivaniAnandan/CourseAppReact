// CourseDetail.js
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { myContext } from '../App';
import cartimg from '../assets/cart.png';
import cartFilledImg from '../assets/cart-filled.png';
import CoursePreviewVideo from '../assets/CoursePreviewVideo.mp4';
const CourseDetail = () => {
    const { courseId } = useParams();
    const { allCourses, toggleCartItem, cart, user } = useContext(myContext);
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const course = allCourses.find(course => course.id === parseInt(courseId));
        setCourse(course);
    }, [courseId, allCourses]);

    if (!course) return <p>Loading...</p>;

    const isInCart = cart.some(cartItem => cartItem.id === course.id);

    const handleAddToCart = () => {
        if (user) {
            toggleCartItem(course);
        } else {
            // Handle redirect to login if not logged in
            navigate('/login');
        }
    };

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-8">
                    
                    <h1>{course.title}</h1>
                    <p>{course.description}</p>
                    <div className="d-flex justify-content-between my-4">
                        <p><strong>Author:</strong> {course.author}</p>
                        <p><strong>Rating:</strong> {course.rating} / 5</p>
                        <p><strong>Duration:</strong> {course.duration}</p>
                    </div>
                    <p><strong>Price:</strong> Rs.{course.price}</p>
                    <h5 className="card-title">Add to Cart</h5>
                            <img 
                                src={isInCart ? cartFilledImg : cartimg} 
                                alt="carticon" 
                                className='img'
                                style={{ cursor: 'pointer', width: '30px' }} 
                                onClick={handleAddToCart}
                            />
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                        <div className="video-container mb-4">
                        <iframe 
                            src={CoursePreviewVideo} 
                            title={course.title}
                            frameBorder="0" 
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                    <h1>Hello world</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
