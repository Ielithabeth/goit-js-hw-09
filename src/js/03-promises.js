import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  createBtn: document.querySelector("button[data-create]"),
}

const { form, createBtn } = refs;

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

  const formData = new FormData(form);
  const dataParams = {};
  
  for (const [key, value] of formData.entries()) {
    dataParams[key] = Number(value);
  }
  
  let { amount, step, delay } = dataParams;
  
  for (let i = 1; i <= amount; i += 1) {
    delay += step;

    createPromise(i, delay).then(onSuccess).catch(onError);

    form.reset();
  }
};

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
};
  
function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
};