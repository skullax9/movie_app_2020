import React from 'react';
import './About.css';

function About(props) {
    console.log(props);
    return (
    <div className="about-container">
    <span>
        This is my first Clone Coding Project.
        It is useful time to learn about React!
    </span>
    <span>-201740130 이영찬-</span>
    </div>
    );
}

export default About;