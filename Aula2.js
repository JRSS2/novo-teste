//Faça um programa para calcular o valor de uma viagem.
// Você tera 5 variaveis. Sendo elas:
// 1 - Preço de etanol;
// 2 - Preço da gasolina;
// 3 - O tipo de combustivel que esta no seu carro;
// 4 - Gasto médio de combustivel do carro por KM;
// Distância em KM da viagem;

// Imprima no console o valor que sera gasto para realizar esta viagem.
const precoCombustivel = 5.79;
const kmPorlitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKM / kmPorlitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));
