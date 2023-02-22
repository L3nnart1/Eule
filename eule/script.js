const buy = document.querySelector(".sold");
const btn = document.querySelector("#btn");
const close = document.querySelector("#close");
function sell(){
    buy.classList.toggle("open");
}
btn.addEventListener("pointerdown", () => {
    buy.classList.toggle("open")
})
close.addEventListener("pointerdown", () => {
    buy.classList.toggle("open")
})