// Adiciona a classe quando o usuário navega com o teclado
function handleKeydown(event) {
    if (event.key === 'Enter') {
        simulateActiveState();
    }
}

// Simula o comportamento do :active
function simulateActiveState() {
    const activeElement = document.activeElement;

    if (activeElement) {
        activeElement.classList.add('active-state');

        setTimeout(() => {
            activeElement.classList.remove('active-state');
        }, 150);
    }
}

// Adiciona os event listeners
document.addEventListener('keydown', handleKeydown);