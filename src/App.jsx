import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
// import Header from './components/Header'
// import FeaturedCourses from './components/FeaturedCourses'
// import Categories from './components/Categories';
// import ImageComponents from './components/ImageComponents'
// import Testimonials from './components/Testimonials'
// import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Courses from './components/Courses'
function App() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [login,setLogin] = useState(false);

  return (
    <>
      <div>
        {/* <p className='h1'>App Component</p> */}
        <BrowserRouter>
            <div>
              <Navbar login={login}/>
            </div>
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<Login name={name} email={email} password={password} setLogin={setLogin}/>} />
            <Route path="/register" element={<Register setName={setName} setEmail={setEmail} setPassword={setPassword}/>} />
            <Route path="/about" element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/courses' element={<Courses />} />
            {/* <Route path="/" element={<Header />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/image" element={<ImageComponents />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/footer" element={<Footer />} /> */}
          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
