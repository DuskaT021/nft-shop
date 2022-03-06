let body = document.querySelector('body');

function setGradient() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}

setInterval(setGradient, 1000);