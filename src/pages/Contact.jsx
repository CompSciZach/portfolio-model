import React from 'react';
import envelopeIcon from '../assets/envelope.svg';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <div className="contact-methods">
                <div className="contact-box">
                    <img src={envelopeIcon} alt="Gmail Icon" />
                    <a href="mailto:your-email@gmail.com" target="_blank" rel="noopener noreferrer">
                        Gmail
                    </a>
                </div>
                <div className="contact-box">
                    <img src={linkedinIcon} alt="LinkedIn Icon" />
                    <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </div>
                <div className="contact-box">
                    <img src={githubIcon} alt="GitHub Icon" />
                    <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
