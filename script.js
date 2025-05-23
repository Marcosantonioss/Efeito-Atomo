const electrons = document.querySelectorAll('.electron');

electrons.forEach(electron => {
    electron.addEventListener('click', () => {
        const currentColor = getComputedStyle(electron).backgroundColor;
        electron.style.backgroundColor = currentColor === 'rgb(0, 0, 255)' ? 'green' : 'blue';
    });
});

