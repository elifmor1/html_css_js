document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.glow-button');
    const title = document.querySelector('.title');

    button.addEventListener('click', () => {
        // Add sparkle effect
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1.1)';
        }, 100);

        // Animate title
        title.style.animation = 'none';
        title.offsetHeight; // Trigger reflow
        title.style.animation = 'fadeIn 1.5s ease-in';
    });
});