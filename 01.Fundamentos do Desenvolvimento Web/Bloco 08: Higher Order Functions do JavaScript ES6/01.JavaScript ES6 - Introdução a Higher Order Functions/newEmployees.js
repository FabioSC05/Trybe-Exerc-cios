const nomeEmail = (nome) => {
  const nomeCompleto = nome;
  const email = `${nome.replace(' ', '_').toLowerCase()}@betrybe.com`;
  return { nomeCompleto, email };
};

const newEmployees = (callBack1, callBack2, callBack3) => {
  const employees = {
    id1: nomeEmail(callBack1), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: nomeEmail(callBack2), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: nomeEmail(callBack3), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees('Pedro Guerra', 'Luiza Drumond', 'Carla Paiva'));