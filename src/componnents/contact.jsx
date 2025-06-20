import React, { useState } from "react";
import './contact.css';
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const res = await fetch("https://flask-backend-u8c0.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (data.success) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });

        // بعد 2 ثانية، نبدأ التلاشي
        setTimeout(() => setFadeOut(true), 2000);
        // بعد 2.5 ثانية، نخفيها تمامًا
        setTimeout(() => {
          setStatus("");
          setFadeOut(false);
        }, 2500);
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
    setIsSending(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Let's get in touch</h2>
        <p className="contact-description">Have a question or project in mind? Let's talk!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" rows="5" value={form.message} onChange={handleChange} required></textarea>
          <button type="submit" disabled={isSending}>{isSending ? "Sending..." : "Send Message"}</button>
        </form>
        {status && (
          <p className={`status-message ${fadeOut ? "fade-out" : ""} ${status.includes("successfully")? "success": "error"}`}>
            {status}
          </p>
        )}
      
      </div>
         <div className="contact-footer">
        <p className="right">© {new Date().getFullYear()} Jihan Vall. All rights reserved.</p>
        <p>
          <a href="mailto:hello@jihanvall.com" className="email-link">
            <HiOutlineMail style={{marginRight:"5px"}} />
            hello@jihanvall.com</a>{" "} |{" "}
          <a href="https://github.com/jihanvall" target="_blank" rel="noopener noreferrer">
          <FaGithub style={{marginRight:"5px"}}/>
          GitHub</a>{" "}
           |{" "}
          <a href="https://www.linkedin.com/in/jihanvall" target="_blank" rel="noopener noreferrer">
           <FaLinkedin style={{ marginRight:"5px"}}/>
          LinkedIn</a>
        </p>
      </div>
    </section>
  );
}
