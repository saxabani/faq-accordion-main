const minus = document.querySelectorAll(".minus");
const plus = document.querySelectorAll(".plus");
const text = document.querySelectorAll(".text");
const buttons = document.querySelectorAll("button");

function hiding(val) {
    plus[val].classList.toggle("hide");
    minus[val].classList.toggle("hide");
    text[val].classList.toggle("hide");
}

// This loop without event delegation
// for (let i = 0; i < plus.length; i++) {
//     plus[i].addEventListener("click", () => {hiding(i)});

//     minus[i].addEventListener("click", () => {hiding(i)});

//     buttons[i].addEventListener("keydown", (e) => {
//         if(e.key === "Enter") {
//             hiding(i);
//         }
//     })
// }

document.body.addEventListener("click", (e) => {
    const trg = e.target
    if(trg.classList.contains("plus") || trg.classList.contains("minus")) {
        trg.classList.toggle("hide");
        (trg.nextElementSibling|| trg.previousElementSibling).classList.toggle("hide")
        trg.parentNode.parentNode.nextElementSibling.classList.toggle("hide")
    }      
});

for (let i = 0; i < plus.length; i++) {
    buttons[i].addEventListener("keydown", (e) => {
        if(e.key === "Enter") {
            hiding(i);
        }
    })
}