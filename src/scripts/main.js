'use strict';

const logo = document.querySelector('.logo');

function ShowMessage(message, isError = false) {
  const el = document.createElement('div');

  el.classList.add('message');

  if (isError) {
    el.classList.add('error-message');
  }
  el.textContent = message;

  document.body.appendChild(el);
}

logo.addEventListener('click', (e) => {
  const click = e.target;

  // eslint-disable-next-line no-new
  new Promise((resolve, reject) => {
    if (!click) {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject(new Error('Promise was rejected!'));
    } else {
      resolve('Promise was resolved!');
    }
  })
    .then((value) => {
      ShowMessage(value);
    })
    .catch((err) => {
      ShowMessage(err.message, true);
    });
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
})
  .then((value) => {
    ShowMessage(`${value}`);
  })
  .catch((err) => {
    ShowMessage(err.message, true);
  });
