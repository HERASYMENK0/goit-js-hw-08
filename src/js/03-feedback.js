import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const feedBackKey = 'feedback-form-state';

const savedState = JSON.parse(localStorage.getItem(feedBackKey)) || {};

const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

emailInput.value = savedState.email || '';
messageInput.value = savedState.message || '';

form.addEventListener(
  'input',
  throttle(() => {
    const state = {
      email: emailInput.value,
      message: messageInput.value,
    };

    localStorage.setItem(feedBackKey, JSON.stringify(state));
  }, 500)
);

form.addEventListener('submit', evemt => {
  evemt.preventDefault();

  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };

  emailInput.value = '';
  messageInput.value = '';

  localStorage.removeItem(feedBackKey);
  console.log(state);
});
