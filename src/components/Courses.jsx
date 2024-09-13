import React, { useContext, useEffect, useState } from 'react';
import ITCategories from './ITCategories';
import cartimg from '../assets/cart.png';
import cartFilledImg from '../assets/cart-filled.png';
import { myContext } from '../App';
import { useLocation, useNavigate } from 'react-router-dom';

const Courses = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const {allCourses,toggleCartItem,cart,user } = useContext(myContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        // Extract category from query params
        const params = new URLSearchParams(location.search);
        const category = params.get('category');
        setSelectedCategory(category);
    }, [location.search]);


    const isInCart = (course) => cart.some(cartItem => cartItem.id === course.id);

    const filteredCourses = selectedCategory 
        ? allCourses.filter(course => course.courseName === selectedCategory)
        : allCourses;

    // console.log(filteredCourses);

    const handleAddToCart = (course) => {
        if (user) {
            toggleCartItem(course);
        } else {
            navigate('/login'); // Redirect to login page if not logged in
        }
    };



    return (
        <div>
            <ITCategories />
            <div className="container">
                <div className="row">
                    {filteredCourses.map(course => (
                        <div className="col-sm-12 col-md-6 col-lg-4 mb-3" key={course.id}>
                            <div className="card">
                                <img src={course.img} className="card-img-top" alt={course.title} />
                                <div className="card-body">
                                    <div className="d-flex justify-content-between mb-3" style={{margin:0,color:"#4E596B"}}>
                                        <p className="card-text">{course.views} Students</p>
                                        <p className="card-text">{course.readTime}</p>
                                    </div>
                                    <h5 className="card-title mb-4">
                                        <a href={`/course/${course.id}`} style={{ textDecoration: 'none', color: '#000' }}>
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;
