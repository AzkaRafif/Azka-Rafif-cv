document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-bars');
    this.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.mobile-menu').classList.remove('active');
        document.querySelector('.hamburger i').classList.remove('fa-times');
        document.querySelector('.hamburger i').classList.add('fa-bars');
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