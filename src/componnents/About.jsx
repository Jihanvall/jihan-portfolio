import React, { useState } from "react";
import './About.css';

function About() {
  const [activeTab, setActiveTab] = useState("education");

  const education = (
    <ul className="education">
      <li><strong>5-years BSc in Software Engineering — AI & Data Science</strong></li>
      <li>IBM Certificate: Introduction to AI</li>
      <li>IBM Certificate: Math for Machine Learning</li>
      <li>AWS Certificate: Cloud Computing Basics</li>
      <li>Harvard Certificate: Web Programming with Python and JS</li>
      <li>Harvard Certificate: Introduction to Computer Science</li>
    </ul>
  );

  const experience = (
    <ul className="experience">
      <li><strong>Freelance Full-Stack Developer</strong></li>
      <li>Built web apps using React, Tailwind, Flask, MongoDB</li>
      <li>Created APIs and deployed with Docker & GitHub Actions</li>
      <li>Developed AI models (scikit-learn, CNNs)</li>
      <li>Analyzed data with Pandas, Seaborn, Plotly</li>
      <li>Worked on NLP & dashboard visualization projects</li>
    </ul>
  );

  return (
    <section id="about" className="about-section">
      
        <div className="about-right">
          <h2>About Me</h2>
          <p>
            I’m a Software Engineer.<br />
            Specialized in Data Science & AI.<br />
            Passionate about solving real-world problems.<br />
            I build full-stack web applications.<br />
            I mix logic, creativity, and clean design.<br />
            Always learning, always improving.
          </p>
        </div>
        

      <div className="tabs">
        <span
          className={`tab ${activeTab === "education" ? "active" : ""}`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </span>
        <span
          className={`tab ${activeTab === "experience" ? "active" : ""}`}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </span>
      </div>

      <div className="tab-content">
        <div key={activeTab} className="tab-inner fade-in">
          {activeTab === "education" ? education : experience}
        </div>
      </div>
    </section>
  );
}

export default About;





