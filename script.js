let projects = document.querySelectorAll(".project");
let technologies = document.querySelector(".technologies-container");
let mainTitle = document.querySelector(".main-title");
let footer = document.querySelector("footer");
let footerInfo = document.querySelector(".footer-info-container");
let footerImage = document.querySelector(".footer-image");

function reveal() {
  let footerDist = footer.getBoundingClientRect().top;
  let technologiesDist = technologies.getBoundingClientRect().top;
  let mainTitleDist = mainTitle.getBoundingClientRect().top;
  let windowHeight = window.innerHeight;
  let elementVisible = windowHeight * 0.5;
  for (let i = 0; i < projects.length; i += 2) {
    let projectDist = projects[i].getBoundingClientRect().top;
    if (projectDist < windowHeight - elementVisible) {
      projects[i].classList.add("reveal-right-rotate-counter-clockwise");
    } else {
      projects[i].classList.remove("reveal-right-rotate-counter-clockwise");
    }
  }

  for (let i = 1; i < projects.length; i += 2) {
    let projectDist = projects[i].getBoundingClientRect().top;
    if (projectDist < windowHeight - elementVisible) {
      projects[i].classList.add("reveal-right-rotate-clockwise");
    } else {
      projects[i].classList.remove("reveal-right-rotate-clockwise");
    }
  }

  if (technologiesDist < windowHeight - elementVisible) {
    technologies.classList.add("reveal-side");
  } else {
    technologies.classList.remove("reveal-side");
  }

  if (mainTitleDist < windowHeight - elementVisible) {
    mainTitle.classList.add("reveal-side");
  } else {
    mainTitle.classList.remove("reveal-side");
  }

  if (footerDist < windowHeight - 0.7 * elementVisible) {
    footerInfo.classList.add("reveal");
    footerImage.classList.add("reveal");
  } else {
    footerInfo.classList.remove("reveal");
    footerImage.classList.remove("reveal");
  }
}

window.addEventListener("scroll", reveal);

reveal();
