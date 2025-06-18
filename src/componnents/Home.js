import React from 'react';
import './home.css';
const Home=()=>{
    return (
        <section id='home' className='hero-section'>
            <div class='container'>
            
            <h1>Hi,I'm <span>J</span>ihan Vall</h1>
            <span className='role'>
                Software Engineer specialized in Artificial Intelligence.<br></br>
                I build complete, modern, and scalable web applications.
             </span>
            <p className='description'>
                From responsive front-ends to powerful back-ends,<br></br>
                I provide end-to-end solutions tailored to your business needs.<br></br> 
                Your satisfaction is always our top priority.
            </p>
            <div className='buttons'>
                <a href="#contact" className='primary-btn'>Contact Me</a>
                <a href='#cv' className='secondary-btn' download>Download CV</a>
            </div>
            </div>
            </section>
    );
};
export default Home;