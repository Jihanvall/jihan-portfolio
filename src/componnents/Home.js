import React from 'react';
import './home.css';

const Home = () => {
  return (
    
    <div class='jihan'>
    <section id='home' className='hero-section'>
      <div className='container home-wrapper'>
        <div className="text-content">
          <h1>Hi, I'm <span>J</span>ihan Vall</h1> <h3> Software Engineer specialized<br></br> in AI & Web Development</h3>
          <p className='description'>
           
            I build complete, modern, and scalable web applications.
            From responsive front-ends to powerful back-ends,<br />
            I provide end-to-end solutions tailored to your business needs.<br />
            Your satisfaction is always our top priority.
          </p>
          <div className='buttons'>
            <a href="#contact" className='primary-btn'>Contact Me</a>

          </div>
        </div>
        <img src="/me-removebg-preview.png" className="profile-img" alt="Jihan Vall" />
      </div>
    </section>
    </div>
  );
};

export default Home;
