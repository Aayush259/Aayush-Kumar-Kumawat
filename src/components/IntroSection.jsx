import React from 'react';
import '../styles/Intro.css';

export default function IntroSection() {

    return (
        <section id="intro" className="introSection flex">
            <div className="intro">
                <p className="hi">Hi,</p>
                <p>I am Aayush Kumar Kumawat</p>
                <p className="profession">Frontend Developer</p>
            </div>

            <div className="myImage">
                <img src="https://avatars.githubusercontent.com/u/159794430?v=4" alt="Aayush" />
            </div>
        </section>
    );
};