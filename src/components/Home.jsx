import React from 'react';
import Header from './Header';
import Categories from './Categories';
import ImageComponents from './ImageComponents';
import Testimonials from './Testimonials';
import Footer from './Footer';
import FeaturedCourses from './FeaturedCourses';

const Home = () => {
    return (
        <div>
        <Header />
        <FeaturedCourses />
        <Categories />
        <ImageComponents />
        <Testimonials />
        <Footer />
        </div>
    );
};

export default Home;