let expression = '';

function clearDisplay() {
  expression = '';
  updateDisplay();
}

function appendCharacter(character) {
  expression += character;
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(expression);
    expression = result.toString();
    updateDisplay();
  } catch (error) {
    expression = '';
    updateDisplay();
    alert('Erro na expressão!');
  }
}

function updateDisplay() {
  document.getElementById('display').value = expression;
}

function handleInput() {
  expression = document.getElementById('display').value;
}

function toggleMode() {
  const body = document.body;
  const display = document.getElementById('display');
  const calculator = document.querySelector('.calculator');
  const buttons = document.querySelectorAll('.calculator button');

  body.classList.toggle('dark-mode');
  display.classList.toggle('dark-mode-text');
  calculator.classList.toggle('dark-mode-bg');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.toggle('dark-mode-button');
  }
}

window.addEventListener('DOMContentLoaded', function() {
  toggleMode();
});

function setLightMode() {
  const body = document.body;
  const display = document.getElementById('display');
  const calculator = document.querySelector('.calculator');
  const buttons = document.querySelectorAll('.calculator button');
  const toggleButtons = document.querySelectorAll('.toggle-buttons button');
  const toggleSquare = document.querySelector('.toggle-square');

  body.classList.remove('dark-mode');
  display.classList.remove('dark-mode-text');
  calculator.classList.remove('dark-mode-bg');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('dark-mode-button');
  }

  for (var i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].classList.remove('active');
  }

  toggleSquare.style.transform = 'translateX(0)';
  toggleSquare.style.backgroundColor = '#f6f7f6';
}

function setDarkMode() {
  const body = document.body;
  const display = document.getElementById('display');
  const calculator = document.querySelector('.calculator');
  const buttons = document.querySelectorAll('.calculator button');
  const toggleButtons = document.querySelectorAll('.toggle-buttons button');
  const toggleSquare = document.querySelector('.toggle-square');

  body.classList.add('dark-mode');
  display.classList.add('dark-mode-text');
  calculator.classList.add('dark-mode-bg');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.add('dark-mode-button');
  }

  for (var i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].classList.remove('active');
  }

  toggleSquare.style.transform = 'translateX(100%)';
  toggleSquare.style.backgroundColor = '#262b32';
}

document.addEventListener('DOMContentLoaded', function() {
  var display = document.getElementById('display');
  var calculateButton = document.getElementById('buttonred');

  calculateButton.addEventListener('click', calculate);
  display.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      calculate();
    }
  });
});
