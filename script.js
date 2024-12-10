// Optional: Add any interactive features or animations here
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.2}s`; // Staggered animation
        section.addEventListener('mouseenter', () => {
            section.style.backgroundColor = '#e7f1ff';
        });
        section.addEventListener('mouseleave', () => {
            section.style.backgroundColor = '#fff';
        });
    });
});