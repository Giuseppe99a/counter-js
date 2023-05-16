{ const number = document.getElementById('number');
const buttonPlus = document.getElementById('plus');
const buttonMinus = document.getElementById('minus');

buttonPlus.addEventListener('click', add);
buttonMinus.addEventListener('click', subtract);}

{let value = 0;}

function add() {
  value++;
  number.innerHTML = value;
}

function subtract() {
  value--;
  number.innerHTML = value;
}
const number = document.getElementById('number');

let value = 0;

function addiction(n) {
  value = value + n;
  number.innerHTML = value;
}

let counter = 0;
const count = document.getElementById("count");
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const style = e.currentTarget.classList;
    if (style.contains("minus")) {
      counter--;
    } else if (style.contains("plus")) {
      counter++;
    } else {
      counter = 0;
    }

    count.textContent = counter;
  });
});
