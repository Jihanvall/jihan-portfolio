import React,{useState} from "react";
import './contact.css'
export default function Contact(){
    const [form,setForm]=useState({
        name:"",
        email:"",
       message:""
    });
    const [status,setStatus]=useState("");
    const handlechange=(e)=>{
        setForm({...form,[e.target.name]: e.target.value});
    };
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res=await fetch("http://localhost:5000/contact",{
                method: "POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(form)
            });
            const data=await res.json();
            if(data.success){
                setStatus("Message sent successfully!");
                setForm({name:"",email:"",message:""});
            }else{
                setStatus("Failed to send message.");
            }

        } catch (error){
            setStatus("An error occured .retry later.");
        }
    };

   return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">Let's get in touch</h2>
                <p className="contact-description">
                    Have a question or project in mind? Let's talk!
                </p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Your Name"  name="name" value={form.name} onChange={handlechange} required />
                    <input name="email" type="email" value={form.email} onChange={handlechange} placeholder="Your Email" required />
                    <textarea name="message"  placeholder="Your Message" rows="5" value={form.message} onChange={handlechange} required></textarea>
                    <button type="submit">Send Message</button>
                </form>
                {status && <p style={{marginTop: "10px"}}>{status}</p>}
            </div>
        </section>
    );
}
