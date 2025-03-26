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
<<<<<<< HEAD
    alert(`Esse não é o caminho da luz 
        Bye ;-; `);
    try {
        window.close();
    } catch (erro) {
        console.error(`Erro: ${erro.message}`)
    }
=======
    alert(`Esse não é o caminho da luz`);
            try {
                window.close();
            } catch (erro) {
                console.error(`Erro: ${erro.message}`) 
            }
>>>>>>> 921de7fa4fa7895bda03bc0ad9a550246a30b9ba
}

function calulo(opecacao) {
    var baseElement = document.getElementById('Base');
    var base = baseElement.value;
    var num1 = document.getElementById('numero_1').value;
    var num2 = document.getElementById('numero_2').value;

    if (num1 === '' || num2 === '') {
        alert("Por favor, digite números válidos.");
        
<<<<<<< HEAD
=======
    }else if (isNaN(global_numero_1) || isNaN(global_numero_2)){
        alert("Por favor, Digite um número válido.");
    }else{
        if(base.value == 'hex'){
            dec_1 = parseInt(global_numero_1);
            dec_2 = parseInt(global_numero_2);

            res= dec_1 + dec_2;
            resp.innerHTML= resp.toString(16)
            document.getElementById('calc').style.visibility = 'visible';
        }else if(base.value =='oct'){

        }else if(base.value == 'bin'){
            
        }
>>>>>>> 921de7fa4fa7895bda03bc0ad9a550246a30b9ba
    }

    var radix;
    switch (base) {
        case 'hex':
            radix = 16;
            break;
        case 'oct':
            radix = 8;
            break;
        case 'bin':
            radix = 2;
            break;
        default:
            alert('Base inválida.');
            
    }

    var dec1 = parseInt(num1, radix);
    var dec2 = parseInt(num2, radix);

    if (isNaN(dec1) || isNaN(dec2)) {
        alert("Números inválidos para a base selecionada.");
        
    }

    var result;
    switch (opecacao) {
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
