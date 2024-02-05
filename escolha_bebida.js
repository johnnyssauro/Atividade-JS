let escolha = "chá";
let valor ="";

switch (escolha.toLowerCase()) {
  case "café":
    valor = 2.50;
    break;
  case "leite":
    valor = 2.00;
    break;''
  case "chá":
    valor = 1.50;
    break;
  default:
    console.log("Escolha inválida. Por favor, escolha entre café, leite ou chá.");
    break;
}

console.log("A bebida esolhida é:", escolha,"o valor a ser pago é de:",valor);
