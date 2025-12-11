// Função para alternar entre os modos
document.getElementById('themeToggle').onclick = function() {
    // Alterna a classe dark-mode no body
    document.body.classList.toggle('dark-mode');

    // Altera o ícone do botão de acordo com o tema
    if (document.body.classList.contains('dark-mode')) {
        document.getElementById('themeToggle').textContent = '🌞'; // Muda para o ícone de sol
    } else {
        document.getElementById('themeToggle').textContent = '🌙'; // Muda para o ícone de lua
    }
};
