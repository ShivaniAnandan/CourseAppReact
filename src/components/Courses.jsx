import React, { useContext, useState } from 'react';
import ITCategories from './ITCategories';
import cartimg from '../assets/cart.png';
import { myContext } from '../App';

const Courses = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const allCourses = useContext(myContext);

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    const filteredCourses = selectedCategory 
        ? allCourses.filter(course => course.courseName === selectedCategory)
        : allCourses;

    return (
        <div>
            <ITCategories onSelectCategory={handleSelectCategory} />
            <div className="container">
                <div className="row">
                    {filteredCourses.map(course => (
                        <div className="col-4 mb-3" key={course.id}>
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
                                        <img src={cartimg} alt="carticon" className='img'/>
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
