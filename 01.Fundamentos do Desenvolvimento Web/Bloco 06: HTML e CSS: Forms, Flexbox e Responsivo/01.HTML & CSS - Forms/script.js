const button = document.getElementById('send');

function ifElse() {
  const names = document.getElementById('name').value.length;
  const invalidName = names < 10 || names > 40; 
  
  const email = document.getElementById('email').value.length;
  const invalidEmail = email < 10 || email > 50;
  
  const text = document.getElementById('textarea').value.length;
  const invalidText = text > 500;

  if (invalidName || invalidEmail || invalidText) {
    return false;
  } else {
    return true;
  }
}

button.addEventListener('click', dontWork);

function dontWork(event) {
  event.preventDefault();
  const validate = ifElse();
  if (validate === false) {
    alert('Dados Inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}