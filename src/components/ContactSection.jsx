import React from 'react';
import linkedInLogo from '../images/linkedin-logo.png';
import ContactCard from './ContactCard.jsx';

export default function ContactSection() {

    // This function creates contact detail.
    const createContactDetail = (whereToConnect, linkToConnect, platformImage, platformImageAlt) => ({
        whereToConnect,
        linkToConnect,
        platformImage,
        platformImageAlt,
    });

    // Array of all contact details.
    const contactDetailArray = [
        createContactDetail('Follow me on GitHub', 'https://github.com/Aayush259', `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20496%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23ffffff'%20d='M165.9%20397.4c0%202-2.3%203.6-5.2%203.6-3.3%20.3-5.6-1.3-5.6-3.6%200-2%202.3-3.6%205.2-3.6%203-.3%205.6%201.3%205.6%203.6zm-31.1-4.5c-.7%202%201.3%204.3%204.3%204.9%202.6%201%205.6%200%206.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5%20.3-6.2%202.3zm44.2-1.7c-2.9%20.7-4.9%202.6-4.6%204.9%20.3%202%202.9%203.3%205.9%202.6%202.9-.7%204.9-2.6%204.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8%208C106.1%208%200%20113.3%200%20252c0%20110.9%2069.8%20205.8%20169.5%20239.2%2012.8%202.3%2017.3-5.6%2017.3-12.1%200-6.2-.3-40.4-.3-61.4%200%200-70%2015-84.7-29.8%200%200-11.4-29.1-27.8-36.6%200%200-22.9-15.7%201.6-15.4%200%200%2024.9%202%2038.6%2025.8%2021.9%2038.6%2058.6%2027.5%2072.9%2020.9%202.3-16%208.8-27.1%2016-33.7-55.9-6.2-112.3-14.3-112.3-110.5%200-27.5%207.6-41.3%2023.6-58.9-2.6-6.5-11.1-33.3%202.6-67.9%2020.9-6.5%2069%2027%2069%2027%2020-5.6%2041.5-8.5%2062.8-8.5s42.8%202.9%2062.8%208.5c0%200%2048.1-33.6%2069-27%2013.7%2034.7%205.2%2061.4%202.6%2067.9%2016%2017.7%2025.8%2031.5%2025.8%2058.9%200%2096.5-58.9%20104.2-114.8%20110.5%209.2%207.9%2017%2022.9%2017%2046.4%200%2033.7-.3%2075.4-.3%2083.6%200%206.5%204.6%2014.4%2017.3%2012.1C428.2%20457.8%20496%20362.9%20496%20252%20496%20113.3%20383.5%208%20244.8%208zM97.2%20352.9c-1.3%201-1%203.3%20.7%205.2%201.6%201.6%203.9%202.3%205.2%201%201.3-1%201-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7%201.3%20.3%202.9%202.3%203.9%201.6%201%203.6%20.7%204.3-.7%20.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3%20.7zm32.4%2035.6c-1.6%201.3-1%204.3%201.3%206.2%202.3%202.3%205.2%202.6%206.5%201%201.3-1.3%20.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6%201-1.6%203.6%200%205.9%201.6%202.3%204.3%203.3%205.6%202.3%201.6-1.3%201.6-3.9%200-6.2-1.4-2.3-4-3.3-5.6-2z'/%3e%3c/svg%3e`, 'GitHub'),

        createContactDetail('Connect with me', 'https://www.linkedin.com/in/aayush-kumar-kumawat/', linkedInLogo, 'LinkedIn'),

        createContactDetail('Follow me on X', 'https://x.com/Aayush259_', `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23ffffff'%20d='M389.2%2048h70.6L305.6%20224.2%20487%20464H345L233.7%20318.6%20106.5%20464H35.8L200.7%20275.5%2026.8%2048H172.4L272.9%20180.9%20389.2%2048zM364.4%20421.8h39.1L151.1%2088h-42L364.4%20421.8z'/%3e%3c/svg%3e`, 'Twitter/X'),
    ];

    return (
        <section id="contact" className="section contactSection">
            <p>Let's Connect</p>

            <div className="connectCardContainer flex">
                {
                    contactDetailArray.map(contactDetail => <ContactCard key={contactDetail['whereToConnect']} contactDetail={contactDetail} />)
                }
            </div>
        </section>
    );
};
