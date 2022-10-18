const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const allClearButton = document.querySelector("[data-all-clear]");
const outputCurrentText = document.querySelector("[data-output-current]");
const outputBeforeText = document.querySelector("[data-output-before]");

function add(number, secondNumber) {
  return number + secondNumber;
}

function substract(number, secondNumber) {
  return number - secondNumber;
}

function multiply(number, secondNumber) {
  return number * secondNumber;
}

function divide(number, secondNumber) {
  return number / secondNumber;
}

function operate(operator, number, secondNumber) {
  switch (operator) {
    case "+":
      return add(number, secondNumber);
      break;
    case "-":
      return substract(number, secondNumber);
      break;
    case "x":
      return multiply(number, secondNumber);
      break;
    case "÷":
      if (b === 0) return "lmao";
      return divide(number, secondNumber);
      break;
    default:
      return;
  }
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => appendNumber(button.textContent));
});

function appendNumber(number) {
  outputCurrentText.textContent += number
}

function display(number) {}
