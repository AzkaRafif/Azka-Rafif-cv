document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const initMobileMenu = () => {
        const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.querySelector('.mobile-menu');

        if (hamburger && mobileMenu) {
            const menuIcon = hamburger.querySelector('i');

            hamburger.addEventListener('click', function () {
                mobileMenu.classList.toggle('hidden');
                mobileMenu.classList.toggle('active');
                menuIcon.classList.toggle('fa-bars');
                menuIcon.classList.toggle('fa-times');
            });

            document.querySelectorAll('.mobile-menu a').forEach(link => {
                link.addEventListener('click', function () {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('active');
                    menuIcon.classList.add('fa-bars');
                    menuIcon.classList.remove('fa-times');
                });
            });
        }
    };

    // Smooth scrolling
    const initSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    // Progress animations
    const initProgressAnimations = () => {
        document.querySelectorAll('.progress-fill').forEach(circle => {
            const percent = circle.dataset.percent;
            circle.style.setProperty('--final-clip', `circle(${percent / 2}% at 50% 50%)`);
        });

        document.querySelectorAll('.design-progress-bar').forEach(bar => {
            const percent = bar.dataset.percent;
            bar.style.setProperty('--final-width', `${percent}%`);
        });
    };

    // Scroll animations with IntersectionObserver
    const initScrollAnimations = () => {
        const animatedElements = document.querySelectorAll(
            '.animate-fade-in-up, .animate-element'
        );

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        animatedElements.forEach((element) => {
            observer.observe(element);
        });
    };

    // Initialize all functions Initialize all functions
    initMobileMenu();  initMobileMenu();
    initSmoothScroll();
    initProgressAnimations();tions();
    initScrollAnimations();s();
});