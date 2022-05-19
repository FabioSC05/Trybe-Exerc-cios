const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  let newArray = [];
  let valor = 0;
  grades.reduce((acc, element) => {
    valor = element.reduce((acc2, element2) => acc2 + element2);
    newArray.push(valor / 5);
    return acc + element;
  }, 0);
  return students.map((student, index) => {
    return { name: student, average: grades[index].reduce((acc, element) => acc + element) / grades[index].length };
  });
}

console.log(studentAverage());