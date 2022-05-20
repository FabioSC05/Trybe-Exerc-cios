const greet = (parA, parB = 'Hi') => `${parB} ${parA}`;

console.log(greet('John'))
console.log(greet('John', 'Good morning'))
console.log(greet('Isabela', 'Oi'))