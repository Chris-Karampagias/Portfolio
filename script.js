function reveal() {
  let projects = document.querySelectorAll(".project");
  let windowHeight = window.innerHeight;
  let projectVisible = windowHeight * 0.5;
  for (let i = 0; i < projects.length; i += 2) {
    let projectDist = projects[i].getBoundingClientRect().top;
    if (projectDist < windowHeight - projectVisible) {
      projects[i].classList.add("reveal-right-rotate-counter-clockwise");
    } else {
      projects[i].classList.remove("reveal-right-rotate-counter-clockwise");
    }
  }

  for (let i = 1; i < projects.length; i += 2) {
    let projectDist = projects[i].getBoundingClientRect().top;
    if (projectDist < windowHeight - projectVisible) {
      projects[i].classList.add("reveal-right-rotate-clockwise");
    } else {
      projects[i].classList.remove("reveal-right-rotate-clockwise");
    }
  }
}

window.addEventListener("scroll", reveal);
