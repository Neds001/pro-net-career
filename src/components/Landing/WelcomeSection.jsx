import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/Landing/WelcomeSection.css';

function WelcomeSection() {
    return (
        <>
            <section className='welcomeSection'>
                <div className='welcomeContainer'>
                    <h1 className='welcome'>Welcome to Your Professional Network</h1>
                    <p className='connect'>Connect and grow with professionals worldwide</p>
                    <div className='buttons'>
                        <a href="https://www.linkedin.com/help/linkedin/answer/a548441" target="_blank">
                            <button className='learnMore learnBtn'>Learn more</button>
                        </a>
                        <Link to="/signup" className='btn signUp'>Sign Up</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default WelcomeSection;
