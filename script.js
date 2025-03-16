// Animation de défilement fluide pour la navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation simple pour les compétences
window.addEventListener('scroll', () => {
    const competences = document.querySelector('#competences');
    const position = competences.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight - 100) {
        document.querySelectorAll('.barre').forEach(barre => {
            barre.style.transition = 'width 1s ease-in-out';
            barre.style.width = barre.getAttribute('style').split(':')[1];
        });
    }
});