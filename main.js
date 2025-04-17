document.addEventListener('DOMContentLoaded', function() {
    // Animasi untuk circular progress
    const progressCircles = document.querySelectorAll('.progress-fill');
    
    progressCircles.forEach(circle => {
        const percent = parseInt(circle.getAttribute('data-percent'));
        const radius = percent / 2; // Karena diameter adalah 100%, radius adalah 50%
        
        // Sudah di-set via inline style --final-clip
        // Animasi akan di-trigger oleh CSS animation
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Animasi untuk progress bar
    const progressBars = document.querySelectorAll('.design-progress-bar');
    
    progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.setProperty('--final-width', `${percent}%`);
    });
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuIcon = hamburger.querySelector('i');

    // Toggle mobile menu
    hamburger.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        });
    });
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Animation for progress bars
document.addEventListener('DOMContentLoaded', function() {
    // Animate circular progress
    const progressCircles = document.querySelectorAll('.progress-fill');
    progressCircles.forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        circle.style.setProperty('--final-clip', `circle(${percent/2}% at 50% 50%)`);
    });

    // Animate bar progress
    const progressBars = document.querySelectorAll('.design-progress-bar');
    progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.setProperty('--final-width', `${percent}%`);
    });
});