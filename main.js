var dogName = document.querySelector('.dog-name');
var button = document.querySelector('#input-button');
var userInput = document.querySelector('#user-input');

button.addEventListener('click', switchName);

function switchName() {
  dogName.innerText = userInput.value;
}