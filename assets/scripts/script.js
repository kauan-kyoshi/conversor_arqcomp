function converter() {
    
    var decimal = Number(demo1.value);
    
    if (isNaN(decimal) || decimal === "") {
        alert("Por favor, digite um número válido.");
        
    }else{
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

var global_numero_1 =0
var global_numero_2 =0

function soma(){
    var dec_1 = 0;
    var dec_2 = 0;
    var res = 0;


    global_numero_1 = Number(numero_1.value);
    global_numero_2 = Number(numero_2.value);

    if(global_numero_1 == '' || global_numero_2 == ''){
        alert("Por favor, digite um número válido.");
        
    }else if (isNaN(global_numero_1) || isNaN(global_numero_2)){
        alert("Por favor, digite um número válido.");
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
    }

    
}