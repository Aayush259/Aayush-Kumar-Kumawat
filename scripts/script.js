// Getting hamburger button and nav elements.
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

// Getting all nav links.
const navLinks = document.querySelectorAll('.nav a');

// When hamburger is clicked, display navlinks by toggling a class.
hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    // Updating classes of nav and hamburger.
    hamburger.classList.toggle('activeHam');
    nav.classList.toggle('activeNav');
})

// This function deactivates hamburger.
const deActivateHamBurger = () => {
    if (hamburger.classList.contains('activeHam')) {
        hamburger.classList.remove('activeHam');
        nav.classList.remove('activeNav');
    };
}

// Deactivate hamburger when clicked or scrolled in document.
document.addEventListener('click', deActivateHamBurger);
document.addEventListener('scroll', deActivateHamBurger);

navLinks.forEach((navLink) => {

    // When any link is clicked, temporarily hide the header.
    navLink.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelector('.header').style.top = '-91px';

        // This function displays header.
        const showHeader = () => {
            document.querySelector('.header').style.top = '0';
            document.removeEventListener('scroll', hideHeader);
        };

        // When the page is scrolled after clicking the link, show the header.
        setTimeout(() => {
            document.addEventListener('scroll', showHeader);
        }, 0);

    });
});