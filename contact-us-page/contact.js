

const SERVER_URL = 'http://localhost:8000/contacts'

window.onload = () => {
  console.log("onload");

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
    const phoneValidation = /^[0-9+]+$/
    const nameValidation =  /^[a-zA-Z\s]+$/;

    if (name === "Ironhack") {
      alert('You cannot be Ironhack, because I am Ironhack');
      return
    }
    
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

    if (!message) {
      alert('Please enter your message');
      return;
    }

    const newContact = {
      name,
      email,
      phone,
      message
    }

    _saveContactData(newContact)

    const formSection = document.querySelector(".contact-us-section");
    formSection.innerHTML = '<div class="thank-you-message">Thank you for contacting us!</div>';

  });

  function _saveContactData(contact) {
    fetch(SERVER_URL, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
    })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
  }

}