// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Abacaxi', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Consensado', 'Chocolate', 'Granulado'];

const fruitSalad = (fruit, additional) => {
  const salada = [...fruit, ...additional];
  return salada;
};

console.log(fruitSalad(specialFruit, additionalItens));