// '6A'
/* const fs = require('fs').promises;

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  
  strings.forEach((string) => console.log(string));
}

async function main() {
  await readAll();
}

main(); */


// '6B'
/* const fs = require('fs').promises;

async function getSimpsonById(id) {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');
  
  const simpsons = JSON.parse(fileContent);

  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

  if (!chosenSimpson) {
    throw new Error('id não encontrado');
  }

  return chosenSimpson;
}

async function main() {
  const simpson = await getSimpsonById(1);
  console.log(simpson);
}

main(); */


// 6C
/* const fs = require('fs').promises;

async function filterSimpsons() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
  
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

async function main() {
  await filterSimpsons();
}

main(); */


// 6D
/* const fs = require('fs').promises;

async function filterSimpsons() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const newArray = simpsons.filter((simpson) => simpson.id > '0' && simpson.id < '5');
  
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newArray));
}

async function main() {
  await filterSimpsons();
}

main(); */


// 6E
/* const fs = require('fs').promises;

async function filterSimpsons() {
  const fileContent = await fs
    .readFile('./simpsonFamily.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const newArray = [...simpsons, { id: '5', name: 'Nelson Muntz' }];
  
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newArray));
}

async function main() {
  await filterSimpsons();
}

main(); */


// 6F
const fs = require('fs').promises;

async function filterSimpsons() {
  const fileContent = await fs
    .readFile('./simpsonFamily.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const removeArray = simpsons.filter((simpson) => simpson.id !== '5');
  const newArray = [...removeArray, { id: '5', name: 'Maggie Simpson' }];
  
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newArray));
}

async function main() {
  await filterSimpsons();
}

main();
