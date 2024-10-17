import React, { useContext } from 'react';
import logo from '../assets/Askmeidentity 2.png';
// import icons from '../assets/Group 1.png';
import iconcart from  '../assets/cartimg.png';
import { useNavigate, Link } from 'react-router-dom';
import { myContext } from '../App';

const Navbar = ({ login }) => {
  const { getCartCount, setUser } = useContext(myContext);

  const navigate = useNavigate();
  
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light border">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#"><img src={logo} className='logoimg' alt="Logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-around gap-5" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-flex">
              <li className="nav-item">
                <Link className='nav-link' to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/about'>About</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/courses'>Courses</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/contact'>Contact</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/mycourses'>My Courses</Link>
              </li>
            </ul>
            <div className="cart-icon">
            <img 
                src={iconcart} 
                className='iconimg' 
                alt="Icons" 
                style={{cursor: 'pointer'}} 
                onClick={() => navigate('/cart')} // Navigate to cart page on click
            />
            <span className="cart-count">{getCartCount()}</span>
            </div>
            <div className="d-flex gap-3 ms-2">
              {login && user ? (
                <div className="dropdown">
                  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    <img 
                      src={user.profileImage} 
                      alt="Profile" 
                      className="rounded-circle" 
                      style={{ width: '40px', height: '40px' }}
                    />
                    <p className="mb-0">{user.name}</p>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                    <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                  </ul>
                </div>
              ) : (
                <>
                  <Link to='/login' className='login text-decoration-none'>Login</Link>
                  <button className="btn mx-2" type="button"><Link to="/signup" className='text-decoration-none text-dark'>Sign up</Link></button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
