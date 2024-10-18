import React, { useState } from 'react';
import Header from './Header';
import Categories from './Categories';
import ImageComponents from './ImageComponents';
import Testimonials from './Testimonials';
import Footer from './Footer';
import FeaturedCourses from './FeaturedCourses';
import ITCategories from './ITCategories';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

   

    return (
        <div>
        <Header />
        <FeaturedCourses />
        {/* <Categories /> */}
        <ITCategories onSelectCategory={handleSelectCategory}/>
        {/* <ImageComponents /> */}
        <Testimonials />
        <Footer />
        </div>
    );
};

export default Home;