const list = document.querySelectorAll('.list');
const indicator = document.querySelector('.indicator');

// Função para ativar o item clicado e mover o indicador
function activeLink() {
    list.forEach((item) => item.classList.remove('active')); // Remove a classe 'active' de todos os itens
    this.classList.add('active'); // Adiciona a classe 'active' ao item clicado
    moveIndicator(); // Atualiza a posição do indicador
}

// Função para mover o indicador
function moveIndicator() {
    const activeItem = document.querySelector('.list.active'); // Seleciona o item ativo
    const activeItemPosition = activeItem.offsetLeft + activeItem.offsetWidth / 2 - indicator.offsetWidth / 2; // Calcula a posição central do item
    indicator.style.left = `${activeItemPosition}px`; // Mova o indicador para a posição correta
}

// Adiciona o evento de clique a cada item da lista
list.forEach((item) => item.addEventListener('click', activeLink));

// Garante que o indicador comece centralizado no primeiro item (Home) ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.list.active')?.classList.add('active');
    moveIndicator(); // Posiciona o indicador quando a página for carregada
});

