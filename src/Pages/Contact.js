import React from 'react';
import emailImg from "../assets/email.png";
import locationImg from "../assets/location.png";
import phoneImg from "../assets/phone.png";
import linkedinImg from "../assets/linkedin.jpg";
import githubImg from "../assets/github.jpg";

import instagramImg from '../assets/instagram.jpg';
import "../PageStyles/Contact.css";

const Contact = () => {
    return (
        <div className="contact-container" id='contact'>
            <h2 className="contact-title">CONTACT</h2>
            <div className="contact-info">
                <div className="contact-item">
                    <img src={locationImg} alt="Location Icon" className="contact-icon"/>
                    <div className="contact-details">
                        <h3>Location:</h3>
                        <p>Morbi, Gujarat</p>
                    </div>
                </div>
                <div className="contact-item">
                    <img src={emailImg} alt="Email Icon" className="contact-icon"/>
                    <div className="contact-details">
                        <h3>Email:</h3>
                        <p>rsuvariya1510@gmail.com</p>
                    </div>
                </div>
                <div className="contact-item">
                    <img src={phoneImg} alt="Phone Icon" className="contact-icon"/>
                    <div className="contact-details">
                        <h3>Call:</h3>
                        <p>+91 84014 28373</p>
                    </div>
                </div>
            </div>
            <div className="contact-footer">
                <h2>Riddhi Suvariya</h2>
                <p>I always love to help people so do contact from any of the following for any kind of query, help & suggestion.</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/myname"><img src={linkedinImg} alt="LinkedIn"/></a>
                    
                    <a href="https://www.github.com/RiddhiSuvariya"><img src={githubImg} alt="Github"/></a>
                    
                    <a href="https://www.instagram.com/r_suvariya"><img src={instagramImg} alt="Instagram"/></a>
                </div>
                <p>&copy; Copyright <strong>Riddhi B. Suvariya</strong>. All Rights Reserved</p>
            </div>
        </div>
    );
};

export { Contact };
