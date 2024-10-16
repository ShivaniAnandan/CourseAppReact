import React from 'react';
import { useNavigate } from 'react-router-dom';

const Filter = ({ onSelectCategory }) => {
    const navigate = useNavigate();
    const categories = [
        { id: 1, title: "Full Stack Development" },
        { id: 2, title: "Data Science" },
        { id: 3, title: "Cyber Security" },
        { id: 4, title: "Career" },
    ];

    const handleCategoryClick = (category) => {
        navigate(`/courses?category=${encodeURIComponent(category)}`);
    };

    return (
        <div className="filter-category">
            <div className="row">
                <h3 className='text-center mb-5'>Top <span>Categories</span></h3>
                {categories.map(category => (
                    <div className="col mb-5" key={category.id}>
                        <div 
                            className="filter-category-item" 
                            onClick={() => handleCategoryClick(category.title)} // Handle click event
                        >
                            <h5 className="filter-category-title">{category.title}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Filter;
