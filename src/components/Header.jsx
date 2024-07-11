import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {

    useEffect(() => {
        // Getting hamburger button and nav elements.
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('nav');

        // When hamburger is clicked, display or hide navlinks by toggling a class.
        const toggleNav = (e) => {
            e.stopPropagation();

            // Updating classes of nav and hamburger.
            hamburger.classList.toggle('activeHam');
            nav.classList.toggle('activeNav');
        };

        // This function deactivates hamburger.
        const deActivateHamBurger = () => {
            if (hamburger.classList.contains('activeHam')) {
                hamburger.classList.remove('activeHam');
                nav.classList.remove('activeNav');
            };
        }

        // Activate hamburger when it is clicked & Deactivate hamburger when clicked or scrolled in document.
        document.addEventListener('click', deActivateHamBurger);
        document.addEventListener('scroll', deActivateHamBurger);
        hamburger.addEventListener('click', toggleNav);

        return () => {
            document.removeEventListener('click', deActivateHamBurger);
            document.removeEventListener('scroll', deActivateHamBurger);
            hamburger.removeEventListener('click', toggleNav);
        }
    }, []);

    return (
        <header className="header flex">
            <h1>Aayush</h1>
            <nav className="nav flex">
                <li>
                    <NavLink
                        to={'/Aayush-Kumar-Kumawat/'}
                        end
                        className={({ isActive }) => isActive ? 'active' : 'notActive'}
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/Aayush-Kumar-Kumawat/skills'}
                        className={({ isActive }) => isActive ? 'active' : 'notActive'}
                    >
                        Skills
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/Aayush-Kumar-Kumawat/projects'}
                        className={({ isActive }) => isActive ? 'active' : 'notActive'}
                    >
                        Projects
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to={'/Aayush-Kumar-Kumawat/about'}
                        className={({ isActive }) => isActive ? 'active' : 'notActive'}
                    >
                        About
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to={'/Aayush-Kumar-Kumawat/contact'}
                    >
                        Contact
                    </NavLink>
                </li>
            </nav>
            <button className="hamburger flex" aria-label="Menu">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </button>
        </header>
    );
};
