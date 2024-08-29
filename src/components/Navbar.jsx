import React from 'react';
import logo from '../assets/Askmeidentity 2.png';
import icons from '../assets/Group 1.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = ({ login }) => {
  const navigate = useNavigate();
  
  // Get the user from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  // Handle logout function
  const handleLogout = () => {
    localStorage.removeItem('user'); // Remove user from localStorage
    navigate('/login'); // Redirect to login page
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
                {/* <a className="nav-link" href="#">About</a> */}
                <Link className='nav-link' to='/about'>About</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/courses'>Courses</Link>
                {/* <a className="nav-link" href="#">Courses</a> */}
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/contact'>Contact</Link>
                {/* <a className="nav-link" href="#">Contact</a> */}
              </li>
            </ul>
            <img src={icons} className='iconimg' alt="Icons" />
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
                  <button className="btn mx-2" type="button"><Link to="/register" className='text-decoration-none text-dark'>Sign up</Link></button>
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
