import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');
const delay = this.form.delay.value;
const step = this.form.step.value;
const amount = this.form.amount.value;
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

  for (let i = 1; i <= amount; i += 1) {
    delay += step;
    createPromise(i, delay).then(onSuccess).catch(onError);

    form.reset();
  }
}

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}

function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}
