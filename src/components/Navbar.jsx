import React from 'react';
import logo from '../assets/Askmeidentity 2.png';
import icons from '../assets/Group 1.png';
const Navbar = () => {
    return (
 <div>
 <nav className="navbar navbar-expand-lg navbar-light border">
  <div className="container-fluid">
    <a className="navbar-brand logo" href="#"><img src={logo} className='logoimg'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  justify-content-around gap-5" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-flex">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <img src={icons} className='iconimg'/>
      <form class="d-flex align-items-baseline gap-3">
        <a href='#' className='login'>Login</a>
        <button class="btn" type="submit">Sign up</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;