import React from 'react';
import cardimg1 from '../assets/div.features-box-image.png';
import cardimg2 from '../assets/div.features-box-image (1).png';
import cardimg3 from '../assets/div.features-box-image (2).png';
import cardimg4 from '../assets/div.features-box-image (3).png';
import cardimg5 from '../assets/div.features-box-image (4).png';
import cardimg6 from '../assets/div.features-box-image (5).png';

const ITCategories = ({ onSelectCategory }) => {
    const categories = [
        { id: 1, img: cardimg1, title: "Full Stack Development", total: 25 },
        { id: 2, img: cardimg2, title: "Data Science", total: 16 },
        { id: 3, img: cardimg5, title: "Cyber Security", total: 76 },
        { id: 4, img: cardimg4, title: "Career", total: 22 },
    ];

    return (
        <div className="category">
            <div className="row">
                <h3>Top <span style={{color:"#0E38CD"}}>Categories</span></h3>
                {categories.map(category => (
                    <div className="col" key={category.id}>
                        <div 
                            className="card text-center" 
                            style={{width:"170px", padding:"1rem", alignItems:"center", gap:"20px", cursor: 'pointer'}}
                            onClick={() => onSelectCategory(category.title)} // Handle click event
                        >
                            <img src={category.img} className='img' style={{width:"50px", height:"50px"}} alt={category.title} />
                            <div className="card-body">
                                <h5 className="card-title" style={{color:"#324361"}}>{category.title}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ITCategories;
