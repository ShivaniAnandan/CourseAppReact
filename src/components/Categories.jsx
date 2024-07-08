import React from 'react';
import cardimg1 from '../assets/div.features-box-image.png';
import cardimg2 from '../assets/div.features-box-image (1).png';
import cardimg3 from '../assets/div.features-box-image (2).png';
import cardimg4 from '../assets/div.features-box-image (3).png';
import cardimg5 from '../assets/div.features-box-image (4).png';
import cardimg6 from '../assets/div.features-box-image (5).png';
const Categories = () => {
    const Categories = [
        {
            id:1,
            img:cardimg1,
            title:"Digtal Marketing",
            total:25
        },
        {
            id:2,
            img:cardimg2,
            title:"Web Development",
            total:16
        },
        {
            id:3,
            img:cardimg3,
            title:"Art & Humanities",
            total:76
        },
        {
            id:4,
            img:cardimg4,
            title:"Personal Development",
            total:22
        },
        {
            id:5,
            img:cardimg5,
            title:"IT and Software",
            total:110
        },
        {
            id:6,
            img:cardimg6,
            title:"Graphic Design",
            total:85
        }
        
    ]
    return (
        <div>
            <div className="category">
                <div className="row">
                    <h3>Top <span style={{color:"#0E38CD"}}>Categories</span></h3>
                    <p style={{color:"#4E596B",fontWeight:"600"}} className='mb-5'>100+ unique online course list designs</p>
                    {Categories.map(category=>{
                        return(
                            <div className="col">
                            <div className="card text-center" style={{width:"170px",padding:"1rem",alignItems:"center",gap:"20px"}}>
                                <img src={category.img} className='img' style={{width:"50px" , height:"50px"}}/>
                                <div className="card-body">
                                    <h5 className="card-title" style={{color:"#324361;"}}>{category.title}</h5>
                                    <p className="card-text"  style={{color:"#4F547B;",fontWeight:"600",marginTop:"20px"}}>{category.total} Courses</p>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                    
            </div>
        </div>
        </div>
    );
};

export default Categories;