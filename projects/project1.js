const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    nav.classList.add("visible-nav");
})

close.addEventListener("click", () => {
    nav.classList.remove("visible-nav");
})

const SERVER_URL = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

window.onload = () => {

    function _getProjectTitleOnURL() {
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
        return params.title.toLowerCase();
    }

    async function _getProjectData() {
        const response = await fetch(SERVER_URL);
        const projects = await response.json();
        const [projectToShow] = projects.filter(function(project) {
            return project.name.toLowerCase() === _getProjectTitleOnURL()
        });

        const otherProjects = projects.filter(function(project) {
            return project.name.toLowerCase() !== _getProjectTitleOnURL()
        });

        console.log(projectToShow);

        _updateProjectData(projectToShow);
        _updateOtherProjectsData(otherProjects);
    }
        
    function _updateProjectData(projectToShow) {
        const projectTitleHeader = document.querySelector('.project-content h1');
        projectTitleHeader.textContent = projectToShow.name;

        const projectContent = document.querySelector('.project-explanation p');
        projectContent.textContent = projectToShow.content;

        const projectdescription = document.querySelector('.project_description');
        projectdescription.textContent = projectToShow.description;

        const projectimage = document.querySelector('.project-explanation img');
        projectimage.src = projectToShow.image;

        const projectCompletedOn = document.querySelector('.project-date');
        projectCompletedOn.textContent = "Completed on " + projectToShow.completed_on;

      }

      function _updateOtherProjectsData(otherProjects) {
        const card = document.querySelector('.projects-cards');
        const projectsDiv = document.querySelector('.projects');
        projectsDiv.innerHTML = "";
        otherProjects.forEach(otherProject => {
            const cardClone = card.cloneNode(true);
            const otherTitle = cardClone.querySelector('.cards-title');
            otherTitle.textContent = otherProject.name;

            const otherDescription = cardClone.querySelector('.projects-paragraph');
            otherDescription.textContent = otherProject.description;

            const otherImage = cardClone.querySelector('.projects-cards img');
            otherImage.src = otherProject.image;

            const otherLink = cardClone.querySelector('.cards-link');
            otherLink.href = "/projects/1.html?title=" + otherProject.name

            projectsDiv.append(cardClone);
        });
      }

      _getProjectData();

}