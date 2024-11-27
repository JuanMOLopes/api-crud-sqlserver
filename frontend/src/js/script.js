// Selecionando o checkbox pelo seu tipo
const checkbox = document.querySelector('input[type="checkbox"]');

// Função para verificar se o checkbox está marcado
function verificarCheckbox() {
    if (checkbox.checked) {
        document.body.style = "display ="
    } else {
        console.log("O checkbox não está marcado.");
    }
}

// Chama a função inicialmente para verificar o estado
verificarCheckbox();

// Adicionando um evento para verificar quando o estado do checkbox mudar
checkbox.addEventListener('change', verificarCheckbox);
