import React from 'react';
import dictionaryProjectImage from '../images/project-dictionary.png';
import whereInTheWorldProjectImage from '../images/project-where-in-the-world.png';
import ipAddressTrackerProjectImage from '../images/project-ip-address.png';
import clockAppProjectImage from '../images/project-clock.png';
import calculatorProjectImage from '../images/project-calculator-challenge.png';
import ProjectCard from './ProjectCard.jsx';

export default function ProjectSection() {

    // This function creates a project object.
    const createProject = ( projectTitle, projectLink, projectImg, projectImgAlt, projectDescription ) => ({
        projectTitle,
        projectLink,
        projectImg,
        projectImgAlt,
        projectDescription,
    });

    const projectsArr = [
        createProject('Dictionary', 'https://aayush259.github.io/Dictionary/', dictionaryProjectImage, 'Dictionary Project', 'A React-based web app designed to help users look up words, view their definitions, phonetics, and example sentences with theme toggling and history tracking features.'),

        createProject('Where in the World', 'https://aayush259.github.io/Where-in-the-world/', whereInTheWorldProjectImage, 'Where in the World Project', 'A React-based web app that allows users to explore information about countries around the world and features dynamic theming, infinite scrolling, and advanced filtering capabilities.'),

        createProject('IP Address Tracker', 'https://aayush259.github.io/IP-Address-Tracker/', ipAddressTrackerProjectImage, 'IP Address Tracker Project', 'Again a React-based web app that allows users to search for any IP address or domain and displays information such as the IP address, location, timezone, and ISP. The application also displays the location on a map.'),

        createProject('Clock App', 'https://aayush259.github.io/Clock/', clockAppProjectImage, 'Clock Project', 'Vanilla JS based simple yet functional web app that displays the current time, provides a stopwatch feature, and allows users to set countdown timers.'),

        createProject('Calculator', 'https://aayush259.github.io/Calculator-Challenge/', calculatorProjectImage, 'Calculator Project', 'A pure Vanilla JS based web app which can perform the basic arithmetic operations - Addition, Subtraction, Multiplication, and Division, and also provides three themes.'),
    ];

    return (
        <section id="projects" className="section projectSection">
            <p>Projects</p>
            <div className="projectSectionContainer flex">
                {
                    projectsArr.map(project => <ProjectCard key={project['projectTitle']} projectDetail={project} />)
                }
            </div>
        </section>
    );
};