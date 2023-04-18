import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

//main refs start
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const choosenDate = new Date();
      if (selectedDates[0] - choosenDate > 0) {
        startBtn.disabled = false;
      } else {
        Notify.failure("Please choose a date in the future");
      }
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

const refs = {
  datetimePicker: document.querySelector("#datetime-picker"),
  timeValue: document.querySelectorAll(".value"),
  startBtn: document.querySelector("button[data-start]"),
}

const { datetimePicker, timeValue, startBtn } = refs;
const pickr = flatpickr(datetimePicker, options);
startBtn.disabled = true;
let intervalId = null;
//main refs end

startBtn.addEventListener("click", onStartClick);
function onStartClick () {
  startBtn.disabled = true;
  const selectedDate = pickr.selectedDates[0];

  intervalId = setInterval(() => {
    const todaysDate = new Date();
    const countdown = selectedDate - todaysDate;

    if (countdown <= "0") {
      clearInterval(intervalId);
      return;
    }

    updateTimeValues(convertMs(countdown));
  }, 1000)
}

function updateTimeValues ({ days, hours, minutes, seconds }) {
  timeValue[0].textContent = addPadStart(days);
  timeValue[1].textContent = addPadStart(hours);
  timeValue[2].textContent = addPadStart(minutes);
  timeValue[3].textContent = addPadStart(seconds);
}

function addPadStart(value) {
  return String(value).padStart(2,0);
}