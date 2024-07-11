import React from 'react';

export default function ProjectCard({ projectDetail }) {

    // Extracting project details.
    const projectTitle = projectDetail['projectTitle'];
    const projectLink = projectDetail['projectLink'];
    const projectImg = projectDetail['projectImg'];
    const projectImgAlt = projectDetail['projectImgAlt'];
    const projectDescription = projectDetail['projectDescription'];

    return (
        <a href={projectLink} target="_blank" className="project flex">
            <img src={projectImg} alt={projectImgAlt} />
            <p className="projectName">{projectTitle}</p>
            <p className="projectDesc">{projectDescription}</p>
        </a>
    );
};
