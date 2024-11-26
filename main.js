const minus = document.querySelectorAll(".minus");
const plus = document.querySelectorAll(".plus");
const text = document.querySelectorAll(".text");
let counter = 0;

// for (let i = 0; i < plus.length; i++) {
//     plus[i].addEventListener("click", function() {
//         plus[i].classList.toggle("hide");
//         minus[i].classList.toggle("hide");
//         text[i].classList.toggle("hide");
//     });

//     minus[i].addEventListener("click", function() {
//         plus[i].classList.toggle("hide");
//         minus[i].classList.toggle("hide");
//         text[i].classList.toggle("hide");
//     });
//   }


document.body.addEventListener("keydown", (e) => {
    if(e.key === "ArrowDown") {
        if(counter ==4) {
            counter = 0
            plus[3].classList.toggle("hide");
            minus[3].classList.toggle("hide");
            text[3].classList.toggle("hide");
        }

        plus[counter].classList.toggle("hide");
        minus[counter].classList.toggle("hide");
        text[counter].classList.toggle("hide");

        if(counter >= 1) {
            plus[counter - 1].classList.toggle("hide");
            minus[counter - 1].classList.toggle("hide");
            text[counter - 1].classList.toggle("hide");
        }
        counter++;
    }
    
})


















//     if (counter >= articles.length) {
//     counter = 0;
// } else {
//     plus[counter].classList.toggle("hide");
//     minus[counter].classList.toggle("hide");
//     text[counter].classList.toggle("hide");
    
// }
// counter++