const minus = document.querySelectorAll(".minus");
const plus = document.querySelectorAll(".plus");
const text = document.querySelectorAll(".text");
const buttons = document.querySelectorAll("button");

function hiding(num) {
    plus[num].classList.toggle("hide");
    minus[num].classList.toggle("hide");
    text[num].classList.toggle("hide");
}

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", () => {hiding(i)});

    minus[i].addEventListener("click", () => {hiding(i)});

    buttons[i].addEventListener("keydown", (e) => {
        if(e.key === "Enter") {
            hiding(i);
        }
    })
}