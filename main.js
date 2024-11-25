const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const text = document.querySelector(".text")

function show() {
    plus.classList.add("hide")
    minus.classList.remove("hide")
    text.classList.remove("hide")
}

function hide() {
    plus.classList.remove("hide")
    minus.classList.add("hide")
    text.classList.add("hide")
}

plus.addEventListener("click", show)
minus.addEventListener("click", hide)