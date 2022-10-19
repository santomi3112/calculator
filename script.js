let number = ''
let secondNumber = ''
let currentOperator = undefined

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const allClearButton = document.querySelector("[data-all-clear]");
const outputBeforeText = document.querySelector("[data-output-before]");
const outputCurrentText = document.querySelector("[data-output-current]");

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
  // number = parseFloat(outputBeforeText.textContent)
  // secondNumber = parseFloat(outputCurrentText.textContent)
  // if (isNaN(number) || isNaN(secondNumber)) return
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

// equals button
equalsButton.addEventListener("click", (button) => {
  operate(currentOperator, number, secondNumber)
  updateDisplay()
});

// number buttons
numberButtons.forEach((button) => {
  button.addEventListener(
    "click",
    () => displayNumber(button.textContent),
    updateDisplay()
  );
});

operationButtons.forEach((button) => {
  button.addEventListener(
    "click",
    () => chooseOperation(button.textContent),
    updateDisplay()
  );
});


// AC button
allClearButton.addEventListener("click", () => allClearNumber());

// C button
clearButton.addEventListener("click", () => clearNumber());

// choose operator func
function chooseOperation(operator) {
  // if (outputCurrentText.textContent === '') return
  // if (outputBeforeText.textContent !== '') {
  //   operate()
  // }
  number = outputCurrentText.textContent;
  currentOperator = operator
  outputBeforeText.textContent = `${number} ${currentOperator}`
  outputCurrentText.textContent = ''
}

// display numbers func
function displayNumber(number) {
  if (outputCurrentText.textContent === '0') outputCurrentText.textContent = ''
  if (number === "." && outputCurrentText.textContent.includes(".")) return;
  outputCurrentText.textContent += number
}

// C button func
function clearNumber() {
  outputCurrentText.textContent = outputCurrentText.textContent
    .toString()
    .slice(0, -1);
}

// AC function
function allClearNumber() {
  outputCurrentText.textContent = "0";
  outputBeforeText.textContent = "";
  operator = undefined;
}

function updateDisplay() {
  outputCurrentText.textContent = number;
  outputBeforeText.textContent = secondNumber;
}
