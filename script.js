function atualizarDisplay(bnt){
    const display = document.getElementById('painel')
    if(display.value.length ===9)return;
    if(display.value === '0') display.value = bnt.value;
    else display.value += bnt.value;
}

function limparDisplay(){
    document.getElementById('painel').value='0'
}

let operador = ""
let valor1 = 0
function atualizarOperacao(bnt){
    const display = document.getElementById('painel')
    operador = bnt.id
    valor1 = parseInt(display.value)
    display.value = '0'
}

function calcularOperacao(){
    const display = document.getElementById('painel')
    const valor2 = parseInt(display.value)
    valor1 = eval(valor1 + operador + valor2)
    display.value = valor1
    operador = ""
}

const myStr = '<a href="http://www.example.com" target="_blank" > Link </a>';
 


