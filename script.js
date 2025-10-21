const button = document.querySelector('.login-button');
const form = document.querySelector('.hidden-login-form');
const closeButton = document.querySelector('.close-button');
button.addEventListener('click', () => {
  form.style.display = 'flex';
  button.style.display = 'none';
});
closeButton.addEventListener('click', () => {
    form.style.display = 'none';
    button.style.display = 'inline-block';
});

document.addEventListener('click', (e) => {
  // close the form only if clicking outside of it and not on the button
  if (form.style.display === 'flex' && !form.contains(e.target) && e.target !== button) {
    form.style.display = 'none';
    button.style.display = 'inline-block';
  }
});
// Toggle form visibility on button click
// Hide button when form is displayed
// Show button when form is hidden
// Ensure form is hidden by default
