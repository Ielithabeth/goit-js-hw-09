const body = document.querySelector("body");
const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
let interval = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const onStartClick = () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;

    body.style.backgroundColor = getRandomHexColor();

    interval = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000)
}

const onStopClick = () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;

    clearInterval(interval);
}

startBtn.addEventListener("click", onStartClick);
stopBtn.addEventListener("click", onStopClick);