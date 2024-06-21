// Getting hamburger button and nav elements.
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

// Getting all nav links.
const navLinks = document.querySelectorAll('.nav a');

// Getting all sections.
const sections = document.querySelectorAll('.section');

// Highlights the links whose sections are in the viewport.
const observer = new IntersectionObserver(

    entries => {
        entries.forEach(entry => {
            // entry.target.classlist.toggle('active', entry.isIntersecting);
            // console.log(entry.target);
            const id = entry.target.id;
            // console.log(id);
            const navLink = document.querySelector(`a[href="#${id}"]`);

            if (entry.isIntersecting) {
                navLinks.forEach(navLink => {
                    navLink.classList.remove('active');
                })
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        })
    },
    {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    }
);

sections.forEach(section => {
    observer.observe(section);
});

// When hamburger is clicked, display navlinks by toggling a class.
hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    // Updating classes of nav and hamburger.
    hamburger.classList.toggle('activeHam');
    nav.classList.toggle('activeNav');
})

// This function deactivates hamburger.
const deActivateHamBurger = () => {

    if (window.scrollY === 0) {
        document.querySelector('a[href="#"]').classList.add('active');
    }

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
            document.removeEventListener('scroll', showHeader);
        };

        // When the page is scrolled after clicking the link, show the header.
        setTimeout(() => {
            document.addEventListener('scroll', showHeader);
        }, 0);

    });
});