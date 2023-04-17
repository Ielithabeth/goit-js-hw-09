// imports
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
// import Notiflix from 'notiflix';
// imports

// main vars
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
};

const { enableTime, time_24hr, defaultDate, minuteIncrement } = options;

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
}

const picker = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("button[data-start]");
const counterValue = [...document.querySelectorAll(".value")];
console.log(counterValue);

let counter = 10;
let intervalId = null;
flatpickr(picker, options);
// main vars

startBtn.addEventListener("click", onStartClick());
startBtn.disabled = false;

function onStartClick() {
    intervalId = setInterval(() => {
        counterValue[0].textContent = "00";
        counterValue[1].textContent = "00";
        counterValue[2].textContent = "00";
        counterValue[3].textContent = counter;
        
        counter -= 1;
    }, 1000)
}

console.log(options.defaultDate);
