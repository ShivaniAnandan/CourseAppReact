import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { myContext } from '../App';
import cartimg from '../assets/cart.png';
import cartFilledImg from '../assets/cart-filled.png';

const SearchResults = () => {
    const { allCourses, toggleCartItem, cart, user } = useContext(myContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const search = queryParams.get('search') || '';
        setSearchTerm(search);
    }, [location.search]);

    const isInCart = (course) => cart.some(cartItem => cartItem._id === course._id);

    const filteredCourses = allCourses.filter(course =>
        course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddToCart = (course) => {
        if (user) {
            toggleCartItem(course);
        } else {
            navigate('/login'); // Redirect to login page if not logged in
        }
    };

    return (
        <div className="container">
            <h2>Search Results for "{searchTerm}"</h2>
            <div className="row">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map(course => (
                        <div className="col-sm-12 col-md-6 col-lg-4 mb-3" key={course._id}>
                            <div className="card">
                                <img src={course.img} className="card-img-top" alt={course.title} />
                                <div className="card-body">
                                    <div className="d-flex justify-content-between mb-3" style={{margin:0,color:"#4E596B"}}>
                                        <p className="card-text">{course.views} Students</p>
                                        <p className="card-text">{course.readTime}</p>
                                    </div>
                                    <h5 className="card-title mb-4">{course.title}</h5>
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
                    ))
                ) : (
                    <p>No courses found for "{searchTerm}".</p>
                )}
            </div>
        </div>
    );
};

export default SearchResults;
