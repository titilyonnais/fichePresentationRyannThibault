document.querySelectorAll('.link-list').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        const targetId = this.getAttribute('href').substring(1); // Récupère l'ID cible
        const targetElement = document.getElementById(targetId); // Trouve l'élément cible
        if (targetElement) {
            const offset = 10; // Décalage en pixels
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }
    });
});

const scrollToTopButton = document.getElementById('scrollToTop');

// Affiche le bouton lorsque l'utilisateur fait défiler vers le bas
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Affiche le bouton après 200px de défilement
        scrollToTopButton.style.display = 'flex';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Remonte en haut de la page lorsque le bouton est cliqué
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});