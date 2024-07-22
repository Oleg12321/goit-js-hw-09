const form = document.querySelector('form');

let formData = {
  email: '',
  message: '',
};

const savedSettings = localStorage.getItem('feedback-form-state');
const localStorageKey = 'feedback-form-state';

if (savedSettings) {
  const parsedSettings = JSON.parse(savedSettings);
  form.elements.email.value = parsedSettings.email ?? '';
  form.elements.message.value = parsedSettings.message ?? '';
}

form.addEventListener('input', e => {
  e.preventDefault();
  formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
  formData = {
    email: '',
    message: '',
  };
});
