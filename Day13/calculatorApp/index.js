const display = document.getElementById("display");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const dot = document.getElementById("dot");
const ac = document.getElementById("ac");
const del = document.getElementById("delete");
const equal = document.getElementById("equal");

let operator = "";
let result = 0;


const oneClick = () => {
  if (display.innerText == "0") {
    display.innerText = "1";
  } else {
    if(display.innerText.length<14){
    display.innerText = display.innerText + "1";
  }
}
};
const twoClick = () => {
  if (display.innerText == "0") {
    display.innerText = "2";
  } else {
    if(display.innerText.length<14){
    display.innerText = display.innerText + "2";
  }
}
};

const threeClick = () => {
  if (display.innerText == "0") {
    display.innerText = "3";
  } else {
    if(display.innerText.length<14){
    display.innerText = display.innerText + "3";
  }
}
};

const fourClick = () => {
  if (display.innerText == "0") {
    display.innerText = "4";
  } else {
    if(display.innerText.length<14){
    display.innerText = display.innerText + "4";
  }
}
};

const fiveClick = () => {
  if (display.innerText == "0") {
    display.innerText = "5";
  } else {
    if(display.innerText.length<14){
    display.innerText = display.innerText + "5";
  }
}
};

const sixClick = () => {
  if (display.innerText == "0") {
    display.innerText = "6";
  } else {
    if(display.innerText.length<14){
    display.innerText = display.innerText + "6";
  }
  }
};

const sevenClick = () => {
  if (display.innerText == "0") {
    display.innerText = "7";
  } else {
    if(display.innerText.length<14){
    display.innerText = display.innerText + "7";
  }
}
};

const eightClick = () => {
    if (display.innerText == "0") {
        display.innerText = "8";
      } else {
        if(display.innerText.length<14){
        display.innerText = display.innerText + "8";
      }}
};

const nineClick = () => {
  if (display.innerText == "0") {
    display.innerText = "9";
  } else {
    if(display.innerText.length<14){
    display.innerText = display.innerText + "9";
  }
}
};

const zeroClick = () => {
  if (display.innerText == "0") {
    display.innerText = "0";
  } else {
    display.innerText = display.innerText + "0";
  }
};

const plusClick = () => {
  display.innerText = display.innerText + "+";
  operator = "+";
};

const minusClick = () => {
  display.innerText = display.innerText + "-";
  operator = "-";
};

const multiplyClick = () => {
  display.innerText = display.innerText + "*";
  operator = "*";
};

const divideClick = () => {
  display.innerText = display.innerText + "/";
  operator = "/";
};

const dotClick = () => {
 display.innerText = display.innerText + ".";
};

const acClick = () => {
  display.innerText = 0;
  operator = "";
};

const delClick = () => {
  num = display.innerText;
  if (num.length != 1) {
    num = num.slice(0, -1);
    display.innerText = num;
  }
};

const equalClick = () => {
  switch (operator) {
    case "+":
      result = eval(display.innerText);
      display.innerText = result;
      break;
    case "-":
      result = eval(display.innerText);
      display.innerText = result;
      break;
    case "*":
      result = eval(display.innerText);
      display.innerText = result;
      break;
    case "/":
      result = eval(display.innerText);
      display.innerText = result;
      break;
  }
};

one.addEventListener("click", oneClick);
two.addEventListener("click", twoClick);
three.addEventListener("click", threeClick);
four.addEventListener("click", fourClick);
five.addEventListener("click", fiveClick);
six.addEventListener("click", sixClick);
seven.addEventListener("click", sevenClick);
eight.addEventListener("click", eightClick);
nine.addEventListener("click", nineClick);
zero.addEventListener("click", zeroClick);
plus.addEventListener("click", plusClick);
minus.addEventListener("click", minusClick);
multiply.addEventListener("click", multiplyClick);
divide.addEventListener("click", divideClick);
dot.addEventListener("click", dotClick);
ac.addEventListener("click", acClick);
del.addEventListener("click", delClick);
equal.addEventListener("click", equalClick);