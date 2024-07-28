// Função para adicionar valor ao display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Função para limpar o display
function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

// Função para calcular o resultado
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}

// Função para alternar o sinal de valores negativos
function toggleSign() {
    const display = document.getElementById('display');
    if (display.innerText !== '0') {
        display.innerText = display.innerText.startsWith('-') ?
            display.innerText.slice(1) : '-' + display.innerText;
    }
}

// Função para alternar entre modo claro e escuro
function toggleDarkMode() {
    const body = document.body;
    const toggleButton = document.getElementById('darkModeToggle');
    
    body.classList.toggle('dark-mode');

    // Atualizar o texto do botão com base no modo atual
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Modo Claro';
    } else {
        toggleButton.textContent = 'Modo Escuro';
    }
}

// Função para animar o título
function animateTitle() {
    const title = document.querySelector('.title');
    title.classList.add('animate');
    // Remove a animação após a execução para permitir novas animações
    setTimeout(() => title.classList.remove('animate'), 500);
}
// Atualize o toggleDarkMode para adicionar/remover classes de forma consistente
function toggleDarkMode() {
    const body = document.body;
    const toggleButton = document.getElementById('darkModeToggle');
    
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Modo Claro';
    } else {
        toggleButton.textContent = 'Modo Escuro';
    }
}
// Atualize o toggleDarkMode para adicionar/remover classes de forma consistente
function toggleDarkMode() {
    const body = document.body;
    const toggleButton = document.getElementById('darkModeToggle');
    
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Modo Claro';
    } else {
        toggleButton.textContent = 'Modo Escuro';
    }
}

// Verifique a função de animação para garantir que funcione em todos os navegadores
function animateTitle() {
    const title = document.querySelector('.title');
    title.classList.add('animate');
    setTimeout(() => title.classList.remove('animate'), 500);
}
function toggleDarkMode() {
    const body = document.body;
    const toggleButton = document.getElementById('darkModeToggle');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        toggleButton.textContent = 'Modo Escuro';
    } else {
        body.classList.add('dark-mode');
        toggleButton.textContent = 'Modo Claro';
    }
}
