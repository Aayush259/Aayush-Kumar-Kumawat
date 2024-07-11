import React from 'react';

export default function SkillCard({ skillDetail }) {

    // Extracting skill details.
    const imgSrc = skillDetail['imgSrc'];
    const imgAlt = skillDetail['imgAlt'];
    const imgWidth = skillDetail['imgWidth'];
    const skillDescription = skillDetail['description'];

    return (
        <div className="skillCard flex">
            <img src={imgSrc} alt={imgAlt} width={imgWidth} style={{marginTop: '1rem'}} />
            <p>{skillDescription}</p>
        </div>
    );
};
