const buttons = document.querySelector("button");
const span = document.querySelector("span")

const body = document.querySelector("body");

function random() {

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red},${green},${blue})`
    return randomColor;

}

buttons.addEventListener("click", function () {
    body.style.backgroundColor = random();
    span.textContent = random();

})