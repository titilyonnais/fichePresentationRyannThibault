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