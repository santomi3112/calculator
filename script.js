const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const allClearButton = document.querySelector("[data-all-clear]");
const outputCurrentText = document.querySelector("[data-output-current]");
const outputBeforeText = document.querySelector("[data-output-before]");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    outputCurrentText.appendNumber(button.innerText);
  });
});
