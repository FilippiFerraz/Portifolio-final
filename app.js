// Função para destacar elementos quando o mouse passa por cima
function highlightElement(element) {
    element.style.backgroundColor = '#F4EDCC'; // Altera a cor de fundo para um tom de destaque
}

// Função para remover o destaque quando o mouse sai
function removeHighlight(element) {
    element.style.backgroundColor = ''; // Remove a cor de fundo, restaurando para o padrão
}

// Adiciona eventos de mouseover e mouseout para cada elemento que deseja destacar
document.querySelectorAll('.highlightable').forEach(item => {
    item.addEventListener('mouseover', event => {
        highlightElement(item);
    });

    item.addEventListener('mouseout', event => {
        removeHighlight(item);
    });
});