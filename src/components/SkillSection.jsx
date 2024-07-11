import React from 'react';
import jsLogo from '../images/javascript-logo.png';
import reactLogo from '../images/react_icon.png';
import htmlLogo from '../images/html5-logo.png';
import cssLogo from '../images/css-logo.png';
import SkillCard from './SkillCard.jsx';

export default function SkillSection() {

    // This function creates and returns a skill object.
    const createSkill = ( name, imgSrc, imgAlt, imgWidth, description ) => ({
        name,
        imgSrc,
        imgAlt,
        imgWidth,
        description,
    });

    // All skills' array using createSkill function.
    const allSkills = [
        createSkill('JavaScript', jsLogo, 'JavaScript', '150', 'Proficient in modern JavaScript, including ES6+ features and asynchronous programming.'),
        createSkill('React JS', reactLogo, 'React JS', '180', 'Experienced in building dynamic and responsive web applications using React.'),
        createSkill('HTML5', htmlLogo, 'HTML', '150', 'Strong foundation in HTML5, semantic markup, and accessibility best practices.'),
        createSkill('CSS3', cssLogo, 'CSS', '190', 'Skilled in CSS3, responsive design, and modern frameworks like Flexbox and Grid.'),
    ];

    return (
        <section id="skills" className=" section skillSection">
            <p>Skills</p>
            <div className="skillCardContainer flex">
                {
                    allSkills.map(skill => <SkillCard key={skill['name']} skillDetail={skill} />)
                }
            </div>
        </section>
    );
};
