import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');
let delay = form.delay.value;
const step = form.step.value;
const amount = form.amount.value;
const createBtn = document.querySelector("button[data-create]");

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

createBtn.addEventListener('click', onCreateClick);
function onCreateClick(e) {
  e.preventDefault();
  for (let position = 1; position <= amount; position += 1) {
    delay += step;

    createPromise(position, delay)
    .then(() => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(() => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });

    form.reset();
  }
}

// function onError({ position, delay }) {
//   Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
// }

// function onSuccess({ position, delay }) {
//   delay += step;

//   Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
// }
