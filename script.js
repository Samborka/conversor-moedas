function ConverterUS() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value; //Pegar o valor do dentro do input, não o input inteiro
  var valorEmRealNumerico = parseFloat(valor); //Converte a string para numero

  var valorEmDolar = valorEmRealNumerico * 5.22; // Converte em dolar
  var valorEmDolarArredondado = valorEmDolar.toFixed(2); //Fixa o número de casas decimais em 2

  //Para escrever na tela:
  var elementoValorConvertido = document.getElementById("valorConvertido"); // Pega o elemento valor convertido (h2 do html)
  var valorConvertido = "O valor em real é R$ " + valorEmDolarArredondado;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEU() {
  var valorElemento = document.getElementById("valor"); //Seleciona o input
  var valor = valorElemento.value; //Pega o valor de dentro do input, não o input inteiro
  var valorEmRealNumerico = parseFloat(valor); //Converte a string para numero

  valorEmEuro = valorEmRealNumerico * 6.17;
  var valorEmEuroArredondado = valorEmEuro.toFixed(2); //Fixa o número de casas decimais em 2

  //Para escrever na tela
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em Euro é € " + valorEmEuroArredondado;
  elementoValorConvertido.innerHTML = valorConvertido;
}