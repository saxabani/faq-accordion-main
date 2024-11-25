const minus = document.querySelectorAll(".minus");
const plus = document.querySelectorAll(".plus");
const text = document.querySelectorAll(".text");

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function() {
        plus[i].classList.toggle("hide");
        minus[i].classList.toggle("hide");
        text[i].classList.toggle("hide");
    });

    minus[i].addEventListener("click", function() {
        plus[i].classList.toggle("hide");
        minus[i].classList.toggle("hide");
        text[i].classList.toggle("hide");
    });
  }