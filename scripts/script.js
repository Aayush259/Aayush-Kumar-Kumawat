// Getting hamburger button.
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    // Getting nav.
    const nav = document.querySelector('nav');

    // Updating classes of nav and hamburger.
    hamburger.classList.toggle('activeHam');
    nav.classList.toggle('activeNav');
})