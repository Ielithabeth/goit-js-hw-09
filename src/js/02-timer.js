import flatpickr from "flatpickr";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
};

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
};

const datetimePicker = document.querySelector("#datetime-picker");
const timeValue = document.querySelectorAll(".value");
const startBtn = document.querySelector("button[data-start]");

const days = document.querySelector("#datetime-picker");
const hours = document.querySelector("#datetime-picker");
const minutes = document.querySelector("#datetime-picker");
const seconds = document.querySelector("#datetime-picker");

flatpickr(datetimePicker, options);