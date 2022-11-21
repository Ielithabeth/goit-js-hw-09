const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.setAttribute('disabled', '');
    stopBtn.removeAttribute('disabled', '');
};

function onStopBtnClick() {
    clearInterval(timerId);
    startBtn.removeAttribute('disabled', '');
    stopBtn.setAttribute('disabled', '');
}