// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add sticky nav class on scroll
const nav = document.querySelector('nav');
const navTop = nav.offsetTop;

function handleScroll() {
    if (window.scrollY >= navTop) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
}

window.addEventListener('scroll', handleScroll);

// Service card hover animations
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Form validation and submission handling
const contactLinks = document.querySelectorAll('.icon-link');
contactLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.opacity = '0.8';
        link.style.transition = 'opacity 0.2s ease';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.opacity = '1';
    });
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.animation = 'fadeIn 0.5s ease';
    });
});

// Add scroll reveal animation for sections
const sections = document.querySelectorAll('section');
const revealSection = function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
    });
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15
});

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    sectionObserver.observe(section);
});
