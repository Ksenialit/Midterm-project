const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    nav.classList.add("visible-nav");
})

// remove nav
close.addEventListener("click", () => {
    nav.classList.remove("visible-nav");
})

//subscribe section: email validation and add thank you
const subscribeButton = document.getElementById("subscribe");
const emailInput = document.querySelector(".delete-subscribe input[type='email']");

function validEmail(email) {
    // regex pattern for email validation
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValidation.test(email);
  }

subscribeButton.addEventListener("click", function() {
  // check if the email is valid
  const email = emailInput.value;
  if (!validEmail(email)) {
    alert("Please enter a valid email.");
    return;
  }
  
  // remove the subscribe form
  const subscribeSection = document.querySelector(".delete-subscribe");
  subscribeSection.remove();
  
  // add the thank you message
  const questionsSection = document.querySelector(".questions");
  const thankYouText = document.createElement("div");
  thankYouText.classList.add("thank-you-message")
  thankYouText.innerText = "Thank you for subscribing!";
  questionsSection.appendChild(thankYouText);
});

