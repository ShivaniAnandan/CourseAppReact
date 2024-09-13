import { createContext, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Courses from './components/Courses'
import fsd1 from './assets/allcoursesimage/fsd1.jpg';
import fsd3 from  './assets/allcoursesimage/fsd3.png';
import fsd4 from './assets/allcoursesimage/fsd4.jpg';
import fsd5 from './assets/allcoursesimage/fsd5.webp';
import data3 from './assets/allcoursesimage/data3.png';
import data4 from './assets/allcoursesimage/data4.png';
import data5 from './assets/allcoursesimage/data5.jpg';
import cyber1 from './assets/allcoursesimage/cyber1.webp';
import cyber3 from './assets/allcoursesimage/cyber3.gif';
import cyber4 from './assets/allcoursesimage/cyber4.webp';
import cyber5 from './assets/allcoursesimage/cyber5.webp';
import career4 from './assets/allcoursesimage/career4.png';
import career5 from './assets/allcoursesimage/career5.gif';
import Cart from './components/Cart'
import Payment  from './components/Payment';
import SearchResults from './components/SearchResults'
import CourseDetail from './components/CourseDetail'

//Creating a context
export const myContext = createContext('');

function App() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [login,setLogin] = useState(false);
  const [user, setUser] = useState(null); // `user` will be null if not logged in
 
  const allCourses = [
    //FullstackDevelopment Cards
        {
        id:1,
        courseName :"Full Stack Development",
        title:"Best Full-Stack Development Project Ideas in 2024",
        img:fsd1,
        views:115491,
        author:"Isha Sharma.",
        date:"14 Jun, 2024",
        readTime:"4 Min Read"
        },
        {
        id:2,
        courseName :"Full Stack Development",
        title:"How Long Would It Take to Be a Full Stack Developer?",
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp",
        views:14469,
        author:"Meghana D",
        date:"26 Mar, 2024",
        readTime:"3 Min Read"
        },
        {
        id:3,
        courseName :"Full Stack Development",
        title:"Hot Topics That You Need To Know In Full Stack Developer Syllabus",
        img:fsd3,
        views:8788,
        author:"Meghana D",
        date:"26 Mar, 2024",
        readTime:"3 Min Read"
        },
        {
        id:4,
        courseName :"Full Stack Development",
        title:"Top 10 Full-Stack Developer Frameworks in 2024",
        img:fsd4,
        views:8666,
        author:"Isha Sharma",
        date:"16 Apr, 2024",
        readTime:"5 Min Read"
        },
        {
        id:5,
        courseName :"Full Stack Development",
        img:fsd5,
        title:"Full Stack Developer Roadmap: A Complete Guide [2024]",
        views:6681,
        author:"Meghana D",
        date:"19 Mar, 2024",
        readTime:"6 Min Read"
        },
        //Data Science Cards
        {
            id: 6,
            courseName: "Data Science",
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp',
            title: 'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
            author: 'Isha Sharma',
            date: '14 Jun, 2024',
            views: '12857',
            readTime: '6 Min Read'
        },
        {
            id: 7,
            courseName: "Data Science",
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-1536x804.webp',
            title: '12 Real-World Data Science Examples: Power Of Data Science',
            author: 'Lukesh S',
            date: '25 Mar, 2024',
            views: '8595',
            readTime: '7 Min Read'
        },
        {
            id: 8,
            courseName: "Data Science",
            img:data3,
            title: 'Can A Commerce Student Do Data Science?',
            author: 'Saakshi Priyadarshini',
            date: '16 Apr, 2024',
            views: '7544',
            readTime: '3 Min Read'
        },
        {
            id: 9,
            courseName: "Data Science",
            img:data4,
            title: 'Roles and Responsibilities of a Data Scientist',
            author: 'Jaishree Tomar',
            date: '16 Apr, 2024',
            views: '5547',
            readTime: '6 Min Read'
        },
        {
            id: 10,
            courseName: "Data Science",
            img:data5,
            title: 'How to become a Data Scientist after Mechanical Engineering?',
            author: 'Lahari Chandana',
            date: '16 Apr, 2024',
            views: '3008',
            readTime: '3 Min Read'
        },
        //CyberSecurity Cards
        {
            id: 11,
            courseName: "Cyber Security",
            img:cyber1,
            title: '8 Different Types of Cybersecurity and Threats Involved',
            author: 'Tushar Vinocha',
            date: '08 Sep, 2023',
            views: '1894',
            readTime: '4 Min Read'
        },
        {
            id: 12,
            courseName: "Cyber Security",
            img: 'https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp',
            title: 'The Ultimate Cybersecurity Roadmap for Beginners',
            author: 'Srinithi Sankar',
            date: '23 Mar, 2024',
            views: '1443',
            readTime: '3 Min Read'
        },
        {
            id: 13,
            courseName: "Cyber Security",
            img:cyber3,
            title: 'What is Cybersecurity? Importance and its uses & the growing challenge...',
            author: 'Saakshi Priyadarshini',
            date: '04 Oct, 2023',
            views: '1636',
            readTime: '4 Min Read'
        },
        {
            id: 14,
            courseName: "Cyber Security",
            img:cyber4,
            title: 'The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!',
            author: 'Jaishree Tomar',
            date: '25 Mar, 2024',
            views: '1397',
            readTime: '4 Min Read'
        },
        {
            id: 15,
            courseName: "Cyber Security",
            img:cyber5,
            title: 'Is coding required for cybersecurity? If yes, how crucial is coding for cyb...',
            author: 'Tushar Vinocha',
            date: '25 Mar, 2024',
            views: '1541',
            readTime: '4 Min Read'
        },
        //Career Cards
        {
            id: 16,
            courseName: "Career",
            img: 'https://www.guvi.in/blog/wp-content/uploads/2024/05/Feature-Image-Career-in-Animation.webp',
            title: 'Career in Animation: Jobs, Salary, Future Scope in India (2024)',
            author: 'Saanchi Bhardwaj',
            date: '03 May, 2024',
            views: '2276',
            readTime: '4 Min Read'
        },
        {
            id: 17,
            courseName: "Career",
            img: 'https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn.webp',
            title: 'Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career',
            author: 'Saakshi Priyadarshini',
            date: '14 Jun, 2024',
            views: '14885',
            readTime: '7 Min Read'
        },
        {
            id: 18,
            courseName: "Career",
            img: 'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp',
            title: 'Top IT Jobs for Commerce Students: A Lucrative Career Path',
            author: 'Jaishree Tomar',
            date: '14 Jun, 2024',
            views: '12698',
            readTime: '5 Min Read'
        },
        {
            id: 19,
            courseName: "Career",
            img: career4,
            title: 'Is Data Science A Good Career Choice In 2024?',
            author: 'Archana',
            date: '16 Apr, 2024',
            views: '1321',
            readTime: '4 Min Read'
        },
        {
            id: 20,
            courseName: "Career",
            img: career5,
            title: 'What Is a Data Engineer? A Complete Guide to this Data Career',
            author: 'Tushar Vinocha',
            date: '16 Apr, 2024',
            views: '2312',
            readTime: '3 Min Read'
        }
];

const [cart, setCart] = useState([]);

const addToCart = (course) => {
        setCart((prevCart) => [...prevCart, course]);
    };

const removeFromCart = (courseId) => {
        setCart((prevCart) => prevCart.filter(course => course.id !== courseId));
    };

const getCartCount = () => cart.length;    

const toggleCartItem = (course) => {
    setCart((prevCart) => {
        if (prevCart.some(cartItem => cartItem.id === course.id)) {
            // If the course is already in the cart, remove it
            return prevCart.filter(cartItem => cartItem.id !== course.id);
        } else {
            // If the course is not in the cart, add it
            return [...prevCart, course];
        }
    });
};

return (
    <>
      <div>
        {/* <p className='h1'>App Component</p> */}
        <BrowserRouter>
             {/* Providing context */}
             <myContext.Provider value={{user,setUser,cart, addToCart, removeFromCart, allCourses , getCartCount, toggleCartItem}}>
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
            <Route path='/cart' element={<Cart />} />
            <Route path="/payment" element={<Payment />} /> 
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/course/:courseId" element={<CourseDetail />} />
            {/* <Route path="/" element={<Header />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/image" element={<ImageComponents />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/footer" element={<Footer />} /> */}
          </Routes>
          </myContext.Provider>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
