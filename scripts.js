document.addEventListener('DOMContentLoaded', function () {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.backgroundColor = '#ff6600';
            card.style.color = '#fff';
        });

        card.addEventListener('mouseout', () => {
            card.style.backgroundColor = '#eee';
            card.style.color = '#000';
        });
    });
});
