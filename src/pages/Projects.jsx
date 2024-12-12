import React from 'react';

function Projects() {
    return (
        <div className='projects'>
            <h1 className='projectsHeader'>Projects</h1>
            <div className='project-row-top'>
                <div className="project-top-left">
                    <a href="https://github.com/CompSciZach/ConUHacksVIII" target="_blank" rel="noopener noreferrer">
                        <div className="card-inner">
                            <div className="card-front">
                                <p>ConUHacks VIII - Financial Management Tool <br /> Javascript, HTML</p>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="project-top-right">
                    <a href="https://github.com/CompSciZach/GenPass-PasswordGenerator" target="_blank" rel="noopener noreferrer">
                        <div className="card-inner">
                            <div className="card-front">
                                <p>Bell Hackathon - Password Generator <br /> C#</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className='project-row-bottom'>
                <div className="project-bottom-left">
                    <a href="https://github.com/CompSciZach/ECommerce" target="_blank" rel="noopener noreferrer">
                        <div className="card-inner">
                            <div className="card-front">
                                <p>ASP.NET Microservices</p>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="project-bottom-right">
                    <a href="https://github.com/CompSciZach/Keylogger-Security" target="_blank" rel="noopener noreferrer">
                        <div className="card-inner">
                            <div className="card-front">
                                <p>Security Keylogger with Python & Flask</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Projects;
