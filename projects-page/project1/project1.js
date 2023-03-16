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
        return params.title-toLowerCase();
    }

    async function _getProjectData() {
        const response = await fetch(SERVER_URL);
        const projects = await response.json();
        const [projectToShow] = projects.filter(project.name.toLoweCase() = _getProjectTitleOnURL());
        console.log(projectToShow);

        _updateProjectData(projectToShow);
    }
        
    function _updateProjectData(projectToShow) {
        const projectTitleHeader = document.querySelector('.cards-title');
        projectTitleHeader.textContent = projectToShow.name;
      }
      _getProjectData();

}