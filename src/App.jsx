import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Courses from './components/Courses'
import Categories from './components/Categories';
import ImageComponents from './components/ImageComponents'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <div>
        {/* <p className='h1'>App Component</p> */}
        <Navbar />
        <Header />
        <Courses />
        <Categories />
        <ImageComponents />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default App
