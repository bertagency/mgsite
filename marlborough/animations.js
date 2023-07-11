/*---- Simple Attribute based gsap animations ----*/

/*-- This file contains entrance animations for pages and simple line aniamtions on page reveal*/

// Hero Animation

let PageOnLoadHeading = document.querySelector('[animation="heroheading"]');
let contentBottom = document.querySelector('[animation="contentbottom"]');
let bodyTag = document.querySelector("body");
function headingAnimationOnload() {
  let tl = gsap.timeline();

  tl.to(PageOnLoadHeading, {
    opacity: 1,
    x: 0,
    duration: 0.5,
    ease: "ease-out",
  })
    .to(contentBottom, { opacity: 1, y: 0, duration: 0.75, ease: "ease-in" })
    // .set(bodyTag, {
    //   overflow: "visible"
    // });
    .add(() => {
      if (
        parseFloat(
          window.getComputedStyle(audienceModal).getPropertyValue("opacity")
        ) < 0.2
      ) {
        gsap.set(bodyTag, { overflow: "visible" });
      }
    });
}

headingAnimationOnload();

// Green Line Animation
document.addEventListener("DOMContentLoaded", function () {
  // Your code here

  // Select all elements with the "data-animation" attribute
  const greenLinesAnimated = document.querySelectorAll(
    '[data-animation="greenline"]'
  );

  function greenlineAnimationInView(line) {
    let tl = gsap.timeline();

    tl.to(line, {
      x: "0%",
      duration: 3.75,
      ease: "ease-in",
    });
  }
  // Create an Intersection Observer instance
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const boundingRect = entry.target.getBoundingClientRect();
      const isVisible =
        boundingRect.top >= 0 &&
        boundingRect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight);

      if (isVisible) {
        greenlineAnimationInView(entry.target);
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  });

  // Loop through each element and observe them
  greenLinesAnimated.forEach((line) => {
    observer.observe(line);
  });
});

// Testimonial Mask Image Animation
let testimonialImages = document.querySelectorAll('[datamask="testimonial"]');

function imageMaskGrow(image) {
  let tl = gsap.timeline();

  tl.to(image, {
    webkitMaskSize: "100%",
    maskSize: "100%",
    duration: 1.35,
    ease: "ease-out",
  });
}

// Create an Intersection Observer instance
const observerTestimonial = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const imageHeight = entry.target.clientHeight;
      const threshold = imageHeight * 1; // Trigger animation when image is past 50% in viewport

      if (entry.intersectionRatio >= threshold / imageHeight) {
        imageMaskGrow(entry.target);
        observerTestimonial.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  },
  { threshold: [0, 0.8, 1] }
); // Observe at 0%, 80%, and 100% thresholds

testimonialImages.forEach((image) => {
  observerTestimonial.observe(image);
});
