// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', dontClick);

function dontClick(event) {
  event.preventDefault();
}

INPUT_CHECKBOX.addEventListener('click', nothing);

function nothing(event) {
  event.preventDefault();
}

INPUT_TEXT.addEventListener('keypress', tecla);

function tecla(event) {
  if (event.key !== 'a') {
    event.preventDefault();
  }
}