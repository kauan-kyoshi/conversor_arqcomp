function converter() {

    var decimal = Number(demo1.value);

    if (isNaN(decimal) || decimal === "") {
        alert("Por favor, digite um número válido.");

    } else {
        demo2.innerHTML = decimal.toString(8);
        demo3.innerHTML = decimal.toString(16);
        demo4.innerHTML = decimal.toString(2);
    }
}

function sim() {

    document.getElementById('calc').style.visibility = 'visible';
}

function nao() {
    alert(`Esse não é o caminho da luz 
        Bye ;-; `);
    try {
        window.close();
    } catch (erro) {
        console.error(`Erro: ${erro.message}`)
    }
}

function calulo(operacao) {
    var baseElement = document.getElementById('Base');
    var base = baseElement.value;
    var num1 = document.getElementById('numero_1').value;
    var num2 = document.getElementById('numero_2').value;

    if (num1 === '' || num2 === '') {
        alert("Por favor, digite números válidos.");
        
    }

    var tipo_base;
    switch (base) {
        case 'hex':
            tipo_base = 16;
            break;
        case 'oct':
            tipo_base = 8;
            break;
        case 'bin':
            tipo_base = 2;
            break;
        default:
            alert('Base inválida.');
            
    }

    var dec1 = parseInt(num1, tipo_base);
    var dec2 = parseInt(num2, tipo_base);

    if (isNaN(dec1) || isNaN(dec2)) {
        alert("Números inválidos para a base selecionada.");
        
    }

    var result;
    switch (operacao) {
        case 'soma':
            result = dec1 + dec2;
            break;
        case 'sub':
            result = dec1 - dec2;
            break;
        case 'div':
            if (dec2 === 0) {
                alert("Não dividirás por zero");
                
            }
            result = dec1 / dec2;
            break;
        case 'mult':
            result = dec1 * dec2;
            break;
        default:
            alert('Operação inválida.');
            
    }

    var resultado;
    if (base === 'hex') {
        resultado = Math.floor(result).toString(16).toUpperCase();
    } else if (base === 'oct') {
        resultado = Math.floor(result).toString(8);
    } else if (base === 'bin') {
        resultado = Math.floor(result).toString(2);
    }
    
    document.getElementById('resposta').innerHTML = resultado;
}

function soma() { calulo('soma'); }
function sub() { calulo('sub'); }
function div() { calulo('div'); }
function mult() { calulo('mult'); }
