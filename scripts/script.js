let operator = "";
let a = "";
let b = "";

function add(a, b) {
    let sum = a + b;
    return sum;
  }
  
function subtract(a, b) {
    let diff = a - b;
    return diff;
  }
  
function multiply(a, b) {
    let mult = a * b;
    return mult;
  }
  
function divide(a, b) {
    let quot = a / b;
    return quot;
  }

function operate(operator, a, b) {
    if (operator === '+' ) {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    }

}
console.log(operate('/', 1, 2))