import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {

    // Location (URL) reference.
    const location = useLocation();

    return (
        <header className="header flex">
            <h1>Aayush</h1>
            <nav className="nav flex">
                <li>
                    <NavLink
                        to={'/Aayush-Kumar-Kumawat'}
                        end
                        className={({ isActive }) => isActive || location.pathname === '/Aayush-Kumar-Kumawat/' ? 'active': 'notActive'}
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/Aayush-Kumar-Kumawat/skills'}
                        className={({isActive}) => isActive ? 'active': 'notActive'}
                    >
                        Skills
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/Aayush-Kumar-Kumawat/projects'}
                        className={({isActive}) => isActive ? 'active': 'notActive'}
                    >
                        Projects
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to={'/Aayush-Kumar-Kumawat/about'}
                        className={({isActive}) => isActive ? 'active': 'notActive'}
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
