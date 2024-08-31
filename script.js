 document.addEventListener('keydown', function(event) //document.addEventListener('keydown', function(event) { ... }); adiciona um ouvinte de eventos para capturar pressionamentos de teclas.
{
    // Mapeamento das teclas para funções
    switch (event.key) {
        case 'Enter':
        case '=':
            event.preventDefault();
            calculate();
            break;
        case 'Backspace':
            event.preventDefault(); //event.preventDefault(); é usado para evitar o comportamento padrão das teclas (como a rolagem para cima e para baixo ao pressionar as setas).

            deleteDigit();
            break;
        case 'Escape':
            event.preventDefault();
            clearDisplay();
            break;
        case '+':
        case '-':
        case '*':
        case '/':
        case '.':
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            event.preventDefault();
            appendToDisplay(event.key);
            break;
        default:
            // Ignorar outras teclas
            break;
    }
});

// Função para limpar a tela
function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

// Função para deletar o último dígito
function deleteDigit() {
    let display = document.getElementById('display').innerText;
    if (display.length > 1) {
        document.getElementById('display').innerText = display.slice(0, -1);
    } else {
        clearDisplay();
    }
}

// Função para adicionar valores ao display
function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Função para calcular o resultado
function calculate() {
    let display = document.getElementById('display').innerText;
    try {
        let result = eval(display);
        document.getElementById('display').innerText = result;
    } catch (error) {
        document.getElementById('display').innerText = 'Erro';
    }
}
