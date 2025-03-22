function converter() {
    
    var decimal = Number(demo1.value);

    
    if (isNaN(decimal) || decimal === "") {
        alert("Por favor, digite um número válido.");
        return;
    }

    
    demo2.innerHTML = decimal.toString(8); 
    demo3.innerHTML = decimal.toString(16); 
    demo4.innerHTML = decimal.toString(2); 
}

function sim() {
    
    document.getElementById('calc').style.visibility = 'visible';
}

function nao() {
    alert(' Esse não é o caminho da luz <br> Bye ;-; ');
            
            // Tenta fechar a guia
            try {
                window.close();
            } catch (e) {
                // Fallback para navegadores mais antigos
                window.open('', '_self', '');
                window.close();
            }
}