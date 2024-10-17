import React, { useContext, useEffect, useState } from 'react';
import ITCategories from './ITCategories';
import cartimg from '../assets/cart.png';
import cartFilledImg from '../assets/cart-filled.png';
import { myContext } from '../App';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import  Filter  from './Filter';
import fallbackImg from '../assets/allcoursesimage/fsd4.jpg';


const Courses = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const { toggleCartItem, cart, user } = useContext(myContext);
    const {allCourses,setAllCourses} = useContext(myContext);
    // const [allCourses, setAllCourses] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    // Fetch courses from backend
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('https://courseappbackend-yydm.onrender.com/api/courses');
                setAllCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

   
    useEffect(() => {
        // Extract category from query params
        const params = new URLSearchParams(location.search);
        const category = params.get('category');
        setSelectedCategory(category);
    }, [location.search]);

    const isInCart = (course) => cart.some(cartItem => cartItem._id === course._id);

    const filteredCourses = selectedCategory 
        ? allCourses.filter(course => course.courseName === selectedCategory)
        : allCourses;

    const handleAddToCart = (course) => {
        if (user) {
            toggleCartItem(course);
        } else {
            navigate('/login'); // Redirect to login page if not logged in
        }
    };

    return (
        <div>
            <Filter onSelectCategory={handleSelectCategory} />
            <div className="container">
                <div className="row">
                    {filteredCourses.map(course => (
                        <div className="col-sm-12 col-md-6 col-lg-4 mb-3" key={course._id}>
                            <div className="card">
                                <img src={course.img} className="card-img-top" alt={course.title}  onError={(e) => { e.target.src = fallbackImg; }} />
                                <div className="card-body mx-2">
                                    <div className="d-flex justify-content-between mb-3" style={{ margin: 0, color: "#4E596B" }}>
                                        <p className="card-text">{course.views} Students</p>
                                        <p className="card-text">{course.readTime}</p>
                                    </div>
                                    <h5 className="card-title mb-4">
                                        <a href={`/course/${course._id}`} style={{ textDecoration: 'none', color: '#000' }}>
                                            {course.title}
                                        </a>
                                    </h5>
                                    <div className="d-flex justify-content-between" style={{ margin: 0, color: "#4E596B", alignItems: "baseline" }}>
                                        <p className="card-text">Rs.499</p>
                                        <img 
                                            src={isInCart(course) ? cartFilledImg : cartimg} 
                                            alt="carticon" 
                                            className='img'
                                            style={{ cursor: 'pointer' }} 
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
