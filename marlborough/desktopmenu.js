// THIS CODE CONTAINS MENU ELEMENT ANIMATIONS AND LOGIC

// Global Vars

const brandWhite = "#EBF2ED";
const brandColorDark = "#051f30";

const closeEverything = document.querySelectorAll(
  '[menu-close="triggeronhover"]'
);

const navEmptyBetween = document.querySelector(
  '[trigger="emprty-between-nav-items"]'
);

const searchBar = document.querySelector('[main-menu="search"]');

// Calculating menuValue number using data-tab
let activeMenu = null;

let menuValue = 0;

document.addEventListener("DOMContentLoaded", () => {
  const mainMenuLinks = document.querySelectorAll('[data-link="menu"]');

  mainMenuLinks.forEach((link) => {
    const navArrowEmbed = link.querySelector(".nav_arrow-embed");

    link.addEventListener("mouseenter", () => {
      if (link !== activeMenu && !link.classList.contains("active")) {
        if (activeMenu) {
          activeMenu.classList.remove("active");
          activeMenu
            .querySelector(".nav_arrow-embed")
            .classList.remove("active");
        }
        link.classList.add("active");
        navArrowEmbed.classList.add("active");
        activeMenu = link;
        menuValue = link.getAttribute("data-value");
        // console.log("Active Link Value:", menuValue);
      }
    });
  });
});

// Four Top Links
const fundsMain = document.querySelector('[main-menu="funds"]');
const solutionsMain = document.querySelector('[main-menu="solutions"]');
const insightsMain = document.querySelector('[main-menu="insights"]');
const whyMain = document.querySelector('[main-menu="whyus"]');

// data Attributes functionity
function addMouseoverEffect(linksSelector) {
  const linksArray = document.querySelectorAll(linksSelector);

  linksArray.forEach((link) => {
    link.addEventListener("mouseover", function () {
      const hoveredLinkIndex = Array.from(linksArray).indexOf(link);

      linksArray.forEach((otherLink, index) => {
        if (index !== hoveredLinkIndex) {
          otherLink.style.transition = "opacity 0.3s ease";
          otherLink.style.opacity = "0.5";
        } else {
          otherLink.style.transition = "opacity 0.3s ease";
          otherLink.style.opacity = "1";
        }
      });
    });
  });
}

function resetOpacityLinks(otherLink) {
  let links = document.querySelectorAll(otherLink);

  for (let index = 0; index < links.length; index++) {
    links[index].style.transition = "opacity 0.3s ease";
    links[index].style.opacity = "1";
  }
}

// Four Wrappers

const fundsWrapper = document.querySelector('[main-menu="funds-wrapper"]');
const solutionsWrapper = document.querySelector(
  '[main-menu="solutions-wrapper"]'
);
const insightsWrapper = document.querySelector(
  '[main-menu="insights-wrapper"]'
);
const whyWrapper = document.querySelector('[main-menu="why-wrapper"]');

// This is intial Condition when wrappers get reset on page load.

const mainLogo = document.querySelector('[main-menu="logoDesktop"]');
const menuTop = document.querySelector('[main-menu="top"]');
const menuBottom = document.querySelector("[main-menu='bottom']");
const navWrapper = document.querySelectorAll(".navwrapper");
const menuwrapper = document.querySelector('[main-menu="gsap-wrapper"]');

if (navWrapper) {
  for (let i = 0; i < navWrapper.length; i++) {
    navWrapper[i].classList.remove("active");
  }
}

if (menuBottom) {
  menuBottom.classList.remove("active");
}

function openMenuContainer() {
  let tl = gsap.timeline();

  if (menuBottom.offsetHeight === 0) {
    tl.set(menuBottom, {
      display: "flex",
      height: "0px"
    });
  }

  tl.to(menuBottom, {
    duration: 0.75,
    height: "auto",
    ease: "ease-in"
  });
}

function openMenuContainerBack() {
  menuBottom.style.height = "0";
  menuBottom.style.display = "none";
}

// Top Hover in and Out
function MenuHoverMainTop() {
  let tl = gsap.timeline();

  tl.to(menuTop, {
    duration: 0,
    backgroundColor: brandColorDark,
    color: "#78888f",
    ease: "ease-out"
  });
}

function MenuHoverOutMainTop() {
  let tl = gsap.timeline();
  tl.to(menuTop, {
    duration: 0,
    backgroundColor: "transparent",
    color: brandColorDark,
    ease: "ease-out"
  });
}

// Logo Animation
function logoAnimation() {
  let tl = gsap.timeline();
  tl.to(mainLogo, {
    duration: 0,
    color: brandWhite,
    ease: "ease-out"
  });
}

function logoAnimationBack() {
  let tl = gsap.timeline();
  tl.to(mainLogo, {
    duration: 0,
    color: brandColorDark,
    ease: "ease-out"
  });
}

// Border Animtion

//
function removeLinkFromActiveMenu() {
  if (activeMenu) {
    activeMenu.classList.remove("active");
    activeMenu.querySelector(".nav_arrow-embed").classList.remove("active");
  }

  return (activeMenu = null);
}

//funds Button

fundsMain.addEventListener("mouseover", function () {
  fundsWrapper.classList.add("active");
  solutionsWrapper.classList.remove("active");
  whyWrapper.classList.remove("active");
  insightsWrapper.classList.remove("active");
  openMenuContainer();
  MenuHoverMainTop();
  logoAnimation();
  addMouseoverEffect('[data-opacity="fundsCF"]');
  addMouseoverEffect('[data-opacity="fundsCSOne-link"]');
  addMouseoverEffect('[data-opacity="fundsCSTwo-link"]');
  addMouseoverEffect('[data-opacity="fundsCSThree-link"]');
});

// Solutions
solutionsMain.addEventListener("mouseover", function () {
  solutionsWrapper.classList.add("active");
  whyWrapper.classList.remove("active");
  fundsWrapper.classList.remove("active");
  insightsWrapper.classList.remove("active");
  openMenuContainer();
  MenuHoverMainTop();
  logoAnimation();
  addMouseoverEffect('[data-opacity="solutionsCF"]');
  addMouseoverEffect('[data-opacity="solutionsCSOne-link"]');
  addMouseoverEffect('[data-opacity="solutionsCSTwo-link"]');
  addMouseoverEffect('[data-opacity="solutionsCSThree-link"]');
});

// insights
insightsMain.addEventListener("mouseover", function () {
  insightsWrapper.classList.add("active");
  whyWrapper.classList.remove("active");
  fundsWrapper.classList.remove("active");
  solutionsWrapper.classList.remove("active");
  openMenuContainer();
  MenuHoverMainTop();
  logoAnimation();
  addMouseoverEffect('[data-opacity="insightsCF"]');
  addMouseoverEffect('[data-opacity="insightsCSOne-link"]');
  addMouseoverEffect('[data-opacity="insightsCSTwo-link"]');
  addMouseoverEffect('[data-opacity="insightsCSThree-link"]');
});

// why button
whyMain.addEventListener("mouseover", function () {
  whyWrapper.classList.add("active");
  fundsWrapper.classList.remove("active");
  solutionsWrapper.classList.remove("active");
  insightsWrapper.classList.remove("active");
  openMenuContainer();
  MenuHoverMainTop();
  logoAnimation();
  addMouseoverEffect('[data-opacity="link"]');
});

//funds

let fundsCFGroup = Array.from(
  document.querySelectorAll('[funds="fundsCF-group"]')
);

let fundsCSGroup = Array.from(
  document.querySelectorAll('[funds="fundsCS-group"]')
);

// solutions
let solutionsCFGroup = Array.from(
  document.querySelectorAll('[solutions="solutionsCF-group"]')
);

let solutionsCSGroup = Array.from(
  document.querySelectorAll('[solutions="solutionsCS-group"]')
);

// insights
let insightsCFGroup = Array.from(
  document.querySelectorAll('[insights="insightsCF-group"]')
);

let insightsCSGroup = Array.from(
  document.querySelectorAll('[insights="insightsCS-group"]')
);

// Main consecultive array
function unhideConsecutiveColumn(previousColumnLinkArray, NextGroupBoxArray) {
  let activeIndex = null; // Keep track of the active index

  // Add event listeners to links in the first column array
  previousColumnLinkArray.forEach((link, index) => {
    link.addEventListener("mouseover", () => {
      // Remove "active" class from the previously active element
      if (activeIndex !== null) {
        NextGroupBoxArray[activeIndex].classList.remove("active");
      }

      // Add "active" class to the element with the same index in the second array
      NextGroupBoxArray[index].classList.add("active");

      // Update the active index
      activeIndex = index;
    });
  });
}

let fundsCLGroup = Array.from(
  document.querySelectorAll('[funds="fundsCL-group"]')
);

let fundsCSWrapperOneLink = Array.from(
  document.querySelectorAll('[funds="CSWrapperOne-link"]')
);

let fundsCTWrapperOneLink = Array.from(
  document.querySelectorAll('[funds="CTWrapperOne-link"]')
);

let fundsCSWrapperTwoLink = Array.from(
  document.querySelectorAll('[funds="CSWrapperTwo-link"]')
);

let fundsCTWrapperTwoLink = Array.from(
  document.querySelectorAll('[funds="CTWrapperTwo-link"]')
);

let fundsCSWrapperThreeLink = Array.from(
  document.querySelectorAll('[funds="CSWrapperThree-link"]')
);

let fundsCTWrapperThreeLink = Array.from(
  document.querySelectorAll('[funds="CTWrapperThree-link"]')
);
// Solutions

let solutionsCLGroup = Array.from(
  document.querySelectorAll('[solutions="solutionsCL-group"]')
);

let solutionsCSWrapperOneLink = Array.from(
  document.querySelectorAll('[solutions="CSWrapperOne-link"]')
);

let solutionsCTWrapperOneLink = Array.from(
  document.querySelectorAll('[solutions="CTWrapperOne-link"]')
);

let solutionsCSWrapperTwoLink = Array.from(
  document.querySelectorAll('[solutions="CSWrapperTwo-link"]')
);

let solutionsCTWrapperTwoLink = Array.from(
  document.querySelectorAll('[solutions="CTWrapperTwo-link"]')
);

let solutionsCSWrapperThreeLink = Array.from(
  document.querySelectorAll('[solutions="CSWrapperThree-link"]')
);

let solutionsCTWrapperThreeLink = Array.from(
  document.querySelectorAll('[solutions="CTWrapperThree-link"]')
);

// insights

let insightsCLGroup = Array.from(
  document.querySelectorAll('[insights="insightsCL-group"]')
);

let insightsCSWrapperOneLink = Array.from(
  document.querySelectorAll('[insights="CSWrapperOne-link"]')
);

let insightsCTWrapperOneLink = Array.from(
  document.querySelectorAll('[insights="CTWrapperOne-link"]')
);

let insightsCSWrapperTwoLink = Array.from(
  document.querySelectorAll('[insights="CSWrapperTwo-link"]')
);

let insightsCTWrapperTwoLink = Array.from(
  document.querySelectorAll('[insights="CTWrapperTwo-link"]')
);

let insightsCSWrapperThreeLink = Array.from(
  document.querySelectorAll('[insights="CSWrapperThree-link"]')
);

let insightsCTWrapperThreeLink = Array.from(
  document.querySelectorAll('[insights="CTWrapperThree-link"]')
);

let whyCF = document.querySelector('[why="whyCF"]');
// WhyDesktop
let whyCFWrapper = Array.from(whyCF.querySelectorAll('[whyyd="whyCF-group"]'));

let whyCLWrapper = Array.from(document.querySelectorAll('[why="whyCL-group"]'));

// console.log(whyCFWrapper, whyCLWrapper);
// funds

unhideConsecutiveColumn(fundsCFGroup, fundsCLGroup);
unhideConsecutiveColumn(fundsCFGroup, fundsCSGroup);
unhideConsecutiveColumn(fundsCSWrapperOneLink, fundsCTWrapperOneLink);
unhideConsecutiveColumn(fundsCSWrapperTwoLink, fundsCTWrapperTwoLink);
unhideConsecutiveColumn(fundsCSWrapperThreeLink, fundsCTWrapperThreeLink);

//solutions
unhideConsecutiveColumn(solutionsCFGroup, solutionsCLGroup); // last column
unhideConsecutiveColumn(solutionsCFGroup, solutionsCSGroup);
unhideConsecutiveColumn(solutionsCSWrapperOneLink, solutionsCTWrapperOneLink);
unhideConsecutiveColumn(solutionsCSWrapperTwoLink, solutionsCTWrapperTwoLink);
unhideConsecutiveColumn(
  solutionsCSWrapperThreeLink,
  solutionsCTWrapperThreeLink
);

unhideConsecutiveColumn(insightsCFGroup, insightsCLGroup);
unhideConsecutiveColumn(insightsCFGroup, insightsCSGroup);
unhideConsecutiveColumn(insightsCSWrapperOneLink, insightsCTWrapperOneLink);
unhideConsecutiveColumn(insightsCSWrapperTwoLink, insightsCTWrapperTwoLink);
unhideConsecutiveColumn(insightsCSWrapperThreeLink, insightsCTWrapperThreeLink);
// Why us

unhideConsecutiveColumn(whyCFWrapper, whyCLWrapper);
// closing function

function closeeverythingfunction() {
  openMenuContainerBack();
  logoAnimationBack();
  MenuHoverOutMainTop();
  whyWrapper.classList.remove("active");
  fundsWrapper.classList.remove("active");
  solutionsWrapper.classList.remove("active");
  removeLinkFromActiveMenu();
  // menuBottom.classList.remove("active");
  resetOpacityLinks('[data-opacity="link"]');
  resetOpacityLinks('[data-opacity="fundsCF"]');
  resetOpacityLinks('[data-opacity="fundsCSOne-link"]');
  resetOpacityLinks('[data-opacity="fundsCSTwo-link"]');
  resetOpacityLinks('[data-opacity="fundsCSThree-link"]');
  // solutions
  resetOpacityLinks('[data-opacity="solutionsCF"]');
  resetOpacityLinks('[data-opacity="solutionsCSOne-link"]');
  resetOpacityLinks('[data-opacity="solutionsCSTwo-link"]');
  resetOpacityLinks('[data-opacity="solutionsCSThree-link"]');

  // insights
  resetOpacityLinks('[data-opacity="insightsCF"]');
  resetOpacityLinks('[data-opacity="insightsCSOne-link"]');
  resetOpacityLinks('[data-opacity="insightsCSTwo-link"]');
  resetOpacityLinks('[data-opacity="insightsCSThree-link"]');
}

menuwrapper.addEventListener("mouseleave", function () {
  closeeverythingfunction();
});

navEmptyBetween.addEventListener("mouseover", function () {
  closeeverythingfunction();
});

// when it goes out
closeEverything.forEach(function (element) {
  element.addEventListener("mouseover", function () {
    closeeverythingfunction();
  });
});

// searchBar
searchBar.addEventListener("focus", function () {
  closeeverythingfunction();
});

// when we click on search

// Funds Columsns
let fundsCFWrapper = document.querySelector('[funds="CFwrapper"]');
let fundsCSWrapper = document.querySelector('[funds="CSwrapper"]');
let fundsCTWrapper = document.querySelector('[funds="CTwrapper"]');
let fundsCLWrapper = document.querySelector('[funds="CLwrapper"]');

// Solutions Columns
let solutionsCFWrapper = document.querySelector('[solutions="CFwrapper"]');
let solutionsCSWrapper = document.querySelector('[solutions="CSwrapper"]');
let solutionsCTWrapper = document.querySelector('[solutions="CTwrapper"]');

// insights Columns
let insightsCFWrapper = document.querySelector('[insights="CFwrapper"]');
let insightsCSWrapper = document.querySelector('[insights="CSwrapper"]');
let insightsCTWrapper = document.querySelector('[insights="CTwrapper"]');

//funds
fundsCFWrapper.addEventListener("mouseover", (e) => {
  resetOpacityLinks('[data-opacity="fundsCSOne-link"]');
  resetOpacityLinks('[data-opacity="fundsCSTwo-link"]');
  resetOpacityLinks('[data-opacity="fundsCSThree-link"]');
});
//soultions
solutionsCFWrapper.addEventListener("mouseover", (e) => {
  resetOpacityLinks('[data-opacity="solutionsCSOne-link"]');
  resetOpacityLinks('[data-opacity="solutionsCSTwo-link"]');
  resetOpacityLinks('[data-opacity="solutionsCSThree-link"]');
});

// insights
insightsCFWrapper.addEventListener("mouseover", (e) => {
  resetOpacityLinks('[data-opacity="insightsCSOne-link"]');
  resetOpacityLinks('[data-opacity="insightsCSTwo-link"]');
  resetOpacityLinks('[data-opacity="insightsCSThree-link"]');
});

$(fundsCFWrapper).hover(function () {
  $(fundsCSWrapper).addClass("active");
});
$(fundsCSWrapper).hover(function () {
  $(fundsCTWrapper).addClass("active");
});
$(fundsCFWrapper).hover(function () {
  $(fundsCTWrapper).find(".active").removeClass("active");
});

$(menuwrapper).mouseleave(function () {
  $(fundsCLWrapper).find(".active").removeClass("active");
});

$(fundsCFWrapper).hover(function () {
  $(fundsCTWrapper).removeClass("active");
});

$(menuwrapper).mouseleave(function () {
  $(fundsCSWrapper).removeClass("active");
});

$(menuwrapper).mouseleave(function () {
  $(fundsCTWrapper).removeClass("active");
});

// Menu Bottom
$(menuwrapper).mouseleave(function () {
  $(menuBottom).removeClass("remove");
});

// Solutions

$(solutionsCFWrapper).hover(function () {
  $(solutionsCSWrapper).addClass("active");
});
$(solutionsCSWrapper).hover(function () {
  $(solutionsCTWrapper).addClass("active");
});
$(solutionsCFWrapper).hover(function () {
  $(solutionsCTWrapper).find(".active").removeClass("active");
});

$(solutionsCFWrapper).hover(function () {
  $(solutionsCTWrapper).removeClass("active");
});

$(menuwrapper).mouseleave(function () {
  $(solutionsCSWrapper).removeClass("active");
});

$(menuwrapper).mouseleave(function () {
  $(solutionsCTWrapper).removeClass("active");
});

//insights

$(insightsCFWrapper).hover(function () {
  $(insightsCSWrapper).addClass("active");
});

$(insightsCFWrapper).hover(function () {
  $(insightsCTWrapper).find(".active").removeClass("active");
});

$(menuwrapper).mouseleave(function () {
  $(insightsCSWrapper).removeClass("active");
});

$(menuwrapper).mouseleave(function () {
  $(insightsCTWrapper).removeClass("active");
});

function addHoverOpacity(wrapperSelector) {
  const wrapper = document.querySelector(wrapperSelector);
  const links = wrapper.querySelectorAll("a");

  wrapper.addEventListener("mouseleave", () => {
    links.forEach((link) => {
      link.style.opacity = "1";
    });
  });

  links.forEach((link) => {
    link.style.transition = "opacity 0.3s ease";

    link.addEventListener("mouseenter", () => {
      links.forEach((otherLink) => {
        if (otherLink !== link) {
          otherLink.style.opacity = "0.5";
        }
      });
      link.style.opacity = "1";
    });
  });
}

addHoverOpacity('[opacitylogic="third-common"]');

// Animation
document.addEventListener("mousemove", function (event) {
  let mouseX = event.clientX; // Get the mouse position on the x-axis

  let windowWidth = window.innerWidth; // Get the window width
  let percentage = (mouseX / windowWidth) * 100; // Calculate the percentage

  let tubeInside = document.querySelector(".bordertopwrapper__tubeinside");
  tubeInside.style.transition = "width  ease"; // Add transition property
  tubeInside.style.width = percentage + "%"; // Set the width of the element

  // Force a reflow to apply the transition immediately
  void tubeInside.offsetWidth;
});
