import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconError from './img/icon-error.svg';

const refs = {
  form: document.querySelector('.task-form'),
  input: document.querySelector('.form-input'),
  list: document.querySelector('.gallery'),
};
let querySearch = null;
refs.form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  console.log(`input before: `, querySearch);
  if (!refs.input.value) {
    iziToast.error({
      ...iziOptions,
      message: `Please enter your search query, the field cannot be blank!`,
      backgroundColor: 'rgb(239, 64, 64)',
      iconUrl: iconError,
    });
    return;
  }
  querySearch = refs.input.value;
  console.log(`input after: `, querySearch);
  refs.form.reset();
}

const iziOptions = {
  id: 'myIziToast',
  title: 'Error',
  titleColor: 'rgb(255, 255, 255)',
  titleSize: '16',
  messageColor: 'rgb(255, 255, 255)',
  messageSize: '16',
  position: 'topRight',
};
