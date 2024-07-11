import React from 'react';

export default function ContactCard({ contactDetail }) {

    const whereToConnect = contactDetail['whereToConnect'];
    const linkToConnect = contactDetail['linkToConnect'];
    const platformImage = contactDetail['platformImage'];
    const platformImageAlt = contactDetail['platformImageAlt'];

    return (
        <div className="connectCard flex">
            <a href={linkToConnect} target="_blank">
                <img src={platformImage} alt={platformImageAlt} height="80" />
                <p>{whereToConnect}</p>
            </a>
        </div>
    );
};
