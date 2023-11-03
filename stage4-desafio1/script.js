/*
 Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações

*/
// Solicitar ao usuário que insira dois números
const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));

if (!isNaN(numero1) && !isNaN(numero2)) {
  // Calcular a soma
  const soma = numero1 + numero2;
  alert(`A soma de ${numero1} e ${numero2} é: ${soma}`);

  // Calcular a subtração
  const subtracao = numero1 - numero2;
  alert(`A subtração de ${numero1} e ${numero2} é: ${subtracao}`);

  // Calcular a multiplicação
  const multiplicacao = numero1 * numero2;
  alert(`A multiplicação de ${numero1} e ${numero2} é: ${multiplicacao}`);

  // Verificar se o segundo número é diferente de zero antes de calcular a divisão
  if (numero2 !== 0) {
    const divisao = (numero1 / numero2).toFixed(2);
    alert(`A divisão de ${numero1} por ${numero2} é: ${divisao}`);
  } else {
    alert("Não é possível dividir por zero.");
  }

  // Verificar se o segundo número é diferente de zero antes de calcular o resto da divisão
  if (numero2 !== 0) {
    const resto = numero1 % numero2;
    alert(`O resto da divisão de ${numero1} por ${numero2} é: ${resto}`);
  } else {
    alert("Não é possível calcular o resto da divisão por zero.");
  }
} else {
  alert("Por favor, insira números válidos.");
}
