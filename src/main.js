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
    return;
  }
  querySearch = refs.input.value;
  console.log(`input after: `, querySearch);
  refs.form.reset();
}
