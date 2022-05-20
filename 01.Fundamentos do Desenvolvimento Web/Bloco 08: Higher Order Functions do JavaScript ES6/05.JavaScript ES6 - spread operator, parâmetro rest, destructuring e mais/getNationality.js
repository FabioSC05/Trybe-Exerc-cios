const getNationality = ({ firstName, nationality }) => {
  if (nationality === undefined) {
    nationality = 'Brazilian';
  }
  return `${firstName} is ${nationality}`
};

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson));
console.log(getNationality(person));