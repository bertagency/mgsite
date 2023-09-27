// This code represents the function file for the Splide JS library and  arrow functionality for the Marlborough website.

function oursponsorscarousel() {
  let splides = $(".carousel");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Desktop on down
      perPage: 3,
      perMove: 1,
      focus: 0, // 0 = left and 'center' = center
      type: "loop", // 'loop' or 'slide'
      gap: "2em", // space between slides
      arrows: "slider", // 'slider' or false
      pagination: false, // 'slider' or false
      speed: 600, // transition speed in miliseconds
      dragAngleThreshold: 30, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind: false, // go back to beginning when reach end
      rewindSpeed: 400,
      waitForTransition: false,
      updateOnMove: true,
      trimSpace: false, // true removes empty space from end of list
      breakpoints: {
        991: {
          // Tablet
            perPage: 2,
            perMove: 1,
        },
        767: {
          // Mobile Landscape
            perPage: 1,
            perMove: 1,
        },
        479: {
          // Mobile Portrait
            perPage: 1,
            perMove: 1,
        },
      },
    }).mount();
  }
}
oursponsorscarousel();

const splideCarousels = document.querySelectorAll(
  "[splidejs='splidecarousel']"
);

// Check if any matching elements are found
if (splideCarousels.length > 0) {
  // Iterate through each matching element
  splideCarousels.forEach((selectedSplide) => {
    setupSplideCarousel(selectedSplide);
  });
}

function setupSplideCarousel(selectedSplide) {
  // Find the button elements within the selectedSplide element
  const buttonOutside = selectedSplide.querySelector("[splidejs='arrows']");
  const buttonLeftTrigger = buttonOutside?.querySelector("[splidejs='left']");
  const buttonRightTrigger = buttonOutside?.querySelector("[splidejs='right']");
  const buttonLeftSplideInside = selectedSplide.querySelector(
    ".splide__arrow--prev"
  );
  const buttonRightSplideInside = selectedSplide.querySelector(
    ".splide__arrow--next"
  );
  // Check if all required elements are present
  if (
    buttonOutside &&
    buttonLeftTrigger &&
    buttonRightTrigger &&
    buttonLeftSplideInside &&
    buttonRightSplideInside
  ) {
    // Add click event listeners to trigger the carousel buttons
    buttonLeftTrigger.addEventListener("click", function () {
      buttonLeftSplideInside.click();
    });

    buttonRightTrigger.addEventListener("click", function () {
      buttonRightSplideInside.click();
    });
  }
}
