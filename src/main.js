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
  getSearch();
  refs.form.reset();
}

function getSearch() {
  const ApiKey = '43688767-8e78f2c96043da1155d4d6687';
  const searchParams = new URLSearchParams({
    key: ApiKey,
    q: querySearch,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  console.log(`searchParams: ${searchParams.toString()}`);
  return fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (!data.hits.length) {
        iziToast.error({
          ...iziOptions,
          message: `Sorry, there are no images matching your search query. Please try again!`,
          backgroundColor: 'rgb(239, 64, 64)',
          iconUrl: iconError,
        });
        return;
      }
      refs.list.innerHTML = createMarkup(data.hits);
    })
    .catch(error => console.log('catch', error));
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
