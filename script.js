
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    const header = document.querySelector('header');
    
    // Add a click event listener to the menu icon
    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });
    
    // Add a scroll event listener
    window.addEventListener('scroll', function() {
        const top = window.scrollY;
        navLinks.forEach(link => link.classList.remove('active'));

        sections.forEach(section => {
            const offset = section.offsetTop - 150;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            
            if (top >= offset && top < offset + height) {
                const matchingLink = document.querySelector(`header nav a[href*=${id}]`);
                if (matchingLink) {
                    matchingLink.classList.add('active');
                }
            }
        });

        // Toggle the 'sticky' class on the header
        header.classList.toggle('sticky', top > 100);
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
    
    // Initialize ScrollReveal
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200
    });
    
    // Define ScrollReveal animations
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
    
    // Initialize Typed.js
    const typed = new Typed('.multiple-text', {
        strings: ['CSE Student at SRM UNIVERSITY', 'Frontend developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});
