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

function base(){

}