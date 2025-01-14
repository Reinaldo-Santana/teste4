function handleKeydown(event) {
    if (event.key === 'Enter') {
        const activeElement = document.activeElement;
        if (activeElement) {
            // Simula o estado :active para o elemento focado
            activeElement.classList.add('active-state');
            setTimeout(() => activeElement.classList.remove('active-state'), 150);
        }
    }
}

// Adiciona o evento ao elemento
document.addEventListener('keydown', handleKeydown);

document.addEventListener('mousedown', () => {
    // Remove o foco visível ao clicar com o mouse
    document.querySelectorAll(':focus-visible').forEach((el) => el.blur());
});