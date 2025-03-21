function converter() {
    // Obter o valor digitado no campo de entrada (com ID demo1)
    var decimal = Number(document.getElementById('demo1').value);

    // Verificar se o valor digitado é um número válido
    if (isNaN(decimal) || decimal === "") {
        alert("Por favor, digite um número válido.");
        return;
    }

    // Atualizar os resultados nas divs correspondentes
    document.getElementById('demo2').innerHTML = decimal.toString(8); // Octal
    document.getElementById('demo3').innerHTML = decimal.toString(16); // Hexadecimal
    document.getElementById('demo4').innerHTML = decimal.toString(2);  // Binário
}
