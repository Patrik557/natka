document.addEventListener('DOMContentLoaded', function() {
    // Přidáme indexy pro postupné animace
    const highlights = document.querySelectorAll('.highlights div');
    highlights.forEach((div, index) => {
        div.style.setProperty('--i', index);
    });

    // Přidáme efekt parallax pro pozadí
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        
        document.querySelectorAll('.bubble').forEach(bubble => {
            bubble.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    // Smooth scroll pro tlačítka
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});