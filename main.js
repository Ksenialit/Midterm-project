window.onload = () => {

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

  const SERVER_URL = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

  async function _getProjectData() {
    const response = await fetch(SERVER_URL);
    const projects = await response.json();
    const projectsData = projects.filter(function(project) {
        return project.uuid <= 3
    });

    projectsData.sort((a, b) => a.uuid - b.uuid);

    _updateProjectsData(projectsData);
  }

  function _updateProjectsData(projectsData) {
    const card = document.querySelector('.projects-cards');
    const projectsDiv = document.querySelector('.projects');
    projectsDiv.innerHTML = "";
    projectsData.forEach(projectData => {
        const cardClone = card.cloneNode(true);
        const otherTitle = cardClone.querySelector('.cards-title');
        otherTitle.textContent = projectData.name;

        const otherDescription = cardClone.querySelector('.projects-paragraph');
        otherDescription.textContent = projectData.description;

        const otherImage = cardClone.querySelector('.projects-cards img');
        otherImage.src = projectData.image;

        const otherLink = cardClone.querySelector('.cards-link');
        otherLink.href = "/projects/1.html?title=" + projectData.name

        projectsDiv.append(cardClone);
    });
  }

  _getProjectData();

}