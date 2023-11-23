const errorMessage = document.getElementById('error-message');
const email = document.querySelector('.value');
const sectionCenter = document.querySelector('.section-center');
const submitBtn = document.getElementById('submit');
const dismissBtn = document.getElementById('dismiss');
const success = document.querySelector('.success');
const emailSuccess = document.querySelector('.email-success');



submitBtn.addEventListener('click', () => {
  // let regex = 'goodluckakpakpan69@gmail.com';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email.value)) {
    sectionCenter.classList.add('remove-section');
    success.classList.add('show-success');
    emailSuccess.innerHTML = email.value;
  }
  else {
    errorMessage.innerHTML = 'Valid email required';
    email.classList.add('failed');
    email.classList.remove('revert');
  }

});

dismissBtn.addEventListener('click', () => {
  success.classList.remove('show-success');
  sectionCenter.classList.remove('remove-section');
  email.value = '';
  errorMessage.innerHTML = '';
  email.classList.add('revert');
})