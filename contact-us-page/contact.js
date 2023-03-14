const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    nav.classList.add("visible-nav");
})

close.addEventListener("click", () => {
    nav.classList.remove("visible-nav");
})

const form = document.querySelector('.contact-us-form');
const thankYouMessage = document.querySelector('.thank-you-message');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneValidation = /^[0-9]+$/;
  const nameValidation =  /^[a-zA-Z]+$/;

  if (!name || !nameValidation.test(name)) {
    alert('Please enter your full name');
    return;
  }

  if (!email || !emailValidation.test(email)) {
    alert('Please enter your email address');
    return;
  }

  if (!phone || !phoneValidation.test(phone)) {
    alert('Please enter your phone number');
    return;
  }

  const formSection = document.querySelector(".contact-us-section");
  formSection.innerHTML = '<div class="thank-you-message">Thank you for contacting us!</div>';

});