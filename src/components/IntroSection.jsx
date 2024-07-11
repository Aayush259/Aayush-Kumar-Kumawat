import React from 'react';
import '../styles/Intro.css';
import { useNavigate } from 'react-router-dom';

export default function IntroSection() {

    const navigate = useNavigate();

    return (
        <section id="intro" className="introSection flex">
            <div className="intro">
                <p className="hi">Hi,</p>
                <p>I am Aayush Kumar Kumawat</p>
                <p
                    className="profession"
                    onClick={() => {navigate('/Aayush-Kumar-Kumawat/about')}}
                >
                    <span>Frontend Developer</span>
                    <span>Tech enthusiast</span>
                    <span>Make cool stuff 🧈</span>
                    <span>Passionate Coder</span>
                    <span>Like lots of sweets 🧁</span>
                </p>
            </div>

            <div className="myImage">
                <img src="https://avatars.githubusercontent.com/u/159794430?v=4" alt="Aayush" />
            </div>
        </section>
    );
};