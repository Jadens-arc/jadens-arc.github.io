const body = document.getElementById("body");
const arrow = document.getElementById("arrow");
const main = document.getElementById("main");

const pages = [
  "intro-section",
  "about-page",
  "skills-page",
  "experience-page",
  "projects-page",
  "contact-page",
];

function restartChildAnimations(elementName) {
  let element = document.getElementById(elementName);
  console.log("restarting animations on", elementName);
  element.childNodes.forEach((child) => {
    if (child.style) {
      let oldList = Array.from(child.classList);
      child.classList = "transparent";
      setTimeout(() => {
        child.classList = "";
        oldList.forEach((style) => child.classList.add(style));
      }, 0);
    }
  });
}

function showArrow() {
  // find the current page the user is on
  let currentPage = window.location.href.split("#")[1];
  // handle if user is on root page
  if (!currentPage) currentPage = pages[0];
  if (currentPage == pages[0]) {
    arrow.style.opacity = "0";
  } else {
    arrow.style.opacity = "1";
  }
  // restartChildAnimations(currentPage);
}

showArrow();

function adjPage(mod) {
  // find the current page the user is on
  let currentPage = window.location.href.split("#")[1];
  // handle if user is on root page
  if (!currentPage) currentPage = pages[0];
  let index = pages.indexOf(currentPage);
  if (index + mod < 0) return;
  if (index + mod >= pages.length) {
    currentPage = pages[0];
    window.location = "#" + pages[0];
  } else {
    currentPage = pages[index + mod];
    window.location = "#" + pages[index + mod];
  }
}

document.onkeydown = (key) => {
  switch (key.code) {
    case "ArrowUp":
      key.preventDefault();
      adjPage(-1);
      break;
    case "ArrowDown":
      key.preventDefault();
      adjPage(1);
      break;
    default:
      console.log(key.code);
  }
};

main.onscroll = (e) => {
  showArrow();
};

arrow.addEventListener("click", (e) => {
  e.preventDefault();
  adjPage(1);
});
