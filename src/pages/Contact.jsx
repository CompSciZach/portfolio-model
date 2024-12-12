import React from 'react';
import envelopeIcon from '../assets/envelope.svg';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';

function Contact() {
    return (
        <div className="contact-container">
            <h1>Reach Me!</h1>
            <div className="contact-methods">
                <div className="contact-box">
                    <a href="mailto:zachdube31@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src={envelopeIcon} alt="Gmail Icon" />
                    </a>
                </div>
                <div className="contact-box">
                    <a href="https://www.linkedin.com/in/zachary-dube" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn Icon" />
                    </a>
                </div>
                <div className="contact-box">
                    <a href="https://github.com/CompSciZach" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub Icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
