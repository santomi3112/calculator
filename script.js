const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const allClearButton = document.querySelector("[data-all-clear]");
const outputCurrentText = document.querySelector("[data-output-current]");
const outputBeforeText = document.querySelector("[data-output-before]");

//
// operation function
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
// end of operation function
//

// implementing operation
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
      if (secondNumber === 0) return "lmao";
      return divide(number, secondNumber);
      break;
    default:
      return;
  }
}

// number buttons
numberButtons.forEach((button) => {
  button.addEventListener("click", () => displayNumber(button.textContent));
});

// operation buttons
operationButtons.forEach((button) => {
  button.addEventListener("click", () => displayOperation(button.textContent));
});

// AC button
allClearButton.addEventListener(
  "click",
  () => (outputCurrentText.textContent = null)
);

// C button
clearButton.addEventListener("click", () => clearNumber());

// display operations func
function displayOperation(operator) {
  outputCurrentText.textContent += operator;
}

// display numbers func
function displayNumber(number) {
  outputCurrentText.textContent += number;
}

// C button func
function clearNumber() {
  outputCurrentText.textContent = outputCurrentText.textContent
    .toString()
    .slice(0, -1);
}
