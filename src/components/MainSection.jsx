import React from 'react';
import '../styles/Main.css';
import IntroSection from './IntroSection.jsx';
import SkillSection from './SkillSection.jsx';
import ProjectSection from './ProjectSection.jsx';
import AboutSection from './AboutSection.jsx';
import ContactSection from './ContactSection.jsx';
import { Outlet } from 'react-router-dom';

export default function MainSection() {

    return (
        <main className='main'>
            <Outlet />
        </main>
    );
};