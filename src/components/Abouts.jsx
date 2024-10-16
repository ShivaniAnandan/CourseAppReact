import React from 'react';
import '../Styles/About.css';

const Abouts = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>About AskmeIdentity</h1>
          <p>Your learning journey starts here! Explore thousands of courses and improve your skills.</p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>At AskmeIdentity, we are dedicated to providing high-quality education to learners worldwide. Our platform offers a vast range of courses in technology, business, and creative fields, taught by industry-leading experts.</p>
      </section>

      {/* Our Values Section */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Accessibility</h3>
            <p>We believe that education should be accessible to everyone, everywhere.</p>
          </div>
          <div className="value-item">
            <h3>Quality</h3>
            <p>Our courses are developed and taught by industry experts to ensure top-quality learning experiences.</p>
          </div>
          <div className="value-item">
            <h3>Innovation</h3>
            <p>We continually evolve and update our courses to reflect the latest trends and technologies.</p>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="instructors-section">
        <h2>Meet Our Instructors</h2>
        <div className="instructor-profile">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7DxIlXR-i7svPJpo4UrgAW-vEsyzDTaa0OMpSu2cQ-wXCEuSj-YDSJog49vQZ3elIKIo&usqp=CAU" alt="Instructor" />
          <div className="instructor-details">
            <h3>John Doe</h3>
            <p>Full Stack Developer with over 10 years of experience in building scalable web applications.</p>
          </div>
        </div>
        {/* You can add more instructors here */}
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Students Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-item">
            <p>"AskmeIdentity helped me land my dream job as a software engineer. The courses were clear, engaging, and hands-on!"</p>
            <h4>- Sarah, AskmeIdentity Graduate</h4>
          </div>
          <div className="testimonial-item">
            <p>"I loved the flexibilitity AskmeIdenty offered. I could learn at my own pace while balancing a full-time job."</p>
            <h4>- Mike, AskmeIdentity Student</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Abouts;
